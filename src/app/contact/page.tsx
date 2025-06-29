"use client";

import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaChurch,
  FaBook,
  FaBolt,
  FaDirections,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    details: "Adenta Housing Down Near Aviation Roundabout",
    subtitle: "Adenta-Accra, Ghana",
    color: "text-primary",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: "+233543150780",
    subtitle: "Available for pastoral care",
    color: "text-secondary",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: "info@kharistemple.com",
    subtitle: "We&apos;ll respond within 24 hours",
    color: "text-primary",
  },
];

const serviceTimes = [
  {
    day: "Sunday",
    service: "Victory Service",
    time: "7:30 AM",
    description: "Join us for worship, teaching, and fellowship",
    icon: FaChurch,
  },
  {
    day: "Tuesday",
    service: "Teaching Service",
    time: "6:30 PM",
    description: "Deep Bible study and spiritual growth",
    icon: FaBook,
  },
  {
    day: "Friday",
    service: "Breakthrough Service",
    time: "6:30 PM",
    description: "Prayer, healing, and miraculous testimonies",
    icon: FaBolt,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              We&apos;d Love to
              <span className="text-primary block">Connect With You</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re looking for a church home, need prayer, or
              have questions about our services, we&apos;re here to help you
              reconnect with God as family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={index} variants={staggerChild}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-gray-50 rounded-full">
                          <Icon className={`h-8 w-8 ${info.color}`} />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-serif">
                        {info.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-gray-900">
                        {info.details}
                      </div>
                      <CardDescription className="text-base">
                        {info.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form and Service Times */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we&apos;ll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-gray-900 font-medium"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-gray-900 font-medium"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-900 font-medium"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-900 font-medium"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+233 XXX XXX XXX"
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-gray-900 font-medium"
                    >
                      How can we help?
                    </Label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-primary">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visit">Planning a visit</SelectItem>
                        <SelectItem value="prayer">Prayer request</SelectItem>
                        <SelectItem value="ministry">
                          Join a ministry
                        </SelectItem>
                        <SelectItem value="questions">
                          General questions
                        </SelectItem>
                        <SelectItem value="pastoral">Pastoral care</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-900 font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="border-gray-300 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                    type="submit"
                  >
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Times */}
            <motion.div {...fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Service Times
                  </CardTitle>
                  <CardDescription className="text-base">
                    Join us for worship and fellowship throughout the week.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {serviceTimes.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900">
                              {service.service}
                            </h3>
                            <Badge variant="outline">{service.day}</Badge>
                          </div>
                          <div className="text-lg font-bold text-primary mb-1">
                            {service.time}
                          </div>
                          <p className="text-sm text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re conveniently located in Adenta-Accra, with easy access
              from the Aviation Roundabout area.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Map Placeholder */}
            <motion.div variants={staggerChild}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17865.43483372001!2d-0.16245137162955783!3d5.699177676685926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf833411ac79ff%3A0xaafa66c074c631d6!2sCharismatic%20Evangelistic%20Ministry%2C%20Kharis%20Temple!5e1!3m2!1sen!2sgh!4v1751194290096!5m2!1sen!2sgh"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kharis Temple Location Map"
                  className="w-full"
                />
              </Card>
            </motion.div>

            {/* Directions */}
            <motion.div variants={staggerChild}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <FaDirections className="mr-3 h-6 w-6 text-primary" />
                    Directions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Adenta Housing Down Near Aviation Roundabout
                      <br />
                      Adenta-Accra, Ghana
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Transportation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Easily accessible by trotro and taxi</li>
                      <li>• Near Aviation Roundabout</li>
                      <li>• Parking available on-site</li>
                      <li>• Walking distance from Adenta Market</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Need Help Finding Us?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Call us at +233543150780 and we&apos;ll help guide you to
                      our location.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href="tel:+233543150780">
                        <FaPhone className="mr-2 h-4 w-4" />
                        Call for Directions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
