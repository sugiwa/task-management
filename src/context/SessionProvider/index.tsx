"use client";
import type { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import type { ReactNode } from "react";

const SessionProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
