import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vitoo",
  description: "Hello World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="fixed flex justify-center items-center top-3 left-0 right-0">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
