import Cover from "@/app/Component/Cover";
import LogoSvg from "@/app/Component/SVGS/LogoSvg";
import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <Cover>
      <div className={styles.nav}>
        <LogoSvg />
      </div>
    </Cover>
  );
};

export default Navbar;
