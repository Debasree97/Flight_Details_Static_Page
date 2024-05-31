// eslint-disable-next-line no-unused-vars
import React from "react";

const EllipseIcon = ({ index }) => {
  return (
    <div
      className={`mt-[-2.8px] w-2 h-1 rounded-full ${
        index === 6 ? "bg-[#1882FF]" : "bg-[#9BA6B2]"
      } opacity-50 z-0`}
    ></div>
  );
};

export default EllipseIcon;
