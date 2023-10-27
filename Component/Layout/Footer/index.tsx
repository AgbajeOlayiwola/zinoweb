"use client";
import React from "react";
import styles from "./styles.module.css";
import Cover from "../../Cover";
import LogoSvg from "../../SVGS/LogoSvg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const date: any = new Date();
  const pathname = usePathname();
  return (
    <Cover>
      <div className={styles.footerContainer}>
        {pathname === "/demo" ? null : (
          <div className={styles.footerWrapper}>
            <LogoSvg />
            <div className={styles.footerBody}>
              <div className={styles.footerLinks}>
                <h2>Company</h2>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
              <div className={styles.footerLinks}>
                <h2>Help</h2>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <div className={styles.footerLinks}>
                <h2>Resources</h2>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
              <div className={styles.footerContact}>
                <h2>Contact </h2>
                <div>
                  <p>Abuja - Boya Place, Plot 1004, Ameh Ebute Street, Wuye, FCT </p>
                  <p>Lagos – Spacepad, Km 18, Lekki-Epe Expressway, Lagos </p>
                  <p>+234 703 417 0285 or +234 802 711 8404 </p>
                  <a href="mailto:adewale@myzino.co">adewale@myzino.co</a>
                  <a href="mailto:ayodeji@myzino.co">ayodeji@myzino.co</a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.footerCopyright}>
          <p>© Copyright {date.getFullYear()}, All Rights Reserved by Zino</p>
        </div>
      </div>
    </Cover>
  );
};

export default Footer;
