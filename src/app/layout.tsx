import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /* Put your mantine theme override here */
});

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
        <MantineProvider theme={theme}>
        <div className="wrapper">
          <header>
            <NavBar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        </MantineProvider>
      </body>
    </html>
  );
}
