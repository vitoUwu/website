import { Metadata } from "next";
import "./globals.css";
import { Inter, Newsreader } from "next/font/google";

const TITLE = "vitoo";
const DESCRIPTION =
  "Atualmente estou tentando construir e transformar algumas ideias em peças de arte. Na Deco.cx eu desenvolvo o futuro da tecnologia no Brasil";
const ROOT_URL = "https://vitoo.dev";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: ROOT_URL,
  },
  twitter: {
    card: "summary",
    creator: "@vitoodev",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: ROOT_URL,
    languages: {
      "pt-BR": ROOT_URL,
      "en-US": `${ROOT_URL}/en`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-neutral-900 text-neutral-200 font-inter antialiased ${inter.variable} ${newsreader.variable}`}
      >
        <div className="m-3 flex flex-col py-10 px-3 text-sm lowercase">
          {children}
        </div>
      </body>
    </html>
  );
}
