import { FloatingButton } from "@/components/ui/FloatingButton";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Theme } from "../../themes";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={Theme}>
      <Component {...pageProps} />
      <FloatingButton/>
    </ConfigProvider>
  );
}
