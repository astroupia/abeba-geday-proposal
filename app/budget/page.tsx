"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SectionHeading from "@/components/section-heading"
import AnimatedBackground from "@/components/animated-background"

export default function BudgetPage() {
  const [selectedOption, setSelectedOption] = useState<"shopify" | "custom">("custom")

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Budget <span className="gradient-text">Proposal</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A transparent breakdown of costs for your digital transformation project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Pricing Breakdown"
            subtitle="Our pricing is structured to provide maximum value while ensuring the highest quality deliverables."
            center
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <Tabs defaultValue="detailed" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="detailed">Detailed Breakdown</TabsTrigger>
                <TabsTrigger value="summary">Summary View</TabsTrigger>
              </TabsList>

              <TabsContent value="detailed" className="space-y-8">
                <div className="bg-card rounded-lg shadow-sm overflow-hidden">
                  <Table>
                    <TableCaption>All prices are in ETB and exclusive of VAT.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[300px]">Service Component</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Cost (ETB)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Discovery & Planning</TableCell>
                        <TableCell>Initial consultations, requirement gathering, architecture design</TableCell>
                        <TableCell className="text-right">50,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Branding & Identity Design</TableCell>
                        <TableCell>Logo, brand guide, digital templates, visual identity (4 entities)</TableCell>
                        <TableCell className="text-right">220,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Website Design (UI/UX)</TableCell>
                        <TableCell>Mobile-first responsive design, prototyping, user journey optimization</TableCell>
                        <TableCell className="text-right">120,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Website App Development</TableCell>
                        <TableCell>Frontend, backend, CMS (custom or HubSpot), SEO setup</TableCell>
                        <TableCell className="text-right">350,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">E-Commerce Integration</TableCell>
                        <TableCell className="flex items-center">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="shopify"
                                name="ecommerce"
                                checked={selectedOption === "shopify"}
                                onChange={() => setSelectedOption("shopify")}
                                className="mr-2"
                              />
                              <label htmlFor="shopify">Shopify setup</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="custom"
                                name="ecommerce"
                                checked={selectedOption === "custom"}
                                onChange={() => setSelectedOption("custom")}
                                className="mr-2"
                              />
                              <label htmlFor="custom">Custom Microservices</label>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {selectedOption === "shopify" ? "405,000" : "555,000"}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Social Media Setup & Strategy</TableCell>
                        <TableCell>Platform setup, branding, strategy & growth tool integration</TableCell>
                        <TableCell className="text-right">150,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Content Calendar & Post Design (3 Months)</TableCell>
                        <TableCell>Content planning, design, and scheduling</TableCell>
                        <TableCell className="text-right">55,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Social Feed Integration</TableCell>
                        <TableCell>Integration of Instagram/Facebook/Twitter feeds</TableCell>
                        <TableCell className="text-right">20,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Training & Knowledge Transfer</TableCell>
                        <TableCell>Hands-on training (ILT, simulation, role-play, video manuals)</TableCell>
                        <TableCell className="text-right">150,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Post-Launch Technical Support (30 Days)</TableCell>
                        <TableCell>Bug fixes, minor changes, performance monitoring</TableCell>
                        <TableCell className="text-right font-medium text-primary">FREE</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary/5 font-bold">
                        <TableCell>TOTAL (Before VAT)</TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-right">
                          {selectedOption === "shopify" ? "1,520,000" : "1,670,000"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="summary">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-lg shadow-sm p-8 border border-border">
                    <h3 className="text-2xl font-bold mb-2">Shopify Integration</h3>
                    <p className="text-muted-foreground mb-6">
                      Perfect for businesses looking for a quick e-commerce setup with minimal maintenance.
                    </p>
                    <div className="text-4xl font-bold mb-6">
                      1,520,000 <span className="text-lg font-normal text-muted-foreground">ETB</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Complete branding package",
                        "Responsive website development",
                        "Shopify e-commerce integration",
                        "Social media setup & strategy",
                        "Comprehensive training",
                        "30 days free support",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>

                  <div className="bg-card rounded-lg shadow-sm p-8 border-2 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-4 text-sm font-medium">
                      Popular
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Custom Microservices</h3>
                    <p className="text-muted-foreground mb-6">
                      Ideal for businesses requiring complete control and advanced customization.
                    </p>
                    <div className="text-4xl font-bold mb-6">
                      1,670,000 <span className="text-lg font-normal text-muted-foreground">ETB</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Complete branding package",
                        "Responsive website development",
                        "Custom e-commerce microservices",
                        "Advanced admin controls",
                        "Social media setup & strategy",
                        "Comprehensive training",
                        "30 days free support",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Payment Terms"
            subtitle="Our milestone-based payment structure ensures transparency and aligns deliverables with payments."
            center
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[70%]">Milestone</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Upon contract signing</TableCell>
                    <TableCell className="text-right">20%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">After website development completion</TableCell>
                    <TableCell className="text-right">35%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">After integration of AI, GPS, and e-commerce</TableCell>
                    <TableCell className="text-right">20%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">After training, handover, and project delivery</TableCell>
                    <TableCell className="text-right">25%</TableCell>
                  </TableRow>
                  <TableRow className="bg-primary/5 font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">100%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>• VAT will be applied as per applicable tax laws.</p>
              <p>• Payment Due: Within 2 business days of invoice issuance at each milestone.</p>
              <p>• Mode of Payment: Bank transfer or cheque, details to be provided upon agreement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Maintenance & Support"
            subtitle="After the launch of your digital platform, Sydek offers an optional monthly maintenance and support retainer."
            center
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Paid Standard Monthly Maintenance Package</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    service: "Performance Monitoring",
                    details: "Real-time uptime tracking, load balancing audits, and speed optimizations.",
                  },
                  {
                    service: "Security Updates",
                    details: "CMS patching, SSL renewals, dependency upgrades, and vulnerability scans.",
                  },
                  {
                    service: "Content Update Assistance",
                    details: "Minor updates to text/images, job listings, and blog posts.",
                  },
                  {
                    service: "Bug Fixes & Minor Enhancements",
                    details: "Up to 10 hours/month of support for small changes and fixes.",
                  },
                  {
                    service: "System Backup & Recovery",
                    details: "Daily server backups, monthly restore point validation.",
                  },
                  {
                    service: "Third-Party Integration Maintenance",
                    details: "Ensuring continued functionality of GPS, chatbot, e-commerce, etc.",
                  },
                  {
                    service: "Monthly Report",
                    details: "Summary of tasks completed, performance metrics, and recommendations.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.service}</h4>
                      <p className="text-muted-foreground text-sm">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg text-sm">
                <p>
                  Additional development or major feature changes beyond the scope of the retainer will be billed
                  separately with client approval.
                </p>
              </div>

              <div className="mt-8 text-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="lg" variant="outline" className="gap-2">
                        <Info className="h-4 w-4" />
                        Request Maintenance Package Quote
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Maintenance packages are customized based on your specific needs.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Invest in Your Digital Future?</h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's work together to create a comprehensive digital ecosystem that elevates your brand and supports your
              business objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/portfolio">
                  View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
