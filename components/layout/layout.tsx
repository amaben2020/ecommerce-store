import React, { ReactNode } from "react";
import * as styles from "./layout.module.scss";
import Head from "next/head";
import Sidebar from "../sidebar/sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Welcome " }: Props) => (
  <div className={styles.wrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Sidebar />
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
