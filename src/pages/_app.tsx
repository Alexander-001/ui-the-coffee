import "@/styles/globals.css";
import AppContext from "@/utils/AppContext";
import { useInitialStateAppContext } from "@/utils/AppContext/useInitialStateAppContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialStateAppContext();

  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
