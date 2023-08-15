import "./globals.css";
import { Montserrat, Vazirmatn } from "next/font/google";
import Provider from "@/comps/provider";
import Header from "@/app/header";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import { Session } from "next-auth";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });
const vazir = Vazirmatn({ subsets: ["arabic"], weight: ["400"] });
export const metadata = {
  title: "کجا قسط",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  testy: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazir.className} overflow-x-hidden`}>
          <Provider>
            <Header />
            <main className="container mx-auto">{children}</main>
          </Provider>
      </body>
    </html>
  );
}