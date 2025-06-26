"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function ContactInfoSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      value: "+233 543 150 780",
      description: "Call us anytime for prayer or questions",
      href: "tel:+233543150780",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      value: "info@kharistemple.com",
      description: "Send us your prayer requests and inquiries",
      href: "mailto:info@kharistemple.com",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      value: "Adenta Housing Down",
      description: "Near Aviation Roundabout, Adenta-Accra",
      href: "https://maps.google.com/?q=Adenta+Housing+Down+Aviation+Roundabout+Accra",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Office Hours",
      value: "Mon - Fri: 9AM - 5PM",
      description: "Visit us during office hours",
      href: "/contact",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      href: "https://www.facebook.com/cemkharistemple",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/cemkharistemple",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      href: "https://www.youtube.com/@cemkharistemple",
      color: "hover:text-red-600",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;d love to hear from you! Whether you have questions, need
              prayer, or want to visit our church, we&apos;re here to help.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {contact.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {contact.title}
                      </h3>

                      <p className="text-lg font-semibold text-primary">
                        {contact.value}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {contact.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Link
                          href={contact.href}
                          target={
                            contact.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            contact.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Section */}
          <motion.div
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">
                Ready to Visit CEM-Kharis Temple?
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Come as you are and experience the love of God in our welcoming
                church family. We can&apos;t wait to meet you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link href="/contact">
                  <MapPin className="mr-2 h-5 w-5" />
                  Plan Your Visit
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
                asChild
              >
                <Link
                  href="https://youtu.be/2BU9oZ0VZ6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Join Online
                </Link>
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-lg mb-4 opacity-90">
                Follow us on social media for updates and inspiration
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm opacity-75">
                For pastoral care or emergencies, call us at{" "}
                <Link
                  href="tel:+233543150780"
                  className="font-semibold hover:underline"
                >
                  +233 543 150 780
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
