import React from "react";

import Image from "next/image";

import Logo from "@/assets/images/Logo.svg";
import * as styles from "./footer.module.scss";

const Footer = () => {
  const time = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <Image src={Logo} width="240" height={30} />

      <span>&copy; Algomachine007 - {time}</span>
    </footer>
  );
};

export default Footer;
