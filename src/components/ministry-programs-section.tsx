"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Music, Baby } from "lucide-react";
import Link from "next/link";

export function MinistryProgramsSection() {
  // Only include programs that exist on the services page
  const programs = [
    {
      id: "youth-ministry",
      title: "Youth Ministry",
      description:
        "Empowering the next generation with biblical values and practical life skills through faith-based activities and mentorship.",
      icon: <Baby className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      badge: "Age 13-25",
      activities: [
        "Youth Service",
        "Discipleship Training",
        "Community Outreach",
        "Leadership Development",
      ],
    },
    {
      id: "kharis-praise-team",
      title: "Kharis Praise Team",
      description:
        "Join our worship team and use your musical gifts to glorify God through spirit-filled worship and praise.",
      icon: <Music className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      badge: "All Ages",
      activities: [
        "Bi-weekly Practice",
        "Sunday Worship",
        "Special Events",
        "Musical Training",
      ],
    },
    {
      id: "rural-world-ministry",
      title: "Christ to the Rural World Ministry",
      description:
        "Bringing Jesus to rural communities with medical help, food, clothing, and Bibles through our annual outreach programs.",
      icon: <Heart className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      badge: "Annual Outreach",
      activities: [
        "Medical Assistance",
        "Food Distribution",
        "Clothing Donations",
        "Bible Distribution",
      ],
    },
    {
      id: "community-impact",
      title: "Community Impact",
      description:
        "Supporting the poor and needy in our community with practical help and showing God's love through action.",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-500 to-red-600",
      badge: "Ongoing",
      activities: [
        "Community Service",
        "Charity Work",
        "Support Programs",
        "Local Outreach",
      ],
    },
  ];

  return (
    <section id="ministries" className="py-24 lg:py-32 bg-white">
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
              Ministry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your place in God&apos;s kingdom through our diverse
              ministry programs. Every member has a role to play in building His
              church.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {program.icon}
                      </motion.div>
                      <Badge variant="secondary" className="font-semibold">
                        {program.badge}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {program.description}
                      </p>
                    </div>

                    {/* Activities List */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                        What We Do:
                      </h4>
                      <div className="space-y-2">
                        {program.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-xs text-gray-600">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - Links to services page with hash */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Link href={`/services#${program.id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join one of our ministry programs and discover how God can use
                your unique gifts and talents to serve others and build His
                kingdom.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="church-button-primary text-lg px-8 py-4"
                asChild
              >
                <Link href="/services#ministry-programs">
                  <Users className="mr-2 h-5 w-5" />
                  View All Programs
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Involved
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Questions about our ministries? Call us at{" "}
                <Link
                  href="tel:+233543150780"
                  className="text-primary font-semibold hover:underline"
                >
                  +233 543 150 780
                </Link>{" "}
                or email{" "}
                <Link
                  href="mailto:info@kharistemple.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@kharistemple.com
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
