import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niger State Head of Service",
  description: "Created by Lawal Adamu & Hassan Yakubu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />

        <div className=''>{children}</div>
      </body>
    </html>
  );
}
