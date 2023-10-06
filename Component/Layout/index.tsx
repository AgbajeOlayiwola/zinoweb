import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
