import React from "react";
import "@/styles/main.scss";

export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
