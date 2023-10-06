import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import styles from "./styles.module.css";

interface OtpInputProps {
  onOtpChange: (otp: string) => void; // Callback function prop
}

const OtpInput = ({
  onOtpChange,
  otpfields,
}: {
  onOtpChange: any;
  otpfields: any;
}) => {
  const otpLength = otpfields;
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(otpLength).fill("")
  );
  const otpInputs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (inputIndex: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[inputIndex] = value;
    setOtpValues(newOtpValues);

    // Concatenate the values to form the OTP string
    const myOtp = newOtpValues.join("");

    // Call the callback function to pass the OTP value to the parent component
    onOtpChange(myOtp);

    if (value && inputIndex < otpLength - 1) {
      const nextInput = otpInputs.current[inputIndex + 1];
      if (nextInput) {
        nextInput.focus(); // Move cursor to the next input if it exists
      }
    }
  };

  const handleInputKeyPress = (
    event: KeyboardEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      handleInputChange(inputIndex, "");

      if (inputIndex > 0) {
        const prevInput = otpInputs.current[inputIndex - 1];
        if (prevInput) {
          prevInput.focus(); // Move cursor to the previous input
        }
      }
    }
  };

  return (
    <div className={styles.divInputs}>
      {otpValues.map((value, index) => (
        <input
          key={index}
          type="password"
          className={styles.otpinput}
          maxLength={1}
          value={value}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleInputKeyPress(e, index)
          }
          ref={(input) => input && (otpInputs.current[index] = input)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
