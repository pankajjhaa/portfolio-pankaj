import { ThemeProvider } from "@/components/theme-provider"
import { Lato } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Toaster } from "react-hot-toast";
import {ModeToggle} from '@/components/mode-toggle';
import "./globals.css";
import {undefined} from "zod";

const inter = Lato({weight: [ "100" , "300" , "400" , "700" , "900" ], subsets: ["latin"] });

export const metadata = {
  title: "Pankaj jha | Personal Portfolio",
  description: "Pankaj jha is a full-stack developer with 3.5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 dark:text-opacity-90`}
      >

        <ThemeProvider attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
                  <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />

                    <Toaster position="top-right" />
                    <ModeToggle />
                  </ActiveSectionContextProvider>
        </ThemeProvider>
       
      </body>
    </html>
  );
}
