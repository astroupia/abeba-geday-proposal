import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Palette,
  Globe,
  Share2,
  BookOpen,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import InteractiveCard from "@/components/interactive-card";
import AnimatedBackground from "@/components/animated-background";

export default function SolutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our <span className="gradient-text">Proposed Solution</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive digital transformation package designed
                specifically for Abeba Giday Business Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Four Pillars of Digital Transformation"
                subtitle="Our approach combines proven technical expertise with a deep understanding of brand positioning and user experience."
              />

              <div className="space-y-4">
                {[
                  {
                    icon: <Palette className="h-6 w-6" />,
                    title: "Corporate Branding & Marketing Materials",
                    description:
                      "A cohesive, modern brand identity that aligns with your mission, values, and market positioning.",
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Website Design & Development",
                    description:
                      "A fully responsive, SEO-optimized, and high-performance corporate website with advanced features.",
                  },
                  {
                    icon: <Share2 className="h-6 w-6" />,
                    title: "Social Media Integration & Management",
                    description:
                      "Strategy-first approach using proprietary tools to track performance and engagement.",
                  },
                  {
                    icon: <BookOpen className="h-6 w-6" />,
                    title: "Long-Term Hands-On Training & Support",
                    description:
                      "Comprehensive training for your internal teams on website management, social media, and more.",
                  },
                ].map((pillar, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{pillar.title}</h3>
                      <p className="text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href="/timeline">
                  View Project Timeline <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Transformation"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Branding Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Corporate Branding & Marketing Materials"
            subtitle="We follow a phased methodology that ensures deep stakeholder alignment and creative distinction throughout the branding process."
            center
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Stakeholder Discovery",
                description:
                  "We begin with a focused stakeholder meeting to understand the Group's strategic positioning, business values, target audience, and future aspirations.",
              },
              {
                step: "02",
                title: "X-Factor Interviews",
                description:
                  "We conduct guided interviews and structured questionnaires with key stakeholders to uncover the emotional, visual, and strategic qualities.",
              },
              {
                step: "03",
                title: "Moodboard Exploration",
                description:
                  "We create and present three distinct moodboards representing different aesthetic directions—color palette, texture, tone, and design feel.",
              },
              {
                step: "04",
                title: "Logo & Identity Concepts",
                description:
                  "We provide two logo concepts for each entity, along with typography options and visual pattern ideas to support the chosen identity.",
              },
              {
                step: "05",
                title: "Mockup Development",
                description:
                  "Once approved, we develop a full set of brand mockups across the requested marketing materials, from business cards to branded merchandise.",
              },
              {
                step: "06",
                title: "Delivery of Brand Kit",
                description:
                  "We compile and deliver the complete brand kit, including all design assets in editable formats, high-resolution exports, and style guide documentation.",
              },
            ].map((step, index) => (
              <InteractiveCard key={index} className="bg-card p-6 h-full">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/timeline">
                View Project Timeline <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Website Design & Development"
            subtitle="We specialize in building high-performance, scalable, and visually compelling web platforms tailored for modern enterprises."
            center
          />

          <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                alt="Website Development"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold">
                Key Features & Implementation
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Job Vacancy Management System",
                    description:
                      "A dedicated recruitment module with administrative controls for posting, managing, and archiving vacancies.",
                  },
                  {
                    title: "AI Chatbot Integration",
                    description:
                      "A smart, conversational AI chatbot using tools like GPT APIs that can answer FAQs and guide users.",
                  },
                  {
                    title: "E-commerce Module",
                    description:
                      "Either a seamless Shopify integration or custom microservices for greater control and scalability.",
                  },
                  {
                    title: "Real-Time GPS Tracking",
                    description:
                      "Integration of real-time GPS tracking to support logistics and vehicle monitoring.",
                  },
                  {
                    title: "Modern UI/UX Design",
                    description:
                      "Interactive layouts, bold design systems, and mobile-first responsiveness for exceptional user experience.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-2">Technical Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TailwindCSS",
                    "React",
                    "Go",
                    "PostgreSQL",
                    "Docker",
                    "Kubernetes",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Social Media Integration & Management"
            subtitle="Our strategy is designed to build community, drive measurable engagement, and align with your broader digital objectives."
            center
          />

          <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Approach</h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Setup and Branding of Official Accounts",
                    description:
                      "Creation and configuration of profiles across relevant platforms, aligned with your finalized brand identity.",
                  },
                  {
                    title: "Social Media Strategy Development",
                    description:
                      "A tailored strategy including platform-specific voice, key messaging, and performance indicators.",
                  },
                  {
                    title: "Content Planning & Creation",
                    description:
                      "A rolling monthly content calendar with categories such as company news, service highlights, and more.",
                  },
                  {
                    title: "Website Integration",
                    description:
                      "Seamless embedding of social media feeds into the new website to increase visibility and engagement.",
                  },
                  {
                    title: "Analytics & Training",
                    description:
                      "A 3-day hybrid training covering both foundational and hands-on components of social media management.",
                  },
                ].map((approach, index) => (
                  <div key={index} className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">{approach.title}</h4>
                      <p className="text-muted-foreground">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
                alt="Social Media Management"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Long-Term Hands-On Training & Support"
            subtitle="We design our training programs with long-term sustainability, staff engagement, and operational readiness in mind."
            center
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "CMS & Website Content Management",
                description:
                  "Training on content editing, media management, and SEO optimization using our custom CMS tools.",
              },
              {
                title: "Digital Marketing & Social Media",
                description:
                  "Guidance on planning content, managing posts, and analyzing metrics across platforms.",
              },
              {
                title: "SEO & Analytics",
                description:
                  "Practical training on SEO essentials and analytics tailored to internal business users.",
              },
              {
                title: "Design Handover",
                description:
                  "Complete package with editable files, exported assets, and documentation on asset usage.",
              },
              {
                title: "Multi-Modal Learning",
                description:
                  "A mix of instructor-led training, simulation, role-playing, and microlearning modules.",
              },
              {
                title: "Post-Launch Support",
                description:
                  "Technical support, comprehensive documentation, and optional monthly service retainer.",
              },
            ].map((training, index) => (
              <InteractiveCard key={index} className="bg-card p-6 h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{training.title}</h3>
                  <p className="text-muted-foreground">
                    {training.description}
                  </p>
                </div>
              </InteractiveCard>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Begin Your Digital Transformation?
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's work together to create a comprehensive digital ecosystem
              that elevates your brand and supports your business objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/timeline">
                  View Project Timeline <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outlineInverse" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
