"use client";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import SessionProviderWrapper from "~/context/SessionProvider";
import { type ReactNode } from "react";

const MyApp = function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
};

export default api.withTRPC(MyApp);
