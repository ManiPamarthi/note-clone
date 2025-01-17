import { Toaster } from "sonner"
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { ConvexClientProvider } from "@/components/providers/convex-providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jotain",
  description: "The connected workspace where batter, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefer-color-schema: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefer-color-schema: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme-2"
        >
          <Toaster position="bottom-center" />
          {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
