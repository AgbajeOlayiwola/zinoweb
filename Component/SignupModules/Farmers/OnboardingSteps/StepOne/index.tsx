"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import Onboarding from "@/Component/Layout/Onboarding";
import Select from "@/Component/Select";
import Already from "@/Component/SmallComponents/Already";
import { useAppDispatch } from "@/reduxtoolkit/Provider/store";
import { useRegisterNewFarmerMutation } from "@/reduxtoolkit/api/mutationApi";
import { gender, location, nationality } from "@/utils/data";
import { getCookie, setCookie } from "cookies-next";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import styles from "../../styles.module.css";
const StepOne = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const dispatch = useAppDispatch();
  const [selectedGender, setSelectedGender] = useState<string | undefined>(undefined);
  const [
    registerNewFarmer,
    { data: newFarmerData, isLoading: newFarmerLoad, isSuccess: newFarmerSuccess, isError: newFarmerFalse, error: newFarmerErr, reset: newFarmerReset },
  ]: any = useRegisterNewFarmerMutation();

  useEffect(() => {
    if (newFarmerData) {
      console.log(newFarmerData);
      setCookie("accessToken", newFarmerData?.accessToken);
      if (getCookie("accessToken")) {
        nextStep();
      }
    }
  }, [newFarmerSuccess, newFarmerData]);
  const initSchema = yup.object().shape({
    email: yup.string().trim().email("Email is required").required("Email is required"),
    password: yup.string().required("Enter Password"),
    l_name: yup.string().required("Surrname is required"),
    f_name: yup.string().required("Other Names is required"),
    phone_num: yup.string().required("Phone Number is required"),
    dob: yup.string().required("Date Of Birth is required"),
    address: yup.string().required("Address is required"),
    gender: yup.string(),
    nationality: yup.string(),
    state: yup.string(),
  });
  const initialValues = {
    email: "",
    password: "",
    l_name: "",
    f_name: "",
    phone_num: "",
    dob: "",
    address: "",
    gender: "",
    nationality: "",
    state: "",
  };
  const showToastAccountStatusErrorMessage = () => {
    toast.error(newFarmerErr?.data?.error?.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  useEffect(() => {
    if (newFarmerErr) {
      showToastAccountStatusErrorMessage();
    }
  }, [newFarmerErr]);
  return (
    <div>
      <Onboarding steps={step}>
        <ToastContainer />
        {newFarmerErr ? <p className={styles.error}>{newFarmerErr?.data?.error?.message}</p> : null}
        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            registerNewFarmer(values);
            const otpData = {
              emailData: values.email,
              phoneNumberData: values.phone_num,
            };
            localStorage.setItem("otpData", JSON.stringify(otpData)); // Store otpData as a string
            setSubmitting(false);
          }}>
          {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.onBoardingLayout}>
                <div className={styles.onboardingBody}>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("l_name", e.target.value)}
                      name="l_name"
                      value={values.l_name}
                      type="text"
                      label="First Name"
                      placeholder="Enter Your full name here...."
                    />
                    {errors ? <p>{errors?.l_name}</p> : null}
                  </div>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("f_name", e.target.value)}
                      name="f_name"
                      value={values.f_name}
                      type="text"
                      label="Other Names"
                      placeholder="Enter Your other names here...."
                    />
                    {errors ? <p>{errors?.f_name}</p> : null}
                  </div>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("phone_num", e.target.value)}
                      name="phone_num"
                      value={values.phone_num}
                      type="number"
                      label="Phone Number"
                      placeholder="Enter"
                    />
                    {errors ? <p>{errors?.phone_num}</p> : null}
                  </div>
                  <div className={styles.flex}>
                    <div className={styles.onboardingInput}>
                      <Inputs onchange={(e: any) => setFieldValue("dob", e.target.value)} name="dob" value={values.dob} type="date" label="Date of Birth" placeholder="Choose..." />
                      {errors ? <p>{errors?.dob}</p> : null}
                    </div>
                    <div className={styles.onboardingInput}>
                      <Select label="Gender" dataSet={gender} onSelectChange={(e: any) => setFieldValue("gender", e.target.value)} />
                    </div>
                  </div>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("email", e.target.value)}
                      name="email"
                      value={values.email}
                      type="text"
                      label="Email Address"
                      placeholder="Enter Your Email Address here...."
                    />
                    {errors ? <p>{errors?.email}</p> : null}
                  </div>
                  <div className={styles.flex}>
                    <div className={styles.onboardingInput}>
                      <Select label="Nationality" dataSet={nationality} onSelectChange={(e: any) => setFieldValue("nationality", e.target.value)} />
                    </div>
                    <div className={styles.onboardingInput}>
                      <Select label="State" dataSet={location} onSelectChange={(e: any) => setFieldValue("state", e.target.value)} type={true} />
                    </div>
                  </div>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("address", e.target.value)}
                      name="address"
                      value={values.address}
                      type="text"
                      label="Residential Address"
                      placeholder="Enter Your Residential address here...."
                    />
                    {errors ? <p>{errors?.address}</p> : null}
                  </div>
                  <div className={styles.onboardingInput}>
                    <Inputs
                      onchange={(e: any) => setFieldValue("password", e.target.value)}
                      name="password"
                      value={values.password}
                      type="password"
                      label="Password"
                      placeholder="Enter your password here"
                    />
                    {errors ? <p>{errors?.password}</p> : null}
                  </div>
                </div>
                <FirstButton loads={newFarmerLoad} type="Submit" text="Continue" />
              </div>
            </form>
          )}
        </Formik>
        <Already />
      </Onboarding>
    </div>
  );
};

export default StepOne;
