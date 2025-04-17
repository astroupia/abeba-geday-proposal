"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, MonitorSmartphone } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import AnimatedBackground from "@/components/animated-background";

const portfolioItems = [
  {
    id: "diplomat-corner",
    title: "Diplomat Corner",
    description:
      "A sophisticated platform for diplomatic services and international relations.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    url: "https://diplomat-corner.vercel.app",
  },
  {
    id: "fetan",
    title: "Fetan.co",
    description:
      "An innovative forex exchange API provider with advanced currency conversion tools.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    url: "https://fetan.co",
  },
  {
    id: "liyu-catering",
    title: "Liyu Catering",
    description:
      "A modern Ethiopian cuisine catering service with online ordering and event management.",
    image:
      "https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=2070&auto=format&fit=crop",
    url: "https://liyucatering.com",
  },
  {
    id: "wegenie",
    title: "Wegenie",
    description:
      "A community-driven crowdfunding platform connecting projects with supporters.",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
    url: "https://wegenie-webapp.vercel.app",
  },
  {
    id: "organic-millstone",
    title: "Organic Millstone",
    description:
      "Leading provider of organic, bio-sustainable millstones replacing hazardous food production methods.",
    image: "/assets/images/organic.jpg",
    url: "https://organicmillstone.com",
  },
];

export default function PortfolioPage() {
  const [activeItem, setActiveItem] = useState(portfolioItems[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our recent projects and see how we've helped businesses
                transform their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Showcase - Moved up and redesigned */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Browse through our recent work and see the quality and innovation we bring to every project."
            center
          />

          <div className="mt-12 grid md:grid-cols-12 gap-8">
            {/* Preview Section - Now takes 7 columns on the left */}
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full">
                <div className="relative aspect-video">
                  <Image
                    src={activeItem.image || "/placeholder.svg"}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {activeItem.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {activeItem.description}
                  </p>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={activeItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Selection Section - Now takes 5 columns on the right */}
            <div className="md:col-span-5 space-y-4 order-1 md:order-2">
              <div className="bg-card p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Select a project to view</h3>
                <p className="text-sm text-muted-foreground">
                  Click on any of our projects below to see more details.
                </p>
              </div>
              {portfolioItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeItem.id === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-primary/10"
                  }`}
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm truncate">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Website Preview Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Interactive Preview"
            subtitle="Experience our websites in action with this interactive preview."
            center
          />

          <div className="mt-12 bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="bg-secondary p-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2">
                <MonitorSmartphone className="h-5 w-5 text-secondary-foreground/70" />
                <span className="text-secondary-foreground/70 text-sm font-mono">
                  {activeItem.url}
                </span>
              </div>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only">
                    Open in new tab
                  </span>
                </a>
              </Button>
            </div>
            <div className="relative w-full aspect-[16/9] bg-white">
              <iframe
                src={activeItem.url}
                title={`Preview of ${activeItem.title}`}
                className="w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-card border-t">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{activeItem.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive preview of the live website
                  </p>
                </div>
                <Button size="sm" asChild>
                  <a
                    href={activeItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Our Work"
            subtitle="Explore our portfolio of websites and digital experiences we've created for our clients."
            center
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card group">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-center mb-4">{item.description}</p>
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Create Your Next Digital Experience?
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's work together to build a website that showcases your brand
              and drives results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/team">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
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
  );
}
