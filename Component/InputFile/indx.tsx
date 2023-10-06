import React, { useState } from "react";
import styles from "./styles.module.css";
import SolarCamera from "../SVGS/solarCamera";
import uploadImageToCloudinary from "@/utils/uploadtocloudinary";
const InputFile = ({
  onImageUrlChange,
  label,
  onchange,
  icon,
  uploadLabel,
  disclaimer,
  name,
}: {
  onImageUrlChange?: any;
  label?: string;
  onchange?: any;
  icon?: any;
  uploadLabel?: any;
  disclaimer?: string;
  name?: string;
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event: any) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    if (selectedImage) {
      setLoading(true);
      try {
        await uploadImageToCloudinary(selectedImage, setImageUrl, setLoading, {
          success: (message: any) => {
            console.log(message.description);
            onImageUrlChange(message.description);
          },
          danger: (message: any) => {
            console.error(message.description);
          },
        });

        if (imageUrl) {
          // Use the imageUrl in your component as needed
          console.log("Image URL:", imageUrl);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className={styles.inputFile}>
      <div className={styles.lblDiclaimr}>
        <p className={styles.labelP}>{label}</p>
        {disclaimer === "" ? (
          <p></p>
        ) : (
          <p className={styles.disclaim}>{disclaimer}</p>
        )}
      </div>
      <label className={styles.label}>
        {imageUrl ? (
          <div>
            <img src={imageUrl} alt="Selected Image" />
            <input
              accept=""
              name={name}
              type="file"
              onChange={handleImageChange}
            />
            {loading && <p>Uploading...</p>}
            <p className={styles.upload}>{uploadLabel}</p>
          </div>
        ) : (
          <>
            <input
              accept=""
              name={name}
              type="file"
              onChange={handleImageChange}
            />
            {loading && <p>Uploading...</p>}
            {icon}
            <p className={styles.upload}>{uploadLabel}</p>
          </>
        )}
      </label>

      <style jsx>{`
        .custom-file-input {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        img {
          max-width: 100%;
          max-height: 200px; // Adjust the maximum image height as needed
        }
      `}</style>
    </div>
  );
};

export default InputFile;
