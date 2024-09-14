import axios from "axios";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const res = await axios.post("http://localhost:5000/user", {
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
        });
        if (res.status === 201) {
          console.log("New user added to the database");
        } else if (res.status === 200) {
          console.log("User already exists in the database");
        }
        return true;
        
      } catch (error) {
        console.error("Error in user sign-in:", error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

