'use client';

import { SignIn } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

export default function SignInPage() {
  const { theme } = useTheme();

  return (
    <section
      className="mx-auto flex min-h-screen max-w-2xl items-center justify-center md:max-w-7xl"
      id="signIn"
    >
      <SignIn
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
