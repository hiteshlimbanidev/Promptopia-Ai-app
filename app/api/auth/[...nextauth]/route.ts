import NextAuth from "next-auth";
import { OAuthConfig } from "next-auth/providers";
import Google, { GoogleProfile } from "next-auth/providers/google";

import { NextApiRequest, NextApiResponse } from "next";

console.log(process.env.GOOGLE_ID, process.env.GOOGLE_CLIENT_SECRET);

const handler = NextAuth({
  providers: [
    {
      provider: Google,
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as unknown as OAuthConfig<GoogleProfile>,
  ],
  // async session({ session }: { session: any }) {},
  // async signIn({ profile }: { profile: any }) {},
});
