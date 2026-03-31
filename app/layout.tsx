import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Influencer Lab", 
  description: "Crie sua influencer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}