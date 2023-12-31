import Cover from "@/Component/Cover";
import Image from "next/image";
import styles from "./styles.module.css";
import Sdg1 from "../../../Component/assets/images/sdg1.png";
import Sdg2 from "../../../Component/assets/images/sdg2.png";
import Sdg3 from "../../../Component/assets/images/sdg3.png";
import Sdg4 from "../../../Component/assets/images/sdg4.png";

const Mapping = () => {
  return (
    <div className={styles.mappingContainer}>
      <Cover>
        <div className={styles.mappingWrapper}>
          <div className={styles.mappingHead}>
            <h2>SDG Mapping</h2>
            <p>As an impact-driven and sustainability-driven organization, our operations are mapped to few United Nations’ sustainable development goals.</p>
          </div>
          <div className={styles.mappingBody}>
            <div className={styles.mappingSingle}>
              <div className={styles.mappingSingleImg}>
                <Image src={Sdg1} alt="sdg1" fill />
              </div>
              <div className={styles.mappingSingleBody}>
                <h2>Livelihoods -SDG 1</h2>
                <p>Economic opportunities</p>
              </div>
              <div className={styles.mappingSingleList}>
                <ul>
                  <li>Agro-allied</li>
                  <li>Agritech</li>
                  <li>Fintech</li>
                </ul>
              </div>
            </div>
            <div className={styles.mappingSingle}>
              <div className={styles.mappingSingleImg}>
                <Image src={Sdg2} alt="sdg1" fill />
              </div>
              <div className={styles.mappingSingleBody}>
                <h2>Agro-industrial clusters - SDG 8</h2>
                <p>Creating decent work and driving economic growth</p>
              </div>
              <div className={styles.mappingSingleList}>
                <ul>
                  <li>Jobs in agro-allied</li>
                  <li>Jobs in fintech</li>
                  <li>Jobs in agritech</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.mappingBody}>
            <div className={styles.mappingSingle}>
              <div className={styles.mappingSingleImg}>
                <Image src={Sdg3} alt="sdg1" fill />
              </div>
              <div className={styles.mappingSingleBody}>
                <h2>Digital Innovation - SDG 9</h2>
                <p>For advisory, agro-services, finance and markets</p>
              </div>
              <div className={styles.mappingSingleList}>
                <ul>
                  <li>GAP</li>
                  <li>Payments</li>
                  <li>e-commerce</li>
                </ul>
                <ul>
                  <li>Farm management</li>
                  <li>Weather & Info services</li>
                </ul>
              </div>
            </div>
            <div className={styles.mappingSingle}>
              <div className={styles.mappingSingleImg}>
                <Image src={Sdg4} alt="sdg1" fill />
              </div>
              <div className={styles.mappingSingleBody}>
                <h2>Climate Action - SDG 13</h2>
                <p>Consolidated agricultural value chain activities and circular economy</p>
              </div>
              <div className={styles.mappingSingleList}>
                <ul>
                  <li>Sustainable land management</li>
                  <li>Resource use efficiency</li>
                  <li>Global standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Cover>
    </div>
  );
};

export default Mapping;
