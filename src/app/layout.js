import yekanBakh from "@/utils/fonts";

import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";



export const metadata = {
  title: "املاک | پروژه آزمایشی",
  description: "سایت خرید و فروش املاک",
  // icons: {icon: "./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanBakh.className}>
       <NextAuthProvider>
      <Layout>
      {children}
      </Layout>
       </NextAuthProvider> 
      </body>
    </html>
  );
}
