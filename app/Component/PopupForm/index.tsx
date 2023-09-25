import React from "react";
import styles from "./styles.module.css";
import Close from "../SVGS/close";
import FirstButton from "../Buttons/firstButton";

const PopupForm = ({ action }: any) => {
  return (
    <div className={styles.overlay}>
      <form>
        <div className={styles.overlayForm}>
          <div className={styles.closeButton}>
            <Close action={action} />
          </div>
          <h2>Kindly fill this form</h2>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="Type here" />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="text" placeholder="Type here" />
          </div>
          <div className={styles.formGroup}>
            <label>Category</label>
            <select>
              <option value="">Choose...</option>
              <option value="Farmer">Farmer</option>
              <option value="Agent">Agent</option>
              <option value="Merchant">Merchant</option>
              <option value="Investors">Investors</option>
            </select>
          </div>
          <FirstButton
            type="Button"
            text="Submit"
            action={() => {
              console.log("Test");
            }}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
