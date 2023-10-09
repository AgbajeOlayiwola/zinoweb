"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { useVerifyAgentExperienceMutation } from "@/reduxtoolkit/api/mutationApi";
import { technicalYears } from "@/utils/data";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../styles.module.css";

const StepFour = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const initialValues = {
    is_food_agro_expert: false,
    qualified: "",
    years_post_grad_experience: "",
  };
  const [
    verifyAgentExperience,
    {
      data: verifyAgentExperienceData,
      isLoading: verifyAgentExperienceLoad,
      isSuccess: verifyAgentExperienceSuccess,
      isError: verifyAgentExperienceFalse,
      error: verifyAgentExperienceErr,
      reset: verifyAgentExperienceReset,
    },
  ]:any = useVerifyAgentExperienceMutation();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleImageChange = async (event: any) => {
    const selectedImage = event.target.files[0];
  };

  // Define a function to receive the imageUrl and update state
  const handleImageUrlChange = (imageUrl: string | null) => {
    setUploadedImageUrl(imageUrl);
  };
  return (
    <Onboarding steps={step}>
      {verifyAgentExperienceErr ? (
        <p className={styles.error}>
          {verifyAgentExperienceErr?.data?.error?.message}
        </p>
      ) : null}
      <div className={styles.onBoardingLayout}>
        <div>
          <Formik
            // validationSchema={initSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              const mainData = {
                is_food_agro_expert: values.is_food_agro_expert,
                qualified: values.qualified,
                years_post_grad_experience: values.years_post_grad_experience,
                cv: uploadedImageUrl,
              };
              verifyAgentExperience(mainData);
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
                <div className={styles.onBoardingLayout}>
                  <div>
                    <ToggleComponent
                      name="qualified"
                      toggleLabel="Are you a qualified food and agribusiness expert?"
                      no="No"
                      yes="Yes"
                      onclick={() =>
                        setFieldValue(
                          "is_food_agro_expert",
                          !values.is_food_agro_expert
                        )
                      }
                      value={values.qualified}
                      action={move}
                      hasTextField={dynamicForm ? false : true}
                      placeholder="Please state area of expertise"
                      onchange={(e: any) =>
                        setFieldValue("qualified", e.target.value)
                      }
                    />
                    <br />
                    <br />
                    {dynamicForm ? null : (
                      <>
                        <Select
                          onSelectChange={(e: any) =>
                            setFieldValue(
                              "years_post_grad_experience",
                              e.target.value
                            )
                          }
                          label="Years of Post-graduation Technical Experience"
                          dataSet={technicalYears}
                        />
                        <br />
                        <br />
                        <InputFile
                          onImageUrlChange={handleImageUrlChange}
                          label="Currilculum Vitae"
                          disclaimer="(CV)"
                          onchange={handleImageChange}
                          icon={<PulsCircleSvg />}
                          uploadLabel="Add file"
                          name="cv"
                        />
                        <br />
                        <br />
                      </>
                    )}
                  </div>
                </div>
                <FirstButton
                  loads={verifyAgentExperienceLoad}
                  type="Submit"
                  text="Continue"
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Onboarding>
  );
};

export default StepFour;
