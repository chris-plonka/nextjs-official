import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
});
