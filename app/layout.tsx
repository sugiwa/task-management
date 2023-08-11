"use client";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import AuthProvider from "~/providers/AuthProvider";
import { type ReactNode } from "react";

const MyApp = function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default api.withTRPC(MyApp);
