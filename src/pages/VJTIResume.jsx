import React from "react";
import Resume from "../assets/VJTI_Resume_Template_Rohit.pdf";

const VJTIResume = () => {
  return (
    <div className="w-full h-screen bg-white">
      <iframe
        src={Resume}
        title="Developer Resume"
        className="w-full h-full"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default VJTIResume;
