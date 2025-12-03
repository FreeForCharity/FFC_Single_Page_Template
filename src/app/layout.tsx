import type { Metadata } from "next";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CookieConsent from "./../components/CookieConsent";

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.freeforcharity.org"),
  title: {
    default: "Free For Charity | Reduce Costs, Increase Impact",
    template: "%s | Free For Charity",
  },
  description:
    "Free For Charity connects students, professionals, and businesses with nonprofits to reduce costs and increase revenues—putting more resources back into their missions.",
  keywords: [
    "nonprofit",
    "charity",
    "volunteer",
    "donate",
    "free hosting",
    "domains",
    "Microsoft 365",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.freeforcharity.org/",
    siteName: "Free For Charity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Free For Charity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freeforcharity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: ["/web-app-manifest-512x512.png"],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "32x32" },
      { url: `${basePath}/icon.png`, type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" }],
  },
  manifest: `${basePath}/site.webmanifest`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  );
}
