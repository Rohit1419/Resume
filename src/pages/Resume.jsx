import React from "react";
import Resume from "../assets/Web_Developer_Resume__Rohit.pdf";

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
