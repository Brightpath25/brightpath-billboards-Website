import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightPath Billboards | Mobile LED Advertising in Coachella Valley",
  description: "High-impact mobile LED billboard advertising for events, casinos, festivals, small businesses, and brands across Palm Springs, Indio, Coachella, Palm Desert, Cathedral City, and the entire Coachella Valley.",
  openGraph: {
    title: "BrightPath Billboards | Mobile LED Advertising",
    description:
      "Mobile LED billboard advertising across Palm Springs, Indio, Coachella, Palm Desert and the Coachella Valley.",
    url: "https://bpmobilebillboards.com",
    siteName: "BrightPath Billboards",
    images: [
      {
        url: "https://bpmobilebillboards.com/uploads/LED_Truck_Mobile_Billboad-cutout.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightPath Billboards | Mobile LED Advertising",
    description:
      "Mobile LED billboard trucks serving Palm Springs, Indio, Coachella, Palm Desert and surrounding areas.",
    images: [
      "https://bpmobilebillboards.com/uploads/LED_Truck_Mobile_Billboad-cutout.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://cantmiss.us/wp-content/uploads/2022/09/Miami-Digital-Mobile-Billboards-4.jpeg"
        />
        <Script
          src="//unpkg.com/same-runtime/dist/index.global.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://unpkg.com/@google/model-viewer@4.1.0/dist/model-viewer.min.js"
          type="module"
          strategy="lazyOnload"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/u5nk8thdjq";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script");
          `}
        </Script>
        {/* Organization Schema */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            name: "BrightPath Billboards",
            url: "https://bpmobilebillboards.com",
            logo:
              "https://bpmobilebillboards.com/uploads/LED_Truck_Mobile_Billboad-cutout.png",
            description:
              "Mobile LED billboard trucks serving Palm Springs, Indio, Coachella, Palm Desert, Cathedral City, and the entire Coachella Valley.",
            areaServed: [
              "Palm Springs",
              "Indio",
              "La Quinta",
              "Palm Desert",
              "Cathedral City",
              "Coachella Valley"
            ],
            sameAs: [
              "https://www.linkedin.com/company/brightpath-billboards-llc",
              "https://www.instagram.com/bpmobilemedia",
              "https://www.facebook.com/profile.php?id=61568107225408"
            ]
          })}
        </Script>
        {/* FAQ Schema */}
        <Script id="schema-faq" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where does BrightPath Billboards operate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "BrightPath Billboards operates mobile LED billboard trucks across Palm Springs, Indio, Coachella, Palm Desert, Cathedral City, and La Quinta."
                }
              },
              {
                "@type": "Question",
                name: "What can I advertise on your mobile LED trucks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "You can advertise local businesses, casinos and resorts, festivals such as Coachella and Stagecoach, dispensaries, auto dealers, product launches, and general brand promotions."
                }
              },
              {
                "@type": "Question",
                name: "How do I request a quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Click the Get a Quote button on our website and submit your campaign details. Our team will respond promptly with pricing and availability."
                }
              },
              {
                "@type": "Question",
                name: "Why use mobile LED billboards instead of static billboards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Mobile LED billboards drive through high-traffic areas such as events, casinos, resorts, and downtown districts — delivering maximum exposure where people gather."
                }
              }
            ]
          })}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
