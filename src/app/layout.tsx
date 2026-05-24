import "./globals.css";
import type { Metadata } from "next";
import { BIO } from "./data";

const title = "Marlon Merjos — Data Scientist";
const description = BIO;

export const metadata: Metadata = {
  metadataBase: new URL("https://marlonm.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://marlonm.dev",
    siteName: "marlonm.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
