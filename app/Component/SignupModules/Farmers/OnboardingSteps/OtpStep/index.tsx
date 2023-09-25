"use client";
import FirstButton from "@/app/Component/Buttons/firstButton";
import Onboarding from "@/app/Component/Layout/Onboarding";
import OtpInput from "@/app/Component/OtpInput";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useVerifyEmailTokenMutation, useVerifyPhoneTokenMutation } from "@/reduxtoolkit/api/mutationApi";
const OtpStep = ({ step, nextStep }: { step: any; nextStep: any }) => {
  interface EmailPhoneData {
    emailData: string;
    phoneNumberData: string;
  }
  const [otpValue, setOtpValue] = useState(""); // State to store the OTP value
  const [verifyType, setVerifyType] = useState(false);
  const [emailPhone, setEmailPhone] = useState<EmailPhoneData[]>();
  // Callback function to receive the OTP value from OtpInput
  const handleOtpChange = (otp: string) => {
    setOtpValue(otp);
  };
  const [
    verifyPhoneToken,
    {
      data: verifyPhoneTokenData,
      isLoading: verifyPhoneTokenLoad,
      isSuccess: verifyPhoneTokenSuccess,
      isError: verifyPhoneTokenFalse,
      error: verifyPhoneTokenErr,
      reset: verifyPhoneTokenReset,
    },
  ] = useVerifyPhoneTokenMutation();
  const [
    verifyEmailToken,
    {
      data: verifyEmailTokenData,
      isLoading: verifyEmailTokenLoad,
      isSuccess: verifyEmailTokenSuccess,
      isError: verifyEmailTokenFalse,
      error: verifyEmailTokenErr,
      reset: verifyEmailTokenReset,
    },
  ] = useVerifyEmailTokenMutation();
  useEffect(() => {
    interface OtpData {
      emailData: string;
      phoneNumberData: string;
    }
    const otpDataString = localStorage.getItem("otpData");
    let emailData: OtpData | null = null;

    if (otpDataString) {
      try {
        setEmailPhone(JSON.parse(otpDataString));
      } catch (error) {
        console.error("Error parsing OTP data from localStorage:", error);
      }
    }

    console.log(emailData);
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    const Phonedata = {
      // phone_num: emailPhone?.phoneNumberData,
      token: otpValue,
    };
    verifyPhoneToken(Phonedata);
  };
  const submitEmail = (e: any) => {
    e.preventDefault();
    const emaildata = {
      // phone_num: emailPhone?.emailData,
      token: otpValue,
    };
    verifyEmailToken(emaildata);
  };
  useEffect(() => {
    if (verifyEmailTokenData) {
      console.log(verifyEmailTokenData);
      nextStep();
    }
  }, [verifyEmailTokenSuccess, verifyEmailTokenData]);
  useEffect(() => {
    if (verifyPhoneTokenData) {
      console.log(verifyPhoneTokenData);
      nextStep();
    }
  }, [verifyPhoneTokenSuccess, verifyPhoneTokenData]);
  return (
    <>
      <Onboarding steps={step}>
        <br />
        <div className={styles.verifyAccount}>
          <p className={styles.veriItem}>Verify your {verifyType ? <>email address</> : <>Phone Number</>}</p>
          <p className={styles.kindly}>Kindly enter code</p>
          <p className={styles.veri}>
            A verification code has been sent to your {verifyType ? <>email address</> : <>Phone Number</>}{" "}
            {verifyType ? (
              // <span> {emailPhone?.emailData}</span>
              <span>x</span>
            ) : (
              // <span> {emailPhone?.phoneNumberData}</span>
              <span></span>
            )}
          </p>
        </div>
        <br />
        <br />
        <br />
        <form>
          <div>
            <OtpInput onOtpChange={handleOtpChange} />
            <div className={styles.didnt}>
              <p>
                Didn’t receive code? <span>Resend</span>
              </p>
            </div>
            <br />
            <br />
            {verifyType ? (
              <div onClick={submitEmail}>
                <FirstButton
                  action={() => {
                    console.log("test");
                  }}
                  type="Submit"
                  text="Continue"
                />
              </div>
            ) : (
              <div onClick={submit}>
                <FirstButton
                  action={() => {
                    console.log("test");
                  }}
                  type="Submit"
                  text="Continue"
                />
              </div>
            )}
            <br />
            <p className={styles.verify} onClick={() => setVerifyType(!verifyType)}>
              {verifyType ? <> Verify using email address</> : <>Verify using phone number</>}
            </p>
          </div>
        </form>
      </Onboarding>
    </>
  );
};

export default OtpStep;
