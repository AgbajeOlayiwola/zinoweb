import React from "react";
import SlideIndicatoe from "../SmallComponents/SlideIndicator";
import Movingh1 from "../SmallComponents/Movingh1";
import Image from "next/image";
import styles from "./styles.module.css";

const ImageSlider = () => {
  return (
    <div>
      <div className={styles.overlay}>
        <div>
          <SlideIndicatoe />
          <Movingh1 />
        </div>
      </div>
      <Image
        src="/images/image1.png"
        className={styles.sideImg}
        alt="image"
        height={100}
        width={708}
      />
    </div>
  );
};

export default ImageSlider;
