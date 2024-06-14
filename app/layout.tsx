import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers/providers";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Motifit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <Providers>
        <main className="min-h-screen flex ">
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
