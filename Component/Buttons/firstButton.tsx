'use client'
import { useEffect, useState } from "react";
import Loader from "../Loader";
import styles from "./firstMobile.module.css";

const FirstButton = ({
  type,
  text,
  loads,
}: {
  loads?: any;
  type: any;
  text: string;
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(loads);
  }, [loads]);
  return (
    <button className={styles.firstBtn} type={type}>
      {loading ? <Loader /> : text}
    </button>
  );
};

export default FirstButton;
