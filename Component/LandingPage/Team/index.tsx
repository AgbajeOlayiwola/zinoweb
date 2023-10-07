import Cover from "@/Component/Cover";
import styles from "./styles.module.css";

const Team = () => {
  return (
    <Cover>
      <div className={styles.teamContainer}>
        <h2>Meet the team</h2>
        <div className={styles.teamWrapper}>
          <div>
            <h2>Theo Adewale Onadeko</h2>
            <p>Co-founder</p>
          </div>
          <div>
            <h2>Deji Olomojobi</h2>
            <p>Co-founder</p>
          </div>
          <div>
            <h2>Femi Agboade</h2>
            <p>Co-founder</p>
          </div>
        
        </div>
      </div>
    </Cover>
  );
};

export default Team;
