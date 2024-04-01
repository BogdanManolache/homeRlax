'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';
import { Button } from './ui/button';
import { User } from 'lucide-react';

export default function UserInfo() {
  const { theme } = useTheme();

  return (
    <>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/products"
          appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
          }}
          userProfileProps={{
            appearance: {
              baseTheme: theme === 'dark' ? dark : undefined,
              elements: {
                badge: 'text-primary bg-primary/20',
                profileSectionPrimaryButton: 'text-primary',
                formButtonPrimary:
                  'bg-primary hover:bg-primary/80 duration-300',
                formButtonReset:
                  'text-primary hover:bg-primary/20 duration-300',
                formFieldInput: 'accent-primary',
              },
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button
            variant={'ghost'}
            className="flex flex-col gap-1 sm:h-20 sm:w-20"
          >
            <User />
            <span className="hidden text-xs sm:block">Sign In</span>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
