// eslint-disable-next-line no-unused-vars
import React from "react";
import VectorSVG from "../../../../../assets/icons/vectorSVG";

const TimeDateDetails = () => {
  return (
    <div className="h-[58px] pt-3 flex items-center gap-3">
      <Vector />
      <TravelTime />
    </div>
  );
};

export default TimeDateDetails;

const Vector = () => {
  return (
    <div className="size-8 p-2">
      <VectorSVG />
    </div>
  );
};

const TravelTime = () => {
  return (
    <div className="flex gap-3 h-[46px] grow">
      {[
        "DAC - DXB/12 hr 20 min",
        "07:30 PM/28 Mar, Friday",
        "08:50 AM/29 Mar, Saturday",
      ].map((info) => {
        const infoSplit = info.split("/");
        return (
          <div key={info} className="max-w-[246.67px] w-full ">
            <p className="leading-6 text-[16px] font-semibold text-[#1A2B3D]">
              {infoSplit[0]}
            </p>
            <p className="text-sm leading-5 text-[#5A6573]">{infoSplit[1]}</p>
          </div>
        );
      })}
    </div>
  );
};
