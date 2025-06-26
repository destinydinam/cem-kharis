"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";

export function ServiceTimesSection() {
  const services = [
    {
      title: "Sunday Victory Service",
      time: "7:30 AM",
      day: "Every Sunday",
      description:
        "Join us for powerful worship, inspiring messages, and community fellowship as we celebrate God's goodness together.",
      icon: <Users className="h-8 w-8 text-primary" />,
      highlight: true,
    },
    {
      title: "Teaching Service",
      time: "6:30 PM",
      day: "Every Tuesday",
      description:
        "Dive deeper into God's Word with comprehensive Bible studies designed to strengthen your faith and understanding.",
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      highlight: false,
    },
    {
      title: "Breakthrough Service",
      time: "6:30 PM",
      day: "Every Friday",
      description:
        "Experience the transforming power of prayer and worship as we seek God's breakthrough in our lives and communities.",
      icon: <Clock className="h-8 w-8 text-primary" />,
      highlight: false,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Service{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                Times
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for worship, teaching, and fellowship. All services are
              held at our beautiful location in Adenta-Accra.
            </p>

            {/* Location Info */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-6 text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-lg">
                Adenta Housing Down Near Aviation Roundabout, Adenta-Accra
              </span>
            </motion.div>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative overflow-hidden h-full group hover:shadow-xl transition-all duration-300 ${
                    service.highlight ? "ring-2 ring-primary/20 shadow-lg" : ""
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 rounded-bl-lg font-semibold">
                      Main Service
                    </div>
                  )}

                  <CardContent className="p-8 text-center space-y-6">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-primary">
                          {service.time}
                        </p>
                        <p className="text-lg text-gray-600 font-medium">
                          {service.day}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Join Button */}
                    <Button
                      asChild
                      variant={service.highlight ? "default" : "outline"}
                      className={`w-full transition-all duration-300 ${
                        service.highlight
                          ? "church-button-primary"
                          : "border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      <Link href="/contact">Join This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ready to Join Our Church Family?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;d love to meet you! Come as you are and experience the
                love and warmth of our community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="church-button-primary text-lg px-8 py-4"
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
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link
                  href="https://youtu.be/2BU9oZ0VZ6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Watch Online
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
