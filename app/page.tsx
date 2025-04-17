import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Lightbulb,
  Award,
} from "lucide-react";
import AnimatedBackground from "@/components/animated-background";
import AnimatedText from "@/components/animated-text";
import SectionHeading from "@/components/section-heading";
import InteractiveCard from "@/components/interactive-card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container flex flex-col items-center text-center relative z-10">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <div className="mb-4">
                  {/* Render each word separately with a space */}
                  {"Digital Transformation Proposal for"
                    .split(" ")
                    .map((word, index) => (
                      <AnimatedText
                        key={index}
                        text={word}
                        className="inline-block mr-2"
                        once
                      />
                    ))}
                </div>
                <div>
                  {/* Render each word separately with a space */}
                  {"Abeba Geday Business Group"
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        className="gradient-text inline-block mr-2"
                      >
                        {word}
                      </span>
                    ))}
                </div>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive digital ecosystem that seamlessly integrates
                branding, web development, social media management, and hands-on
                training.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button size="lg" asChild>
                  <Link href="/solution">
                    Explore Our Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sydek Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Introduction to Sydek"
            subtitle="A leading digital solutions provider, known for delivering high-quality, custom web and mobile development services."
            center
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Sydek is a full-service digital agency with a team of top-tier
                developers—some with backgrounds at global technology firms like
                Google and Bloomberg, who bring world-class engineering
                discipline and creativity to every project we undertake.
              </p>
              <p>
                We specialize in full-cycle digital services, including brand
                identity design, enterprise software development, mobile apps,
                and scalable cloud solutions. Our work is driven by precision,
                innovation, and a deep commitment to our clients' success.
              </p>
              <ul className="space-y-2">
                {[
                  "Full-cycle digital services",
                  "Brand identity design",
                  "Enterprise software development",
                  "Mobile applications",
                  "Scalable cloud solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/solution">
                  Discover Our Approach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Sydek Team"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="What sets Sydek apart is our client-first approach. We work closely with you to understand your challenges, goals, and market."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality in everything we do.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership with our clients.",
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical standards in all our dealings.",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "Technical Excellence",
                description:
                  "Our solutions rely on modern architectures and best practices to ensure long-term reliability.",
              },
              {
                icon: <ArrowRight className="h-10 w-10" />,
                title: "Client-First",
                description:
                  "We act as your digital partner—equipping your team with the right tools and support.",
              },
            ].map((value, index) => (
              <InteractiveCard key={index} className="bg-card p-6">
                <div className="space-y-4">
                  <div className="p-2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's work together to create a comprehensive digital ecosystem
              that elevates your brand and supports your business objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/solution">
                  Explore Our Solution <ArrowRight className="ml-2 h-4 w-4" />
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
