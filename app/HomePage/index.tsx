"use client";
import LogoSvg from "@/app/Component/SVGS/LogoSvg";
import ComingsoonSvg from "@/app/Component/SVGS/comingsoon";
import Image from "next/image";
import React from "react";
import styles from "./home.module.css";
import Cover from "@/app/Component/Cover";
import FirstButton from "@/app/Component/Buttons/firstButton";
import Layout from "@/app/Component/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.topBg}>
        <Cover>
          <div className={styles.comingSoon}>
            <div className={styles.svg}>
              <ComingsoonSvg />
            </div>
            <div className={styles.connect}>
              <h1>
                Connecting <span>farmers, merchants</span> and{" "}
                <span>agents</span> all under one platform
              </h1>
              <div className={styles.weAreP}>
                <p>
                  We&apos;re putting the finishing touches on our platform and
                  getting ready to launch. Sign up for updates and be the first
                  to know when we go live.
                </p>
              </div>
            </div>
            <div className={styles.formCover}>
              <form className={styles.formic}>
                <input type="text" placeholder="Email Address" />
                <div className={styles.button}>
                  <FirstButton type="Submit" text="Invite Me" />
                </div>
              </form>
            </div>
          </div>
        </Cover>
      </div>
      <Cover>
        <div className={styles.abboutUs}>
          <h1>About Us</h1>
          <p>
            We are a global impact-driven agricultural technology company
            enabling access to finance, markets, agro-services and advisory for
            micro, small & medium enterprises.
          </p>
        </div>
        <div className={styles.vision}>
          <div>
            <div>
              <h1>Our Vision</h1>
              <p>To be the preferred digital enterprise for value creation.</p>
            </div>
            <div>
              <h1>Our Mission</h1>
              <p>
                To create sustainable stakeholder value by enabling access and
                promoting shared prosperity, social impact and a better
                environment.
              </p>
            </div>
          </div>
          <div>
            <Image src="/images/bulb.png" height={421} width={535} alt="bulb" />
          </div>
        </div>
      </Cover>
      <Cover>
        <div className={styles.coreValues}>
          <div>
            <h1>Core Values</h1>
            <p>What guides us as a company</p>
            <ul>
              <li>
                <p>
                  Integrity - We consistently adhere to strong moral and ethical
                  principles.
                </p>
              </li>
              <li>
                <p>
                  Respect - We treat our people and clients with courtesy,
                  politeness and kindness.
                </p>
              </li>
              <li>
                <p>
                  Inclusion - We promote diversity and inclusion in every aspect
                  of our business
                </p>
              </li>
              <li>
                <p>
                  Collaboration - We work as a team to achieve the strategic
                  goals of our business.
                </p>
              </li>
              <li>
                <p>
                  Sustainability - We are driven by economic, social and
                  environmental outcomes
                </p>
              </li>
            </ul>
          </div>
          <Image
            src="/images/ideabulb.png"
            height={421}
            width={535}
            alt="bulb"
          />
        </div>
      </Cover>
      <Cover>
        <div>
          <h1>Product & services</h1>
          <p>
            Digital B2B and B2C marketplace for finance, markets, agro-services
            and advisory for micro, small & medium enterprises; differentiated
            through Zino’s Unique Selling Points USPs
          </p>
        </div>
      </Cover>
      <Cover>
        <div>
          <h1>SDG Mapping</h1>
          <p>
            As an impact-driven and sustainability-driven organization, our
            operations are mapped to few United Nations’ sustainable development
            goals.
          </p>
        </div>
        <Image
          src="/images/livelihoods.png"
          height={78}
          width={78}
          alt="bulb"
        />
        <Image src="/images/ideabulb.png" height={78} width={78} alt="bulb" />
        <Image
          src="/images/agroIndustry.png"
          height={78}
          width={78}
          alt="bulb"
        />
        <Image src="/images/digital.png" height={78} width={78} alt="bulb" />
        <Image src="/images/climate.png" height={78} width={78} alt="bulb" />
      </Cover>
    </Layout>
  );
};
export default HomePage;
