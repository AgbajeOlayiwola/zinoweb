"use client";
import Inputs from "@/Component/Input";
import React, { useEffect, useState } from "react";
import styles from "../../styles.module.css";
import Select from "@/Component/Select";
import FirstButton from "@/Component/Buttons/firstButton";
import { gender, nationality } from "@/utils/data";
import Onboarding from "@/Component/Layout/Onboarding";
import { useRegisterNewFarmerMutation } from "@/reduxtoolkit/api/mutationApi";
import { useAppDispatch } from "@/reduxtoolkit/Provider/store";
import { Formik } from "formik";
import * as yup from "yup";
import { setCookie, getCookie } from "cookies-next";
import Already from "@/Component/SmallComponents/Already";
const StepOne = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const dispatch = useAppDispatch();
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined
  );
  const [
    registerNewFarmer,
    {
      data: newFarmerData,
      isLoading: newFarmerLoad,
      isSuccess: newFarmerSuccess,
      isError: newFarmerFalse,
      error: newFarmerErr,
      reset: newFarmerReset,
    },
  ] = useRegisterNewFarmerMutation();

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
    email: yup
      .string()
      .trim()
      .email("Email is required")
      .required("Email is required"),
    password: yup.string().required("Enter Password"),
    l_name: yup.string().required("Surrname is required"),
    f_name: yup.string().required("Other Names is required"),
    phone_num: yup.string().required("Phone Number is required"),
    dob: yup.string().required("Date Of Birth is required"),
    address: yup.string().required("Address is required"),
    gender: yup.string(),
    nationality: yup.string(),
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
  };
  return (
    <div>
      <Onboarding steps={step}>
        {newFarmerErr ? (
          <p className={styles.error}>{newFarmerErr?.data?.error?.message}</p>
        ) : null}
        <div className={styles.onBoardingLayout}>
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
              <form onSubmit={handleSubmit}>
                <div>
                  <Inputs
                    onchange={(e: any) =>
                      setFieldValue("l_name", e.target.value)
                    }
                    name="l_name"
                    value={values.l_name}
                    type="text"
                    label="Surname"
                    placeholder="Enter Your full name here...."
                  />
                  <br />
                  {errors ? <div>{errors?.l_name}</div> : null}
                  <Inputs
                    onchange={(e: any) =>
                      setFieldValue("f_name", e.target.value)
                    }
                    name="f_name"
                    value={values.f_name}
                    type="text"
                    label="Other Names"
                    placeholder="Enter Your other names here...."
                  />
                  <br />
                  {errors ? <div>{errors?.f_name}</div> : null}
                  <div className={styles.flex}>
                    <Inputs
                      onchange={(e: any) =>
                        setFieldValue("phone_num", e.target.value)
                      }
                      name="phone_num"
                      value={values.phone_num}
                      type="number"
                      label="Phone Number"
                      placeholder="Enter"
                    />
                    {errors ? <div>{errors?.phone_num}</div> : null}
                    <Select
                      label="Gender"
                      dataSet={gender}
                      onSelectChange={(e: any) =>
                        setFieldValue("gender", e.target.value)
                      }
                    />
                  </div>
                  <br />
                  <Inputs
                    onchange={(e: any) =>
                      setFieldValue("email", e.target.value)
                    }
                    name="email"
                    value={values.email}
                    type="text"
                    label="Email Address"
                    placeholder="Enter Your Email Address here...."
                  />
                  {errors ? <div>{errors?.email}</div> : null}
                  <br />
                  <Inputs
                    onchange={(e: any) =>
                      setFieldValue("password", e.target.value)
                    }
                    name="password"
                    value={values.password}
                    type="password"
                    label="Password"
                    placeholder="Enter your password here"
                  />
                  {errors ? <div>{errors?.password}</div> : null}
                  <br />
                  <div className={styles.flex}>
                    <Inputs
                      onchange={(e: any) =>
                        setFieldValue("dob", e.target.value)
                      }
                      name="dob"
                      value={values.dob}
                      type="date"
                      label="Date of Birth"
                      placeholder="Choose..."
                    />
                    {errors ? <div>{errors?.dob}</div> : null}
                    <Select
                      label="Nationality"
                      dataSet={nationality}
                      onSelectChange={(e: any) =>
                        setFieldValue("nationality", e.target.value)
                      }
                    />
                  </div>
                  <br />
                  <Inputs
                    onchange={(e: any) =>
                      setFieldValue("address", e.target.value)
                    }
                    name="address"
                    value={values.address}
                    type="text"
                    label="Residential Address"
                    placeholder="Enter Your other names here...."
                  />
                  <br />
                  {errors ? <div>{errors?.address}</div> : null}
                  <br />
                </div>
                <FirstButton
                  loads={newFarmerLoad}
                  type="Submit"
                  text="Continue"
                />
              </form>
            )}
          </Formik>
        </div>
        <Already />
      </Onboarding>
    </div>
  );
};

export default StepOne;
