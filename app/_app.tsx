import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import SessionProviderWrapper from "~/component/SessionProviderWrapper";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProviderWrapper session={session}>
      <Component {...pageProps} />
    </SessionProviderWrapper>
  );
};

export default api.withTRPC(MyApp);
