import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { name, password } = credentials;
        const res = await fetch("http://localhost:90/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
          }),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },
};

export default NextAuth(authOptions);
