import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} mx-auto flex min-h-screen max-w-2xl flex-col bg-background text-foreground md:max-w-7xl`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-1 border-b px-4 sm:px-6">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
