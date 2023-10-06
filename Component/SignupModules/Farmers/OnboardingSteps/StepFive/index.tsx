"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { farmingYears } from "@/utils/data";
import React, { useState, useEffect } from "react";
import styles from "../../styles.module.css";
import { useEditFarmerMutation } from "@/reduxtoolkit/api/mutationApi";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setTest } from "@/reduxtoolkit/slices/tstSlicx";

const StepFive = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const dispatch = useDispatch();
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  const [
    editFarmer,
    {
      data: editFarmerData,
      isLoading: editFarmerLoad,
      isSuccess: editFarmerSuccess,
      isError: editFarmerFalse,
      error: editFarmerErr,
      reset: editFarmerReset,
    },
  ] = useEditFarmerMutation();
  const initSchema = yup.object().shape({
    coprMembership: yup.string(),
    farmingexperience: yup.string(),
    address: yup.string(),
  });
  const [member, setMemeber] = useState(false);
  const initialValues = dynamicForm
    ? {
        years_of_experience: "",
      }
    : {
        years_of_experience: "",
        cooperative_group: "",
        coop_group_address: "",
      };
  useEffect(() => {
    if (editFarmerData) {
      nextStep();
    }
  }, [editFarmerSuccess]);

  return (
    <Onboarding steps={step}>
      {editFarmerErr ? (
        <p className={styles.error}>{editFarmerErr?.data?.error?.message}</p>
      ) : null}
      <div className={styles.onBoardingLayout}>
        <Formik
          validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setTest(values));
            editFarmer(values);
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
                <div className={styles.onBoardingLayout}>
                  <div>
                    <Select
                      label="Years of Farming Experience"
                      dataSet={farmingYears}
                      onSelectChange={(e: any) =>
                        setFieldValue("years_of_experience", e.target.value)
                      }
                    />
                    <br />
                    <br />
                    <ToggleComponent
                      onchange={(e: any) =>
                        setFieldValue("cooperative_group", e.target.value)
                      }
                      toggleLabel="Cooperative Membership?"
                      value={values.cooperative_group}
                      name="cooperative_group:"
                      hasTextField={dynamicForm ? false : true}
                      onclick={() => setMemeber(!member)}
                      no="No"
                      yes="Yes"
                      action={move}
                      placeholder="Cooperative Membership?"
                    />
                    <br />
                    <br />
                    {dynamicForm ? null : (
                      <>
                        <Inputs
                          onchange={(e: any) =>
                            setFieldValue("coop_group_address", e.target.value)
                          }
                          name="coop_group_address"
                          value={values.coop_group_address}
                          type="text"
                          label="Address of Cooperative Group"
                          placeholder="Address of Cooperative Group"
                        />
                        <br />
                        <br />
                      </>
                    )}
                  </div>
                </div>
                <FirstButton
                  loads={editFarmerLoad}
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

export default StepFive;
