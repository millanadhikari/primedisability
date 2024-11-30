import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Fira_Sans } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const Fira_Sans = localFont({
//   src: "./fonts/FiraSans-Regular.ttf",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const inter = Inter({ subsets: ["latin"] });

const roboto = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "PrimeChoice Care",
  description: "NDIS & Disability Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}

        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
