"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import Onboarding from "@/Component/Layout/Onboarding";
import Select from "@/Component/Select";
import Already from "@/Component/SmallComponents/Already";
import { useAppDispatch } from "@/reduxtoolkit/Provider/store";
import {
  useRegisterNewAgentMutation
} from "@/reduxtoolkit/api/mutationApi";
import { setProfile } from "@/reduxtoolkit/slices/profileSlice";
import { gender, nationality } from "@/utils/data";
import { getCookie, setCookie } from "cookies-next";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import styles from "./styles.module.css";
const StepOne = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const dispatch = useAppDispatch();
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined
  );
  const [
    registerNewAgent,
    {
      data: registerNewAgentData,
      isLoading: registerNewAgentLoad,
      isSuccess: registerNewAgentSuccess,
      isError: registerNewAgentFalse,
      error: registerNewAgentErr,
      reset: registerNewAgentReset,
    },
  ]: any = useRegisterNewAgentMutation();

  const handleProceed = async (val:any) => {
    await dispatch(setProfile(val?.data));
    if (registerNewAgentData) {
      setCookie("accessToken", registerNewAgentData?.accessToken);
    }
    if (getCookie("accessToken")) {
      nextStep();
    }
  };

  useEffect(() => {
    if (registerNewAgentSuccess) {
      handleProceed(registerNewAgentSuccess);
    }
  }, [registerNewAgentSuccess]);
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
        {registerNewAgentErr ? (
          <p className={styles.error}>
            {registerNewAgentErr?.data?.error?.message}
          </p>
        ) : null}
        <div className={styles.onBoardingLayout}>
          <Formik
            validationSchema={initSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              registerNewAgent(values);
              const otpData = {
                emailData: values.email,
                phoneNumberData: values.phone_num,
                dob: values.dob,
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
                  loads={registerNewAgentLoad}
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
