import LogoSvg from "@/Component/SVGS/LogoSvg";
import ComingsoonSvg from "@/Component/SVGS/comingsoon";
import Image from "next/image";
import React from "react";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.rearange}>
      <div className={styles.flexPad}>
        <LogoSvg />
        <ComingsoonSvg />
        <h1 className={styles.htSpan}>
          Connecting <span>farmers</span>, <span>merchants</span> and{" "}
          <span>agents</span> all under one platform
        </h1>
        <p className={styles.mainParagraph}>
          We&apos;re putting the finishing touches on our platform and getting
          ready to launch. Sign up for updates and be the first to know when we
          go live.
        </p>
        <form className={styles.formFlex}>
          <input
            type="text"
            className={styles.emailInput}
            placeholder="Email Address"
          />
          <button className={styles.btn}>Invite me</button>
        </form>
        <p className={styles.signUp}>
          Sign up for updates to be the first to know when we launch. No spam,
          just important information and exclusive offers.
        </p>
      </div>
      <div className={styles.imgControl}>
        <Image src="/Rectangle2.png" width={100} height={100} alt="image" />
      </div>
    </div>
  );
};

export default HomePage;
