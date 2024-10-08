
import"@/app/globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMS App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="mt-20 ml-72">{children}</main>
      </div>
      </body>
    </html>
      
    
  );
}
