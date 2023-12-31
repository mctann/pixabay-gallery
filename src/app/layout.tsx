import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pixabye",
  description: "Search images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 container my-16">
          {/* <Sidebar /> */}
          <div className="md:col-span-3">
            {children}
          </div>
           
        </div>
       
      </body>
    </html>
  );
}
