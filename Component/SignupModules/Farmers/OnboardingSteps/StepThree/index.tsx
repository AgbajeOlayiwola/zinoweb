"use client";
import FirstButton from "@/Component/Buttons/firstButton";
import Inputs from "@/Component/Input";
import InputFile from "@/Component/InputFile/indx";
import Onboarding from "@/Component/Layout/Onboarding";
import PulsCircleSvg from "@/Component/SVGS/pulsCircleSvg";
import Select from "@/Component/Select";
import ToggleComponent from "@/Component/ToggleComponent";
import { useCreateFarmMutation } from "@/reduxtoolkit/api/mutationApi";
import { commodityValue } from "@/utils/data";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import styles from "../../styles.module.css";
const StepThree = ({ step, nextStep }: { step: any; nextStep: any }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [
    createFarm,
    {
      data: createFarmData,
      isLoading: createFarmLoad,
      isSuccess: createFarmSuccess,
      isError: createFarmFalse,
      error: createFarmErr,
      reset: createFarmReset,
    },
  ]: any = useCreateFarmMutation();
  useEffect(() => {
    if (createFarmData) {
      console.log(createFarmData);
      nextStep();
    }
  }, [createFarmSuccess, createFarmData]);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const move = () => {};
  const initSchema = yup.object().shape({
    farm_name: yup.string().required("Farm Name is required"),
    // farm_location: yup.string().required("Enter Farm Location"),
    // farm_video: yup.string().required("Farm video required"),
    cac_reg_num: yup.string().required("CAC Registeration Number is required"),
    commodity_value_chain: yup
      .string()
      .required("Commodity value Chain is required"),
  });
  const initialValues = {
    farm_name: "",
    farm_location: "",
    farm_video: "",
    cac_reg_num: "",
    commodity_value_chain: "",
  };

  return (
    <div>
      <Onboarding steps={step}>
        <div className={styles.onBoardingLayout}>
          <Formik
            validationSchema={initSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              createFarm(values);
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
                      setFieldValue("farm_name", e.target.value)
                    }
                    name="farm_name"
                    value={values.farm_name}
                    type="text"
                    label="Name of farm"
                    placeholder="Enter Your farm name here...."
                  />
                  <br />
                  <br />
                  
                  <Select
                    onSelectChange={(e: any) =>
                      setFieldValue("commodity_value_chain", e.target.value)
                    }
                    label="Commodity Value Chain"
                    dataSet={commodityValue}
                  />
                  <br />
                  <br />
                  <ToggleComponent
                    onchange={(e: any) =>
                      setFieldValue("cac_reg_num", e.target.value)
                    }
                    onclick={move}
                    name="cac_reg_num"
                    toggleLabel="CAC Registration"
                    hasTextField={true}
                    no=""
                    yes=""
                    action={move}
                  />
                  <br />
                  <br />
                  <Inputs
                        onchange={(e: any) =>
                          setFieldValue("Farm Location", e.target.value)
                        }
                        name="farm_location"
                        value={values.farm_location}
                        type="text"
                        label="Farm Location"
                        placeholder="Text here...."
                      />
                      <br />
                      <br />
                
                  <InputFile
                    label="Farm Video"
                    disclaimer="(360 degree video recording and upload)"
                    onchange={handleFileChange}
                    icon={<PulsCircleSvg />}
                    uploadLabel="Add file"
                    name="farm_video"
                    onImageUrlChange={(data: any) =>
                          setFieldValue("farm_video", data)
                        }
                  />
                  <br />
                  <br />
                </div>
                <FirstButton
                  loads={createFarmLoad}
                  type="Submit"
                  text="Continue"
                />
              </form>
            )}
          </Formik>
        </div>
      </Onboarding>
    </div>
  );
};

export default StepThree;
