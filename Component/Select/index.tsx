import styles from "./styles.module.css";

// select compoenent accepts a data list which is tyo be imported from /util/data
const Select = ({
  label,
  dataSet,
  onSelectChange,
}: {
  label?: string;
  dataSet?: any;
  onSelectChange?: any;
}) => {
  return (
    <div className={styles.select}>
      <label>{label}</label>
      <select onChange={onSelectChange}>
        {dataSet?.map((item: any, index: number) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
