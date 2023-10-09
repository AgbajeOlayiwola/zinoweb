"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import Onboarding from "@/Component/Layout/Onboarding";
import { useVirtualAccountAgntMutation } from "@/reduxtoolkit/api/mutationApi";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import styles from "./styles.module.css";
const VirtualAccount = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [
    virtualAccountAgnt,
    {
      data: virtualAccountAgntData,
      isLoading: virtualAccountAgntLoad,
      isSuccess: virtualAccountAgntSuccess,
      isError: virtualAccountAgntFalse,
      error: virtualAccountAgntErr,
      reset: virtualAccountAgntReset,
    },
  ]: any = useVirtualAccountAgntMutation();

  const [date, setDate] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
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
    } else {
      setDate("098765678");
      setEmailPhone("agbajeOlayiwola");
    }

    console.log(emailData);
  }, []);
  const initSchema = yup.object().shape({
    date: yup.string(),
    bvn: yup.string(),
    emailPhone: yup.string(),
  });
  const initialValues = {
    date: "",
    bvn: "",
    emailPhone: "",
  };
  return (
    <Onboarding steps={step}>
      {virtualAccountAgntErr ? (
        <p className={styles.error}>
          {virtualAccountAgntErr?.data?.error?.message}
        </p>
      ) : null}
      <div className={styles.onBoardingLayout}>
        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              bvn: values.bvn,
              mobile_num: emailPhone?.emailData,
              dob: emailPhone?.dob,
            };
            console.log(data);
            virtualAccountAgnt(data);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleSubmit,
          }) => (
            <form className={styles.confirmForm} onSubmit={handleSubmit}>
              <div>
                <div className={styles.onBoardingLayout}>
                  <div>
                    <>
                      <Inputs
                        name="bvn"
                        value={values.bvn}
                        type="text"
                        label="BVN"
                        onchange={(e: any) =>
                          setFieldValue("bvn", e.target.value)
                        }
                        placeholder="BVN Numbe"
                      />
                      <br />
                      <br />
                    </>
                  </div>
                </div>
                <FirstButton
                  loads={virtualAccountAgntLoad}
                  type="Submit"
                  text="Continue"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Onboarding>
  );
};

export default VirtualAccount;
