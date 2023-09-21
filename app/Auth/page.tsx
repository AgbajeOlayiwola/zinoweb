"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Movingh1 from "../Component/SmallComponents/Movingh1";
import SlideIndicatoe from "../Component/SmallComponents/SlideIndicator";
import SmallBoxes from "../Component/SmallComponents/SelectionBoxes";
import LogoSvg from "../Component/SVGS/LogoSvg";
import Inputs from "../Component/Input";
import Farmers from "../Component/SignupModules/Farmers";
import ImageSlider from "../Component/imageSlider";
import Agents from "../Component/SignupModules/Agent";
import Merchant from "../Component/SignupModules/Merchant";

const Auth = () => {
  const [page, setPage] = useState("");
  const [switchComps, setSwitchComps] = useState(true);
  const updatePage = () => {
    setSwitchComps(false), setPage("Farmers");
  };
  const memberData = [
    {
      title: "Farmers",
      description:
        "A person or entity engaged in crop production, livestock farming, aquaculture or forestry.",
      image: "/images/farmer.png",
      click: "farmer",
    },
    {
      title: "Agent",
      description:
        "A technical agricultural expert working at Zino Experience Center and supporting field operations",
      image: "/images/agent.png",
      click: "agent",
    },
    {
      title: "Merchant",
      description:
        "A person or entity that sells agricultural products and/or provides services located within a Zino Experience Center and supporting field operations.",
      image: "/images/merchant.png",
      click: "merchant",
    },
  ];
  const conditionalComponent = () => {
    switch (page) {
      case "Farmers":
        return (
          <>
            <Farmers />
          </>
        );
      case "Merchant":
        return (
          <>
            <Merchant />
          </>
        );
      case "Agent":
        return (
          <>
            <Agents />
          </>
        );
    }
  };
  return (
    <div className={styles.authSidei}>
      <ImageSlider />
      <div className={styles.generalCover}>
        <div>
          <LogoSvg />
          <div className={styles.createAccount}>
            {switchComps ? (
              <div className={styles.create}>
                <h2>Create Account</h2>
                <p>Choose a profile to continue.</p>
              </div>
            ) : null}
          </div>
          <div className={styles.switch}>
            {switchComps
              ? memberData?.map((item: any, index: any) => {
                  return (
                    <SmallBoxes
                      key={index}
                      text={item?.description}
                      title={item?.title}
                      image={item?.image}
                      action={() => {
                        setPage(item?.title);
                        setSwitchComps(false);
                      }}
                    />
                  );
                })
              : conditionalComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
