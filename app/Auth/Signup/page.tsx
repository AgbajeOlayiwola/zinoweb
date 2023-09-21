import ImageSlider from "@/app/Component/imageSlider";
import styles from "./styles.module.css";
import React from "react";
import Inputs from "@/app/Component/Input";
import FirstButton from "@/app/Component/Buttons/firstButton";

const Signup = () => {
  return (
    <div className={styles.authSidei}>
      <ImageSlider />
      <div>
        <div className={styles.welcomeBack}>
          <div>
            <h1>Welcome back</h1>
            <p>
              Please kindly enter your log in information to start enjoying your
              app
            </p>

            <Inputs
              type="Email"
              label="Email Address"
              placeholder="Enter Your Email Address here...."
            />
            <br />
            <br />
            <Inputs
              type="Password"
              label="Surname"
              placeholder="Enter your password here"
            />
            <br />
            <br />
            <FirstButton type="Submit" text="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
