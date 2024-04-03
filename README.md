## About

This is an e-commerce project for a fictional furniture retailer called "homeRlax".
It is built using Next.js + TypeScript, Sanity.io as a CMS, Stripe for payments, TailwindCSS and Shadcn/ui for styling. User authentication is implemented with Clerk.

## Deployment Link

https://home-rlax.vercel.app/

## Stripe payment test data:

When testing interactively, use a card number, such as 4242 4242 4242 4242.

Use a valid future date, such as 12/28.

Use any three-digit CVC, such as 567

Use any value you like for other form fields.

## Authentication credentials:

You can sign in with your GitHub / Google account or cand create an account with your email address.
If you don't want to share your personal information, you cand use the following:

- test@test.com (user)
- homeRlax1234 (password)

### Local machine:

To run the development server:

```bash
npm install

npm run dev
```

Open http://localhost:3000 with your browser to see the result.

If you want to run this project on your local machine, and for it to work as expected, you'll need to create accounts / your own projects for Sanity, Stripe, and Clerk

- https://www.sanity.io/docs/sanity-studio
- https://docs.stripe.com/
- https://clerk.com/docs
