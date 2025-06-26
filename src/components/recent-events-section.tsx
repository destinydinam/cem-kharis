"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function RecentEventsSection() {
  const events = [
    {
      title: "Annual Church Conference 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Sanctuary",
      description:
        "Join us for three days of powerful worship, inspiring messages, and fellowship as we seek God's direction for the year ahead.",
      image: "/images/event1.png",
      category: "Conference",
      status: "upcoming",
    },
    {
      title: "Community Outreach Program",
      date: "February 10, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Adenta Community",
      description:
        "Serving our community with love through food distribution, medical checkup, and prayer ministry.",
      image: "/images/event2.png",
      category: "Outreach",
      status: "completed",
    },
    {
      title: "Youth Leadership Summit",
      date: "January 20, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Youth Center",
      description:
        "Empowering young leaders with skills, knowledge, and spiritual growth opportunities for effective ministry.",
      image: "/images/event3.png",
      category: "Youth",
      status: "completed",
    },
  ];

  return (
    <section
      id="events"
      className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
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
              Recent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                Events
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay connected with our church community through exciting events,
              conferences, and outreach programs that strengthen our faith and
              serve our community.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={
                          event.status === "upcoming" ? "default" : "secondary"
                        }
                        className={`font-semibold ${
                          event.status === "upcoming"
                            ? "bg-primary text-white"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {event.status === "upcoming" ? "Upcoming" : "Completed"}
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className="bg-white/90 backdrop-blur-sm border-white text-gray-900 font-semibold"
                      >
                        {event.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Event Details */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Info */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{event.date}</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Button
                          asChild
                          variant={
                            event.status === "upcoming" ? "default" : "outline"
                          }
                          className={`w-full transition-all duration-300 ${
                            event.status === "upcoming"
                              ? "church-button-primary"
                              : "border-primary text-primary hover:bg-primary hover:text-white"
                          }`}
                        >
                          <Link href="/contact">
                            {event.status === "upcoming"
                              ? "Register Now"
                              : "View Details"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
