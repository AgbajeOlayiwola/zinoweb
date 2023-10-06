import { Dispatch, SetStateAction } from "react";

interface ImageData {
  file: File | Blob;
  upload_preset: string;
}

interface FlashMessage {
  success: (message: { description: string }) => void;
  danger: (message: { description: string }) => void;
}

const uploadImageToCloudinary = async (
  image: File | Blob,
  setFunction: Dispatch<SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  flash: FlashMessage
): Promise<void> => {
  setLoading(true);

  const uploadPreset = "fznurftp"; // Replace with your Cloudinary upload preset

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dkb3vq7ai/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const resdata = await response.json();
      setLoading(false);
      const imageUrl = resdata.url;
      setFunction(imageUrl);
      flash.success({ description: imageUrl });
      return imageUrl;
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (err) {
    setLoading(false);
    flash.danger({ description: "Failed to load image" });
    console.error(err);
  }
};

export default uploadImageToCloudinary;
