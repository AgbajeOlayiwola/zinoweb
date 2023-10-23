"use client";
import ClickButton from "@/Component/Buttons/ClickButton/clickButton";
import Cover from "@/Component/Cover";
import Mapping from "@/Component/LandingPage/Mapping";
import PopupForm from "@/Component/LandingPage/PopupForm";
import Products from "@/Component/LandingPage/Products";
import SingleCore from "@/Component/LandingPage/SingleCore";
import Subscribe from "@/Component/LandingPage/Subscribe";
import Team from "@/Component/LandingPage/Team";
import Layout from "@/Component/Layout";
import ComingsoonSvg from "@/Component/SVGS/comingsoon";
import Core from "@/Component/SVGS/core";
import Globe from "@/Component/SVGS/globe";
import Mission from "@/Component/SVGS/mission";
import { values } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import BG from "../../public/images/hero.png";
import styles from "./home.module.css";

const HomePage = () => {
  const [overlay, setOverlay] = useState(false);
  const styling = {
    background: `url('${BG.src}'), lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, #fff 0%, rgba(253, 253, 253, 0.72) 100%)`,
  };
  return (
    <div className={overlay ? styles.welcomeContainer : ""}>
      <Layout>
        <div className={styles.topBg}>
          <div className={styles.comingSoon} style={styling}>
            <Cover>
              <div className={styles.svg}>
                <ComingsoonSvg />
              </div>
              <div className={styles.welcome}>
                <div className={styles.welcomeForm}>
                  <div className={styles.connect}>
                    <h1>
                      Connecting <span>farmers, merchants</span> and{" "}
                      <span>agents</span> all under one platform
                    </h1>
                    <div className={styles.weAreP}>
                      <p>
                        We&apos;re putting the finishing touches on our platform
                        and getting ready to launch.Sign up for updates and be
                        the first to know when we go live.
                      </p>
                    </div>
                  </div>
                  <div className={styles.formCover}>
                    <form className={styles.formic}>
                      <input type="text" placeholder="Email Address" />
                      <div className={styles.button}>
                        <ClickButton
                          type="button"
                          text="Invite Me"
                          action={() => {
                            setOverlay(true);
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className={styles.welcomeImg}>
                  <Image
                    src="./images/welcome-img.png"
                    height={200}
                    width={1141}
                    alt="welcome"
                    className={styles.desktop}
                  />
                  <Image
                    src="./images/phonee.png"
                    height={573}
                    width={300}
                    alt="welcome"
                    className={styles.mobile}
                  />
                </div>
              </div>
            </Cover>
          </div>
        </div>
        <div className={styles.vid}>
        <video 
                        controls
                        width="950"
                        className="w-2/3 h-full aspect-square object-cover rounded-xl "
                    >
                          <source src={'/How_to_join_zino.mp4'} type="video/webm" />
                  </video>
                  </div>
        <div className={styles.aboutUsCont}>
          <Cover>
            <div className={styles.aboutUsWrapper}>
              <div className={styles.abboutUs}>
                <h1>About Us</h1>
                <p>
                  We are a global impact-driven agricultural technology company
                  enabling access to finance, markets, agro-services and
                  advisory for micro, small & medium enterprises.
                </p>
              </div>
              <div className={styles.vision}>
                <div className={styles.visionSingle}>
                  <div>
                    <Globe />
                    <h1>Our Vision</h1>
                  </div>
                  <p>
                    To be the preferred digital enterprise for value creation.
                  </p>
                </div>
                <div className={styles.visionSingle}>
                  <div>
                    <Mission />
                    <h1>Our Mission</h1>
                  </div>
                  <p>
                    To create sustainable stakeholder value by enabling access
                    and promoting shared prosperity, social impact and a better
                    environment.
                  </p>
                </div>
                <div className={styles.coreValues}>
                  <div className={styles.coreValuesTitle}>
                    <Core />
                    <h1>Core Values</h1>
                  </div>
                  <div className={styles.coreValuesCont}>
                    {values?.map(
                      (item: { title: string; value: string }, index) => {
                        return (
                          <SingleCore
                            title={item.title}
                            value={item.value}
                            key={index}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <Products />
        <Mapping />
        <Team />
        <Subscribe />
        {overlay ? (
          <PopupForm
            action={() => {
              setOverlay(false);
            }}
          />
        ) : null}
      </Layout>
    </div>
  );
};
export default HomePage;
