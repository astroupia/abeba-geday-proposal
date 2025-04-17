"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import AnimatedBackground from "@/components/animated-background";
import SectionHeading from "@/components/section-heading";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We'd love to hear from you. Reach out to discuss your project or
                ask any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us through any of these channels or fill out the form."
              />

              <div className="mt-8 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Office</h3>
                        <p className="text-muted-foreground">
                          Addis Ababa, Ethiopia
                        </p>
                        <p className="text-muted-foreground">
                          Bole Road, Sunshine Building, 4th Floor
                        </p>
                        <a
                          href="https://maps.app.goo.gl/gxfde71PNvRdbafg9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary flex items-center mt-2 text-sm hover:underline"
                        >
                          View on Google Maps{" "}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p className="text-muted-foreground">
                          +251 911 123 456
                        </p>
                        <p className="text-muted-foreground">
                          +251 911 789 012
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-muted-foreground">info@sydek.com</p>
                        <p className="text-muted-foreground">
                          support@sydek.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Working Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5511167936366!2d38.7894!3d9.0016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDUuOCJOIDM4wrA0NycyMS44IkU!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>

            <div>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent successfully. We'll get back
                        to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+251 911 123 456"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select
                          value={formState.service}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="branding">
                              Corporate Branding
                            </SelectItem>
                            <SelectItem value="website">
                              Website Development
                            </SelectItem>
                            <SelectItem value="ecommerce">
                              E-commerce Solutions
                            </SelectItem>
                            <SelectItem value="social">
                              Social Media Management
                            </SelectItem>
                            <SelectItem value="training">
                              Training & Support
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and process."
            center
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is the typical timeline for a website project?",
                answer:
                  "Our website projects typically take 8-12 weeks from start to finish, depending on the complexity and scope. We follow a structured process that includes discovery, design, development, testing, and launch phases.",
              },
              {
                question:
                  "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our standard package includes 30 days of free support, and we offer monthly retainer options for ongoing assistance.",
              },
              {
                question: "How do you handle project payments?",
                answer:
                  "We work with a milestone-based payment structure. Typically, this includes 20% upon contract signing, 35% after website development, 20% after integration of features, and 25% after training and project delivery.",
              },
              {
                question: "Can you help with content creation for our website?",
                answer:
                  "We offer content strategy and creation services as part of our comprehensive digital solutions. Our team includes copywriters and content strategists who can help craft compelling messaging for your brand.",
              },
              {
                question:
                  "Do you provide training for our team to manage the website?",
                answer:
                  "Yes, we provide comprehensive training sessions to ensure your team can confidently manage and update your website. This includes CMS training, content management, and basic troubleshooting.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's collaborate to create a digital presence that elevates your
              brand and drives results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
              <Button size="lg" variant="outlineInverse" asChild>
                <Link href="/solution">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
