import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
