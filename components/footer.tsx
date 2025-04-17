import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkedinIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold gradient-text">Sydek</h3>
          <p className="text-secondary-foreground/70">
            Leading digital solutions provider, delivering high-quality, custom web and mobile development services.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a
                href="https://www.linkedin.com/company/sydekse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/solution" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Proposed Solution
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Project Timeline
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <address className="not-italic text-secondary-foreground/70">
            <p>Addis Ababa, Ethiopia</p>
            <p>Email: info@sydek.com</p>
            <p>Phone: +251 911 123 456</p>
          </address>
          <Button className="w-full" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-secondary-foreground/10">
        <p className="text-center text-secondary-foreground/50 text-sm">
          © {new Date().getFullYear()} Sydek IT Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
