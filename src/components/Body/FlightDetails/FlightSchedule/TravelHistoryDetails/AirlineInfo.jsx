// eslint-disable-next-line no-unused-vars
import React from "react";
import PlaneSVG from "../../../../../assets/icons/planeSVG";

const AirlineInfo = ({ index }) => {
  return (
    <div className="flex gap-3  items-stretch">
      <Airplane />
      <div className="grow flex flex-col gap-4 py-4">
        <FlightNo />
        {index == 2 && <Alert />}
      </div>
    </div>
  );
};

export default AirlineInfo;

const Airplane = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <hr className="w-0.5 bg-[#D8E1EB] rounded-[1px] grow" />
      <div className="size-8 p-2 ">
        <PlaneSVG />
      </div>
      <hr className="w-0.5 bg-[#D8E1EB] rounded-[1px] grow" />
    </div>
  );
};

const FlightNo = () => {
  return (
    <div className="grow">
      <div className="flex gap-3 h-10  items-center justify-center">
        {[
          "Turkish Airlines/Flight no : TUR467",
          "Airbus Industrie 737-800-738/Class : ECONOMY-Y (O)",
          " /",
        ].map((info, index) => {
          const infoSplit = info.split("/");
          const classInfo = infoSplit[1].split(":");
          return (
            <div
              key={info}
              className="max-w-[246.67px] w-full text-sm leading-[18px]"
            >
              <p
                className={` text-[#3E4957] ${
                  index === 0 ? "font-[475]" : "font-normal"
                }`}
              >
                {infoSplit[0]}
              </p>
              <p className="text-[#5A6573] pt-0.5">
                <span>{classInfo[0]}</span> :{" "}
                <span
                  className={`${index === 1 ? "font-[475]" : "font-normal"} `}
                >
                  {classInfo[1]}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Alert = () => {
  return (
    <div className="h-[52px] flex gap-2 bg-[#FFEEDB] border border-[#FFE1C2] items-center py-2 px-3 rounded-md">
      <div className="size-5 flex items-center justify-center">
        <AlertIcon />
      </div>
      <div className="text-xs text-[#3E4957] text-justify	grow">
        Technical stoppage at Malpensa International Airport (Milano). Before
        booking this flight please check your visa requirements as per your
        nationality
      </div>
    </div>
  );
};

const AlertIcon = () => {
  return (
    <div className="size-[16.67px] rounded-full bg-[#F27D00] ">
      <div className="text-[9.58px] font-semibold text-white flex items-center justify-center">
        !
      </div>
    </div>
  );
};
