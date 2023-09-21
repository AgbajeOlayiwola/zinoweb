import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import RightSvg from "../../SVGS/rightSvg";

const SmallBoxes = ({
  text,
  title,
  image,
  action,
}: {
  text: string;
  title: string;
  image: string;
  action: any;
}) => {
  return (
    <div className={styles.box} onClick={action}>
      <div className={styles.innerBox}>
        <div className={styles.inner}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.imageRight}>
          <Image src={image} width={108} height={108} alt={`zino ${title}`} />
          <div>
            <RightSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBoxes;
