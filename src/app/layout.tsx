import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "./_components/Navbar";
import Search from "./_components/Search";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export const metadata: Metadata = {
  title: "DompixelBlog",
  description: "O seu site de blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <MantineProvider>
        <Notifications />
        <body className={`bg-gray-900 text-white min-h-screen`}>
          <div className="flex flex-col min-h-screen md:flex-row h-full">
            <Navbar />

            <main className="flex-1 bg-gray-900 px-6 overflow-y-scroll h-screen">
              {children}
            </main>

            <div className="hidden lg:block">
              <Search />
            </div>
          </div>
        </body>
      </MantineProvider>
    </html>
  );
}
