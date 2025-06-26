import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

// Service schedule from company profile
const serviceSchedule = [
  { name: "Sunday Victory Service", time: "7:30am", day: "Sunday" },
  { name: "Teaching Service", time: "6:30pm", day: "Tuesday" },
  { name: "Breakthrough Service", time: "6:30pm", day: "Friday" },
];

// Quick links for the footer
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Ministry programs that match the services page
const ministryPrograms = [
  { href: "/services#youth-ministry", label: "Youth Ministry" },
  { href: "/services#kharis-praise-team", label: "Kharis Praise Team" },
  {
    href: "/services#rural-world-ministry",
    label: "Christ to the Rural World Ministry",
  },
  { href: "/services#community-impact", label: "Community Impact" },
];

// Social media links from company profile
const socialLinks = [
  {
    href: "https://www.facebook.com/cemkharistemple/",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/cemkharistemple/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@cemkharistemple7638",
    icon: Youtube,
    label: "YouTube",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      {/* Main Footer Content */}
      <div className="church-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Church Information */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="CEM-Kharis Temple Logo"
                width={800}
                height={800}
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-neutral-300 mb-4 leading-relaxed">
              "We're helping people reconnect with God as a Family!"
            </p>

            <p className="text-sm text-neutral-400 mb-6">
              Founded by Rev. Dr. Steve Mensah, we are committed to making every
              parishioner a faithful person and bringing Christ to communities
              worldwide.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministry Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Ministries
            </h4>
            <ul className="space-y-3">
              {ministryPrograms.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Live Stream Link */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-white">Live Stream</span>
              </div>
              <Link
                href="https://youtu.be/2BU9oZ0VZ6Y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Watch Our Services Live →
              </Link>
            </div>
          </div>

          {/* Contact Information & Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact & Service Times
            </h4>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm text-neutral-300">
                    Adenta Housing Down Near Aviation Roundabout, Adenta-Accra,
                    Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <Link
                    href="tel:+233543150780"
                    className="text-sm text-neutral-300 hover:text-primary"
                  >
                    +233543150780
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <Link
                    href="mailto:info@kharistemple.com"
                    className="text-sm text-neutral-300 hover:text-primary"
                  >
                    info@kharistemple.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Schedule */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <h5 className="text-sm font-semibold text-white">
                  Service Times
                </h5>
              </div>
              <ul className="space-y-2">
                {serviceSchedule.map((service, index) => (
                  <li key={index} className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-300">{service.name}</span>
                      <span className="text-white font-medium">
                        {service.time}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-400">
                      {service.day}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-neutral-800 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Stay Connected with Our Family
            </h4>
            <p className="text-neutral-300 mb-4">
              Subscribe to receive updates about our services, events, and
              community outreach programs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Join Our Community
              <Heart className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {currentYear} CEM-Kharis Temple. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>by MultiMediaCabin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
