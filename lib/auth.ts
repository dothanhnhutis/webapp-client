import CredentialsProvider from "next-auth/providers/credentials";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions, Session, User, getServerSession } from "next-auth";
import { http, httpExternal } from "./http";
import { cookies } from "next/headers";

// credentials
// signIn
// jwt
// encode

// decode
// jwt
// session
// encode

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log("credentials");
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
          const { data, headers } = await http.post<AuthRes>(
            "test",
            {
              email,
              password,
            },
            {
              withCredentials: true,
            }
          );
          const cookieStore = cookies();

          cookieStore.set("test-cookie", "123");
          // console.log(headers["set-cookie"]);
          // const { data: data1, headers: headers1 } = await httpExternal.get<{
          //   message: string;
          // }>("/auth/getcookie", {
          //   withCredentials: true,
          // });
          // console.log(data1);
          // console.log(headers1["set-cookie"]);
          return {
            ...data,
          };
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      console.log("encode");
      console.log(token);
      const encodedToken = jsonwebtoken.sign(
        {
          ...token,
          exp: Math.floor(Date.now() / 1000) + 15 * 24 * 60 * 60,
        },
        secret
      );
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      console.log("decode");
      const decodedToken = jsonwebtoken.verify(token!, secret);
      return decodedToken as JWT;
    },
  },
  callbacks: {
    async signIn({ user }) {
      console.log("signIn");
      console.log(user);
      return true;
    },
    async jwt({ token, user }) {
      console.log("jwt");
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      console.log("session");
      return {
        ...session,
        ...token,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

import { z } from "zod";

export const roles = [
  "Admin",
  "Manager",
  "Accountance",
  "Researcher",
  "Paperworker",
  "Writer",
] as const;
const roleZod = z.enum(roles);
export type Role = z.infer<typeof roleZod>;
export interface SessionInterface extends Session {
  user: User & {
    id: string;
    email: string;
    role: Role;
    name: string;
    avatarUrl: string;
    token: string;
    expires: string;
  };
}

export type AuthRes = {
  id: string;
  email: string;
  username: string;
  avatarUrl: null | string;
  role: Role;
  isActive: boolean;
  token: string;
};

export type CurrentUser = {
  id: string;
  email: string;
  role: Role;
  name: string;
  username: string;
  avatarUrl: string;
};

export async function getServerAuthSession() {
  const headers: { [index: string]: any } = {};
  const session = (await getServerSession(authOptions)) as SessionInterface;
  if (session) {
    headers["x-token"] = session.user.token;
  }
  const { data } = await httpExternal.get<CurrentUser>("/users/me", {
    headers,
  });
  return data;
}
