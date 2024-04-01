'use client';

import { SignUp } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

export default function SignUpPage() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="mx-auto flex min-h-screen max-w-2xl items-center justify-center md:max-w-7xl">
      <SignUp
        appearance={{
          baseTheme: theme === 'dark' ? dark : undefined,
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/80 duration-300',
            footerActionLink: 'text-primary/80 hover:text-primary',
          },
        }}
      />
    </section>
  );
}
