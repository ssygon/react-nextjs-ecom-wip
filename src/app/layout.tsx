import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "React NextJS E-Commerce",
  description: "NextJS E-Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <header className="h-20 flex items-center justify-between">
            <NavBar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
