import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CartProvider from '@/components/Providers';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'homeRlax',
    template: 'homeRlax | %s',
  },
  description: 'Your cozy furniture online shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={poppins.className}>
        <body
          className={`${poppins.className}flex min-h-screen max-w-2xl flex-col  bg-background text-foreground md:max-w-full`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CartProvider>
              <Header />
              <main className="mx-auto max-w-2xl flex-1 border-b px-4 sm:px-6 md:max-w-7xl">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
