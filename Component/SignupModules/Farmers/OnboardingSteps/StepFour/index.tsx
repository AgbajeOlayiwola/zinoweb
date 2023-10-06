import FirstButton from "@/Component/Buttons/firstButton";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { agreement, nationality } from "@/utils/data";
import React, { useEffect, useState } from "react";
import styles from "../../styles.module.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useEditFarmMutation } from "@/reduxtoolkit/api/mutationApi";
const StepFour = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [dynamicForm, setDynamicForm] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [
    editFarm,
    {
      data: editFarmData,
      isLoading: editFarmLoad,
      isSuccess: editFarmSuccess,
      isError: editFarmFalse,
      error: editFarmErr,
      reset: editFarmReset,
    },
  ] = useEditFarmMutation();

  const handleFileUpload = (file: any) => {
    // Handle the file upload here, e.g., send it to a server
    setSelectedFile(file);
  };
  const move = () => {
    setDynamicForm(!dynamicForm);
  };
  useEffect(() => {
    if (editFarmSuccess) {
      nextStep();
    }
  }, [editFarmSuccess]);
  const initialValues = {
    ownLand: "",
    files: "",
    agree: "",
  };

  return (
    <Onboarding steps={step}>
      {editFarmErr ? <p>{editFarmErr?.data?.error?.message}</p> : null}
      <div className={styles.onBoardingLayout}>
        <Formik
          // validationSchema={initSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const body = dynamicForm
              ? {
                  land_owned_by_farmer: false,
                  type: values.agree,
                }
              : {
                  land_owned_by_farmer: true,
                  farm_support_docs: values.files,
                };
            editFarm(body);
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
                <ToggleComponent
                  toggleLabel="Do you own the Land"
                  no="No"
                  yes="Yes"
                  action={() => {
                    null;
                  }}
                  value={values.ownLand}
                  onclick={move}
                />
                <br />
                <br />
                {dynamicForm ? (
                  <Select
                    label="Type of Land Use Agreement"
                    dataSet={agreement}
                    onSelectChange={(e: any) =>
                      setFieldValue("agree", e.target.value)
                    }
                  />
                ) : (
                  <InputFile
                    label="Supporting Documents"
                    disclaimer=""
                    onchange={handleFileUpload}
                    onImageUrlChange={(data: any) =>
                      setFieldValue("files", data)
                    }
                    name="files"
                    icon={<PulsCircleSvg />}
                    uploadLabel="Upload ID"
                  />
                )}
                <br />
                <br />
              </div>
              <FirstButton loads={editFarmLoad} type="Submit" text="Continue" />
            </form>
          )}
        </Formik>
      </div>
    </Onboarding>
  );
};

export default StepFour;
