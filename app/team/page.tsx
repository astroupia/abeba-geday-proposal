import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import AnimatedBackground from "@/components/animated-background";
import InteractiveCard from "@/components/interactive-card";

const teamMembers = [
  {
    name: "Daniel Solomon",
    role: "CEO",
    bio: "With over 10 years of experience in digital project management, Daniel ensures every project is delivered on time and exceeds client expectations.",
    image: "/assets/images/daniel.jpg",
    social: {
      linkedin: "http://linkedin.com/in/daniel-solomon-720b5b157",
      email: "daniel@sydek.dev",
    },
  },
  {
    name: "Michael Seyoum",
    role: "COO",
    bio: "Michael combines strategic vision with operational excellence to ensure our company delivers the highest quality solutions to our clients.",
    image: "/assets/images/michael.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/michael-seyoum-bb899423a",
      email: "michael@sydek.dev",
    },
  },
  {
    name: "Nahom Teguade",
    role: "CTO",
    bio: "Nahom specializes in creating innovative technical solutions and leads our development team with expertise in cutting-edge technologies.",
    image: "/assets/images/nahom.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nahom-teguade-38b4ba1b9/",
      email: "nahom@sydek.dev",
    },
  },
  {
    name: "Esperansa Dereje",
    role: "Project Manager",
    bio: "Esperansa is an expert in server-side architecture, database design, and API development, ensuring our solutions are robust and scalable.",
    image: "/assets/images/esperansa.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/esperansa-dereje-26a85a292",
      email: "esperansadereje21@gmail.com",
    },
  },
  {
    name: "Ananya Fekeremariam",
    role: "Lead Engineer",
    bio: "Ananya specializes in artificial intelligence and natural language processing, creating intelligent solutions for our clients.",
    image: "/assets/images/ananya.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ananya-fekeremariam-7298b8248/",
      email: "ananyafekeremariam@gmail.com",
    },
  },
  {
    name: "Yohanan Mengistu",
    role: "Creative Director",
    bio: "Yohanan develops engaging content strategies and creative campaigns that connect brands with their target audiences.",
    image: "/assets/images/yohanan.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/yohanan-mengistu-452677210/",
      email: "info@sydek.com",
    },
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative h-full">
          <AnimatedBackground opacity={0.2} />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Meet Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The talented individuals who will bring your digital vision to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Our Experts"
            subtitle="Our team includes top-tier developers with backgrounds at global technology firms like Google and Bloomberg, who bring world-class engineering discipline and creativity to every project."
            center
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <InteractiveCard
                key={index}
                className="bg-card overflow-hidden h-full"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`mailto:${member.social.email}`}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Our Team Values"
                subtitle="What makes our team special is our shared commitment to excellence, innovation, and client success."
              />

              <div className="space-y-4">
                {[
                  {
                    title: "Collaborative Spirit",
                    description:
                      "We believe in the power of teamwork and open communication to achieve the best results.",
                  },
                  {
                    title: "Technical Excellence",
                    description:
                      "We continuously improve our skills and stay updated with the latest technologies and best practices.",
                  },
                  {
                    title: "Client-Focused Approach",
                    description:
                      "We put our clients' needs first and work closely with them to ensure their vision becomes reality.",
                  },
                  {
                    title: "Creative Problem-Solving",
                    description:
                      "We approach challenges with creativity and innovation, finding unique solutions to complex problems.",
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="/assets/images/group.jpg"
                alt="Team Collaboration"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Join Our Team"
            subtitle="We're always looking for talented individuals to join our growing team."
            center
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="mb-8">
              At Sydek, we value creativity, technical excellence, and a passion
              for delivering exceptional digital experiences. If you're
              interested in joining our team, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
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
              Ready to Work With Our Team?
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Let's collaborate to bring your digital vision to life with our
              expert team of designers, developers, and strategists.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/">
                  Back to Introduction <ArrowRight className="ml-2 h-4 w-4" />
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
