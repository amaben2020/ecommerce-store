import React, { ReactNode } from "react";
import * as styles from "./layout.module.scss";
import Head from "next/head";
import Sidebar from "../sections/sidebar/sidebar";
import Footer from "../sections/footer/footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Welcome " }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.wrapper}>
      <header>
        <Sidebar />
      </header>
      {children}
    </div>

    <Footer />
  </div>
);

export default Layout;
