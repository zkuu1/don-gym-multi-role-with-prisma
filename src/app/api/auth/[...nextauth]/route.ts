import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; 

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password wajib diisi");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("User tidak ditemukan atau belum set password");
        }

        // Sekarang aman, karena user.password pasti string
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Password salah");
        }

        return {
          id: user.id,
          name: user.name ?? "", // fallback kalau null
          email: user.email ?? "",
          role: user.role,
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
      if (user) {
        token.role = (user as any).role;  // ✅ simpan role di JWT, type assertion to bypass TS error
        token.name = user.name ?? null;
        token.image = user.image ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string;   // ✅ lempar role ke session
        session.user.name = token.name as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },

  events: {
    async createUser(message) {

      // Optionally, you can remove this call if not needed, or provide valid 'data' if you intend to create a user here.
      await prisma.user.create({
        data: {
          createdAt: new Date
        }
      }),
      // message.user = user baru yang dibuat
      await prisma.membership.create({
        data: {
          userId: message.user.id, // relasi ke User
          id: message.user.id, // ID yang sama dengan User
          startDate: "-",
          endDate: "-",
          status: "nonactive",
          type: "non membership",
        },
      });
    },
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
