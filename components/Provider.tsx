"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/core/types";

interface ProviderProps {
  session: Session | null;
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
