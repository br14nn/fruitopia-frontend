import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fruitopia",
  description: "Landing page of fruitopia",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${font.className} min-h-screen w-full bg-primary-default text-secondary-default`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
