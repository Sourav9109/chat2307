import React from "react";
import RegistationLeft from "../../components/RegistationLeft";
import Registationright from "../../components/RegistationComponents/Registationright";

const Registation = () => {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <RegistationLeft />
        <Registationright />
      </div>
    </>
  );
};

export default Registation;
