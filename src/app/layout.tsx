import "./globals.css";
import Header from "@/components/Home/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="max-w-[1440px] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
