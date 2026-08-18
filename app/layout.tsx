import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "J. Will Locksmith | Cosmo City, Randburg", description: "Key cutting, car key coding, ignition repair and general locksmith services in Cosmo City, Randburg." };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
