import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : "user",
        };
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: profile.role ? profile.role : "user",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/google-login",
    signOut: "/login/page",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role;
      return session;
    },
  },

  events: {
    async createUser(message) {
      // message.user = user baru yang dibuat
      await prisma.membership.create({
        data: {
          userId: message.user.id, // relasi ke User
          id: message.user.id, // ID yang sama dengan User
          startDate: new Date(),
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 1 tahun
          status: "nonaktif",
          type: "non membership",
        },
      });
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
