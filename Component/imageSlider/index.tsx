import React from "react";
import SlideIndicatoe from "../SmallComponents/SlideIndicator";
import Movingh1 from "../SmallComponents/Movingh1";
import Image from "next/image";
import styles from "./styles.module.css";
import SlideImg from "../../Component/assets/images/image1.png";

const ImageSlider = () => {
  return (
    <div>
      <div className={styles.overlay}>
        <div>
          <SlideIndicatoe />
          <Movingh1 />
        </div>
      </div>
      <Image src={SlideImg} className={styles.sideImg} alt="image" height={100} width={708} />
    </div>
  );
};

export default ImageSlider;
