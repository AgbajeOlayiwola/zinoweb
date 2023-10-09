"use client"
import {
  useSendPhoneVerificationTokenMutation,
  useSendVerificationTokenMutation,
  useVerifyEmailTokenMutation,
  useVerifyPhoneTokenMutation
} from "@/reduxtoolkit/api/mutationApi"
import { useEffect, useState } from "react"
import FirstButton from "../Buttons/firstButton"
import Onboarding from "../Layout/Onboarding"
import OtpInput from "../OtpInput"
import styles from "./styles.module.css"
const OtpStep = ({ step, nextStep }: { step: any; nextStep: any }) => {
  interface EmailPhoneData {
    emailData: any
    phoneNumberData: any
  }
  const [otpValue, setOtpValue] = useState("") // State to store the OTP value
  const [verifyType, setVerifyType] = useState(false)
  const [emailPhone, setEmailPhone] = useState<any>()
  // Callback function to receive the OTP value from OtpInput
  const handleOtpChange = (otp: string) => {
    setOtpValue(otp)
  }
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
  ]: any = useVerifyPhoneTokenMutation()
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
  ]: any = useVerifyEmailTokenMutation()
  const [
    sendVerificationToken,
    {
      data: sendVerificationTokenData,
      isLoading: sendVerificationTokenLoad,
      isSuccess: sendVerificationTokenSuccess,
      isError: sendVerificationTokenFalse,
      error: sendVerificationTokenErr,
      reset: sendVerificationTokenReset,
    },
  ] = useSendVerificationTokenMutation()

  const [
    sendPhoneVerificationToken,
    {
      data: sendPhoneVerificationTokenData,
      isLoading: sendPhoneVerificationTokenLoad,
      isSuccess: sendPhoneVerificationTokenSuccess,
      isError: sendPhoneVerificationTokenFalse,
      error: sendPhoneVerificationTokenErr,
      reset: sendPhoneVerificationTokenReset,
    },
  ] = useSendPhoneVerificationTokenMutation()

  useEffect(() => {
    if (verifyPhoneTokenData) {
      nextStep()
    }
    //  else {
    // console.log(verifyPhoneTokenErr);
    // }
  }, [verifyPhoneTokenSuccess])

  useEffect(() => {
    if (verifyEmailTokenData) {
      nextStep()
    }
  }, [verifyEmailTokenSuccess, verifyPhoneTokenErr])

  useEffect(() => {
    interface OtpData {
      emailData: any
      phoneNumberData: any
    }
    const otpDataString = localStorage.getItem("otpData")
    let emailData: OtpData | null = null

    if (otpDataString) {
      try {
        setEmailPhone(JSON.parse(otpDataString))
      } catch (error) {
        console.error("Error parsing OTP data from localStorage:", error)
      }
    }
  }, [])

  const submit = (e: any) => {
    e.preventDefault()
    const Phonedata = {
      // phone_num: emailPhone?.phoneNumberData,
      token: otpValue,
    }
    verifyPhoneToken(Phonedata)
  }
  const submitEmail = (e: any) => {
    e.preventDefault()
    const emaildata = {
      // phone_num: emailPhone?.emailData,
      token: otpValue,
    }
    verifyEmailToken(emaildata)
  }
  const resendEMailotp = () => {
    sendVerificationToken(emailPhone?.emailData)
  }
  const resendPhoneOtp = () => {
    sendPhoneVerificationToken(emailPhone?.phoneNumberData)
  }
  useEffect(() => {
    if (verifyEmailTokenData) {
      console.log(verifyEmailTokenData)
      nextStep()
    }
  }, [verifyEmailTokenSuccess, verifyEmailTokenData])
  useEffect(() => {
    if (verifyPhoneTokenData) {
      console.log(verifyPhoneTokenData)
      nextStep()
    }
  }, [verifyPhoneTokenSuccess, verifyPhoneTokenData])
  return (
    <>
      <Onboarding steps={step}>
        <br />
        <div className={styles.verifyAccount}>
          {verifyEmailTokenErr ? (
            <p className={styles.error}>
              {" "}
              {verifyEmailTokenErr?.data?.error?.message}
            </p>
          ) : null}
          {verifyPhoneTokenErr ? (
            <p className={styles.error}>
              {verifyPhoneTokenErr?.data?.error?.message}
            </p>
          ) : null}
          <p className={styles.veriItem}>
            Verify your {verifyType ? <>email address</> : <>Phone Number</>}
          </p>
          <p className={styles.kindly}>Kindly enter code</p>
          <p className={styles.veri}>
            A verification code has been sent to your{" "}
            {verifyType ? <>email address</> : <>Phone Number</>}{" "}
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
        <form>
          <div>
            <OtpInput onOtpChange={handleOtpChange} otpfields={6} />
            <div className={styles.didnt}>
              <p>
                Didn’t receive code?{" "}
                <span onClick={verifyType ? resendEMailotp : resendPhoneOtp}>
                  Resend
                </span>
              </p>
            </div>
            <br />
            <br />
            {verifyType ? (
              <div onClick={submitEmail}>
                <FirstButton
                  type="Submit"
                  loads={verifyEmailTokenLoad}
                  text="Continue"
                />
              </div>
            ) : (
              <div onClick={submit}>
                <FirstButton
                  type="Submit"
                  loads={verifyPhoneTokenLoad}
                  text="Continue"
                />
              </div>
            )}
            <br />
            <p
              className={styles.verify}
              onClick={() => setVerifyType(!verifyType)}
            >
              {verifyType ? (
                <> Verify using email address</>
              ) : (
                <>Verify using phone number</>
              )}
            </p>
          </div>
        </form>
      </Onboarding>
    </>
  )
}

export default OtpStep
