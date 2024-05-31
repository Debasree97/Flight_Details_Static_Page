// eslint-disable-next-line no-unused-vars
import React from "react";
import EllipseIcon from "../../../../../assets/icons/ellipseIcon";
import LocationPinSVG from "../../../../../assets/icons/locationPinSVG";
import { airpart, destination, terminalNo } from "./utils";

const Location = ({ index = 0 }) => {
  return (
    <div className="flex gap-3 items-center h-12 py-1 border-y border-white">
      <LocationIcon index={index} />
      <LocationInfo index={index} />
    </div>
  );
};

export default Location;

const LocationIcon = ({ index }) => {
  return (
    <div className="flex flex-col items-center justify-center w-8 h-9">
      <LocationPinSVG index={index} />
      <EllipseIcon index={index} />
    </div>
  );
};

const LocationInfo = ({ index }) => {
  return (
    <div
      className={`flex items-center justify-between grow h-10 px-4 pt-2.5 pb-3 gap-2 rounded-md text-[13px] leading-[18px]  ${
        index === 3 ? "bg-[#E8F3FF]" : "bg-[#F5F7FA]"
      }`}
    >
      <p className="font-[475] text-[#1A2B3D]">{destination(index)}</p>
      <p className="text-[#5A6573]">
        <span className="font-[475]">{terminalNo(index)}</span>
        <span>{airpart(index)}</span>
      </p>
    </div>
  );
};
