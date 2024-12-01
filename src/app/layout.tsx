import type { Metadata } from "next";
import "../styles/globals.css";
import vazirFont from "@/constants/localFont";
import DarkModeProvider from "@/context/changeThem/DarkModeContext";
import HomeHeader from "@/components/header/HomeHeader";
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
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} font-sans min-h-screen flex flex-col items-center`}
      >
        <DarkModeProvider>
          <HomeHeader />
        </DarkModeProvider>
        <main className="h-screen w-full flex-1">{children}</main>
        <footer>فوتر سایت</footer>
      </body>
    </html>
  );
}
