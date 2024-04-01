import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className="mx-auto flex min-h-screen max-w-2xl items-center justify-center md:max-w-7xl">
      <SignUp />
    </section>
  );
}
