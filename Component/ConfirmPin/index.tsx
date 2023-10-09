"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Onboarding from "@/Component/Layout/Onboarding";
import OtpInput from "@/Component/OtpInput";
import { useVirtualAccountPinMutation } from "@/reduxtoolkit/api/mutationApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SecondButton from "../Buttons/SecondButton";
import Success from "../SVGS/success";
import styles from "./styles.module.css";
const ConfirmPin = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [otpValue, setOtpValue] = useState(""); // State to store the OTP value
  const [confOtpVal, setConfOtpVal] = useState("");
  const [otpMatch, setOtpMatch] = useState("");
  // Callback function to receive the OTP value from OtpInput
  const handleOtpChange = (newotp: string) => {
    setOtpValue(newotp);
  };
  const handleConfOtpChange = (confOtp: string) => {
    setConfOtpVal(confOtp);
  };

  const router = useRouter();
  const [
    virtualAccountPin,
    {
      data: virtualAccountPinData,
      isLoading: virtualAccountPinAgntLoad,
      isSuccess: virtualAccountPinSuccess,
      isError: virtualAccountPinFalse,
      error: virtualAccountPinErr,
      reset: virtualAccountPinReset,
    },
  ] = useVirtualAccountPinMutation();
  const initialValues = {
    otpValue: "",
    confOtpVal: "",
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (otpValue === confOtpVal) {
      const data = {
        pin: otpValue,
        confirm_pin: confOtpVal,
      };
      virtualAccountPin(data);
    } else {
      setOtpMatch("Pin does not match");
    }
  };
  return (
    <>
      <Onboarding steps={step}>
        {virtualAccountPinErr ? (
          <p className={styles.error}>
            {virtualAccountPinErr?.data?.error?.message}
          </p>
        ) : null}
        {otpMatch ? <p className={styles.error}>{otpMatch}</p> : null}
        <br />
        <div className={styles.verifyAccount}></div>
        <br />
        <br />

        <form className={styles.confirmForm} onSubmit={handleSubmit}>
          <div className={styles.confirmPin}>
            <p>Enter PIN</p>
            <OtpInput onOtpChange={handleOtpChange} otpfields={4} />
            <br />
            <br />
            <p>Confirm PIN</p>
            <OtpInput onOtpChange={handleConfOtpChange} otpfields={4} />
            <br />
            <br />
          </div>
          <FirstButton
            loads={virtualAccountPinAgntLoad}
            type="Submit"
            text="Continue"
          />
        </form>
        {virtualAccountPinSuccess ? (
          <div className={styles.overBack}>
            <div className={styles.innerBack}>
              <Success />
              <h2>Account created successfully!</h2>
              <p>
                Your account has been created, you now have access to your
                dashboard to enjoy the features we have for you
              </p>
              <SecondButton
                type="button"
                text="Continue"
                onclick={() => {
                  router.push("/Auth/Signup");
                }}
              />
            </div>
          </div>
        ) : null}
      </Onboarding>
    </>
  );
};

export default ConfirmPin;
