import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import AnimatedBackground from "@/components/animated-background"

export default function TimelinePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Project <span className="gradient-text">Timeline</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A detailed breakdown of our project phases and estimated duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Project Timeline Overview"
            subtitle="The following timeline outlines the estimated duration for each phase of the project. All phases can be adjusted based on feedback and collaboration pace from both teams."
            center
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold">Total Estimated Time:</span>
              </div>
              <span className="text-lg font-bold">16-20 weeks</span>
            </div>

            <div className="timeline-container py-10">
              {[
                {
                  phase: "Discovery & Planning",
                  activities: "Requirements gathering, brand alignment, tech stack finalization",
                  duration: "1st week",
                  isActive: true,
                },
                {
                  phase: "Branding & Identity Design",
                  activities: "Logo, visual assets, brand guide, and marketing materials",
                  duration: "2nd - 5th weeks",
                },
                {
                  phase: "Website Design (UI/UX)",
                  activities: "Wireframing, prototyping, and mobile-first design implementation",
                  duration: "6th - 8th week",
                },
                {
                  phase: "Web Development",
                  activities: "Frontend & backend development, CMS setup or custom build, feature integration",
                  duration: "6th – 16th weeks",
                },
                {
                  phase: "Social Media Setup & Strategy",
                  activities: "Platform branding, content strategy, growth tools integration",
                  duration: "4th – 12th week",
                },
                {
                  phase: "E-Commerce Integration",
                  activities: "Shopify integration or custom store and admin microservices",
                  duration: "2nd – 16th week",
                },
                {
                  phase: "Testing & Launch",
                  activities: "End-to-end testing, UAT, deployment",
                  duration: "16th - 17th week",
                },
                {
                  phase: "Training & Knowledge Transfer",
                  activities: "CMS training, social media, SEO, and analytics",
                  duration: "17th – 20th days",
                },
                {
                  phase: "Post-Launch Support",
                  activities: "Technical assistance, optional retainer services",
                  duration: "Ongoing",
                },
              ].map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-content ${index % 2 === 0 ? "ml-auto" : "mr-auto"} bg-card`}>
                    <h3 className="text-lg font-semibold">{item.phase}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.activities}</p>
                    <div className="flex items-center mt-3">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium">{item.duration}</span>
                    </div>
                    {item.isActive && (
                      <div className="mt-3 flex items-center text-sm text-primary">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Current Phase</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/budget">
                View Budget Proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Team Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Project Team & Responsibilities"
            subtitle="Our team structure ensures end-to-end project ownership, streamlined communication, and expert handling of each project phase."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                role: "Project Manager",
                responsibility: "Oversees progress, facilitates communication, ensures milestones are met",
              },
              {
                role: "Lead UI/UX Designer",
                responsibility: "Designs user flows, prototypes, and mobile-first responsive UI",
              },
              {
                role: "Frontend Developer(s)",
                responsibility: "Implements interactive web interfaces using modern frameworks",
              },
              {
                role: "Backend Developer(s)",
                responsibility: "Builds server-side logic, APIs, and integrations (e.g., job system, e-commerce)",
              },
              {
                role: "Quality Assurance",
                responsibility: "Testing use cases and user experience",
              },
              {
                role: "AI/Chatbot Engineer",
                responsibility: "Integrates and trains AI chatbot with relevant responses and workflows",
              },
              {
                role: "GPS Integration Expert",
                responsibility: "Handles real-time tracking integration and geolocation services",
              },
              {
                role: "Content & Social Strategist",
                responsibility: "Designs content calendar, brand tone, growth strategy",
              },
              {
                role: "SEO & Analytics Specialist",
                responsibility: "Sets up indexing, tracks performance, ensures visibility",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary">{member.role}</h3>
                <p className="text-muted-foreground mt-2">{member.responsibility}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <p className="text-center">
              We also maintain a standby DevOps and QA team for deployment, monitoring, and bug fixing.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Project Deliverables"
            subtitle="Upon successful completion of the project, Sydek will provide the following tangible and digital deliverables."
            center
          />

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Branding & Identity</h3>
                <ul className="space-y-2">
                  {[
                    "Logo files (SVG, PNG, PDF)",
                    "Brand guide (colors, fonts, usage)",
                    "Business cards, letterhead, and digital templates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Website & E-Commerce Platform</h3>
                <ul className="space-y-2">
                  {[
                    "Fully functional corporate website",
                    "Custom or HubSpot CMS",
                    "AI chatbot integration",
                    "Real-time GPS tracking module",
                    "Custom e-commerce module or Shopify integration",
                    "Admin panel (for internal control and management)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Social Media Package</h3>
                <ul className="space-y-2">
                  {[
                    "Set up and branding of all key social media accounts",
                    "Content strategy guide and calendar",
                    "Tools and dashboards for engagement tracking",
                    "Social feed integration into the website",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Training & Handover Materials</h3>
                <ul className="space-y-2">
                  {[
                    "Instructor-led training sessions (live and recorded)",
                    "Step-by-step CMS & admin guides",
                    "Editable design files (Figma, Illustrator)",
                    "SEO checklist and analytics dashboard training",
                    "Technical documentation for future enhancements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Post-Launch Support</h3>
                <ul className="space-y-2">
                  {["30 days of free technical support", "Optional monthly support retainer"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/budget">
                View Budget Proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's work together to create a comprehensive digital ecosystem that elevates your brand and supports your
              business objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/budget">
                  View Budget Proposal <ArrowRight className="ml-2 h-4 w-4" />
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
