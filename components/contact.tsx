"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.service.trim()) {
      newErrors.service = "Service interest is required"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const responseData = await response.json()
      console.log("API Response:", { status: response.status, data: responseData })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
        setErrors({})
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        console.error("Email sending failed:", responseData)
        setSubmitError(responseData.details || responseData.error || "Failed to send email")
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Network error. Please try again.")
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-secondary mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">
              Begin Your
              <br />
              <span className="italic font-normal">Bespoke Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Visit our atelier or reach out to schedule a private consultation. We look forward to creating your
              perfect garment.
            </p>

            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/place/The+Beauty+Tailor/data=!4m2!3m1!1s0x0:0x3699e66c08874e45?sa=X&ved=1t:2428&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <MapPin className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Tailor Location</p>
                  <p className="text-muted-foreground">
                    Jalan Hayam Wuruk No 25, Jakarta Barat
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <Phone className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">021 345 1127</p>
                </div>
              </div>
              <a 
                href="https://wa.me/6281519236835" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <MessageCircle className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Whatsapp</p>
                  <p className="text-muted-foreground">+62 815 1923 6835</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <Mail className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground">hreggy@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Open Hours</p>
              <p className="text-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: 09:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-light text-foreground mb-8">Request Consultation</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Smith" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.smith@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor="service" className="text-sm text-muted-foreground mb-2 block">
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="service" 
                  placeholder="Bespoke Suit, Made-to-Measure, etc." 
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? "border-red-500" : ""}
                />
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your requirements..." 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-800 rounded-sm text-sm">
                  Thank you! Your consultation request has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-800 rounded-sm text-sm">
                  <p className="font-semibold mb-1">Error sending request:</p>
                  <p>{submitError || "Something went wrong. Please try again later."}</p>
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
