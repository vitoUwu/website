import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from "@/lib/languages";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const generateStaticParams = async () => {
  return SUPPORTED_LANGUAGES.filter((language) => language.enabled).map(
    (language) => ({
      locale: language.inPath,
    })
  );
};

export const metadata: Metadata = {
  title: "vitoo",
  description: "My coolest website ever",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale = DEFAULT_LOCALE.value } = await params;
  return (
    <html lang={locale}>
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
