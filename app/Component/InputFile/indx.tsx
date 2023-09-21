import React, { useState } from "react";
import styles from "./styles.module.css";
import SolarCamera from "../SVGS/solarCamera";
const InputFile = ({
  label,
  onChange,
  icon,
  uploadLabel,
  disclaimer,
  name,
}: {
  label: string;
  onChange: any;
  icon: any;
  uploadLabel: any;
  disclaimer: string;
  name: string;
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (onChange) {
      onChange(file);

      // Display the selected image if it's an image file
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          setImageUrl(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImageUrl(null); // Reset the image URL if it's not an image
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
              name={name}
              type="file"
              accept=".jpg, .jpeg, .png, .pdf" // Define accepted file types
              onChange={handleFileChange}
            />
            <p className={styles.upload}>{uploadLabel}</p>
          </div>
        ) : (
          <>
            <input
              name={name}
              type="file"
              accept="" // Define accepted file types
              onChange={handleFileChange}
            />
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
