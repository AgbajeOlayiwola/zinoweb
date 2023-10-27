import Layout from "@/Component/Layout";
import styles from "./styles.module.css";

const Demo = () => {
  return (
    <Layout>
      <div className={styles.vid}>
        <video controls width="950" className="w-2/3 h-full aspect-square object-cover rounded-xl ">
          <source src={"/How_to_join_zino.mp4"} type="video/webm" />
        </video>
      </div>
    </Layout>
  );
};

export default Demo;
