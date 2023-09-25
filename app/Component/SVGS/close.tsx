import React from "react";

const Close = ({ action }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onClick={action}>
      <path d="M10 30L30 10M10 10L30 30" stroke="#221C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Close;
