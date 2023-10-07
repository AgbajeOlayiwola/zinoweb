import styles from "./styles.module.css";

const ClickButton = ({
  type,
  text,
  action,
}: {
  type: any;
  text: string;
  action: any;
}) => {
  return (
    <button className={styles.firstBtn} type={type} onClick={action}>
      {text}
    </button>
  );
};

export default ClickButton;
