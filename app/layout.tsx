import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfig from "@/data/siteConfig.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cigar and Smoke Shop | Best Smoke Shop & Vape Shop in Maryland",
    template: "%s | Cigar and Smoke Shop"
  },
  description: "The best smoke shop and vape shop in Maryland. Premium cigars, vaporizers, e-juice, hookah, and more. Located at Arundel Mills Mall, Hanover, MD.",
  keywords: ["cigar shop", "smoke shop", "vape shop", "hookah", "Maryland", "Hanover", "Arundel Mills"],
  authors: [{ name: "Cigar and Smoke Shop" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cigarandsmokeshop.com",
    siteName: "Cigar and Smoke Shop",
    title: "Cigar and Smoke Shop | Best Smoke Shop & Vape Shop in Maryland",
    description: "The best smoke shop and vape shop in Maryland. Premium cigars, vaporizers, e-juice, hookah, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": siteConfig.businessInfo.name,
              "image": "https://cigarandsmokeshop.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.businessInfo.address.street,
                "addressLocality": siteConfig.businessInfo.address.city,
                "addressRegion": siteConfig.businessInfo.address.state,
                "postalCode": siteConfig.businessInfo.address.zip,
                "addressCountry": "US"
              },
              "telephone": siteConfig.businessInfo.contact.phone,
              "email": siteConfig.businessInfo.contact.email,
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "11:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "21:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "11:00",
                  "closes": "19:00"
                }
              ],
              "priceRange": "$$",
              "url": "https://cigarandsmokeshop.com"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

