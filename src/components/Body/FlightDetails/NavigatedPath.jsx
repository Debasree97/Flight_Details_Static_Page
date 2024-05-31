// eslint-disable-next-line no-unused-vars
import React from "react";
import ChevronSVG from "../../../assets/icons/chevronSVG";

const NavigatedPath = () => {
  return (
    <div>
      <div className="flex items-center gap-1.5 h-5">
        {["Home", "Book History", "Flight", "STFL17121182045413"].map(
          (info, i) => (
            <div className="flex items-center gap-1.5" key={info}>
              <p
                className={`text-[13px] leading-[18px] pb-0.5 gap-1 ${
                  i < 3 ? "text-[#5A6573]" : "text-[#1882FF]"
                }`}
              >
                {info}
              </p>
              {i < 3 && (
                <div className="w-4 h-4 flex items-center justify-center">
                  <ChevronSVG />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NavigatedPath;
