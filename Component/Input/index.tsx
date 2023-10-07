import styles from "./styles.module.css";

const Inputs = ({
  label,
  placeholder,
  type,
  onchange,
  name,
  value,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  onchange?: any;
  name?: any;
  value?: any;
}) => {
  return (
    <div className={styles.inputs}>
      <label>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onchange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;
