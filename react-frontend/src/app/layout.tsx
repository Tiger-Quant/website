import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TigerQuant | Quantitative Finance Club",
  description: "TigerQuant - University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.",
  keywords: ["quantitative finance", "trading", "university", "missouri", "finance club"],
  authors: [{ name: "TigerQuant" }],
  openGraph: {
    title: "TigerQuant | Quantitative Finance Club",
    description: "University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TigerQuant | Quantitative Finance Club",
    description: "University of Missouri's premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-surface transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}