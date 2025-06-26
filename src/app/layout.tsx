import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Welcoming fonts for the church website
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CEM-Kharis Temple | Charismatic Evangelistic Ministry",
    template: "%s | CEM-Kharis Temple",
  },
  description:
    "We're helping people reconnect with God as a Family! Join CEM-Kharis Temple for worship, fellowship, and spiritual growth in Adenta-Accra, Ghana.",
  keywords: [
    "church",
    "ministry",
    "worship",
    "prayer",
    "Ghana",
    "Accra",
    "Adenta",
    "Rev. Dr. Steve Mensah",
    "Christian",
    "evangelism",
    "spiritual growth",
    "community",
    "family",
  ],
  authors: [{ name: "CEM-Kharis Temple" }],
  creator: "CEM-Kharis Temple",
  publisher: "CEM-Kharis Temple",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cemkharistemple.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CEM-Kharis Temple | Charismatic Evangelistic Ministry",
    description:
      "We're helping people reconnect with God as a Family! Join us for worship, fellowship, and spiritual growth.",
    url: "https://cemkharistemple.com",
    siteName: "CEM-Kharis Temple",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "CEM-Kharis Temple - Charismatic Evangelistic Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEM-Kharis Temple | Charismatic Evangelistic Ministry",
    description:
      "We're helping people reconnect with God as a Family! Join us for worship, fellowship, and spiritual growth.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Structured Data for Church Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "CEM-Kharis Temple",
              alternateName:
                "Charismatic Evangelistic Ministry - Kharis Temple",
              description:
                "We're helping people reconnect with God as a Family!",
              url: "https://cemkharistemple.com",
              logo: "https://cemkharistemple.com/images/logo.png",
              image: "https://cemkharistemple.com/images/hero-bg.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adenta Housing Down Near Aviation Roundabout",
                addressLocality: "Adenta-Accra",
                addressCountry: "Ghana",
              },
              telephone: "+233543150780",
              email: "info@kharistemple.com",
              founder: {
                "@type": "Person",
                name: "Rev. Dr. Steve Mensah",
                jobTitle: "General Overseer & Founder",
              },
              sameAs: [
                "https://www.facebook.com/cemkharistemple/",
                "https://www.instagram.com/cemkharistemple/",
                "https://www.youtube.com/@cemkharistemple7638",
              ],
              event: [
                {
                  "@type": "Event",
                  name: "Sunday Victory Service",
                  startTime: "07:30",
                  dayOfWeek: "Sunday",
                  eventAttendanceMode: "OfflineEventAttendanceMode",
                  eventStatus: "EventScheduled",
                },
                {
                  "@type": "Event",
                  name: "Teaching Service",
                  startTime: "18:30",
                  dayOfWeek: "Tuesday",
                  eventAttendanceMode: "OfflineEventAttendanceMode",
                  eventStatus: "EventScheduled",
                },
                {
                  "@type": "Event",
                  name: "Breakthrough Service",
                  startTime: "18:30",
                  dayOfWeek: "Friday",
                  eventAttendanceMode: "OfflineEventAttendanceMode",
                  eventStatus: "EventScheduled",
                },
              ],
            }),
          }}
        />
        {/* Preload critical images */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="/images/logo.png" as="image" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
