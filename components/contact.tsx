"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Contact() {
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
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Tailor Location</p>
                  <p className="text-muted-foreground">
                    Jalan Hayam Wuruk No 25, Jakarta Barat
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">021 345 1127</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="text-secondary mt-1" size={20} />
                <div>
                  <p className="font-normal text-foreground mb-1">Whatsapp</p>
                  <p className="text-muted-foreground">+62 815 1923 6835</p>
                </div>
              </div>
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
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john.smith@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="service" className="text-sm text-muted-foreground mb-2 block">
                  Service Interest
                </label>
                <Input id="service" placeholder="Bespoke Suit, Made-to-Measure, etc." />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
