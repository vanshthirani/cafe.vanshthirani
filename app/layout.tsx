import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cafe.vanshthirani | Coffee, Quiet, Culture",
  description:
    "An animated student café concept by Vansh Thirani — thoughtful coffee, fresh bakes and space to stay awhile.",
  keywords: ["cafe", "coffee", "Vansh Thirani", "college project", "New Delhi cafe"],
  authors: [{ name: "Vansh Thirani" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
