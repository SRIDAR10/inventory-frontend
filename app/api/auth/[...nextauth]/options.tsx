import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const GITHUB_ID = "c49ded0d2601704d25c1";
const GITHUB_SECRET = "b6d44c05019a0fabe805a6aeee27efb5a879dc42";
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID as string,
      clientSecret: GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Sridar",
          email: "cssridar10@gmail.com",
          password: "nextauth",
        };

        if (
          credentials?.username === user.name &&
          credentials.password === "nextauth"
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
