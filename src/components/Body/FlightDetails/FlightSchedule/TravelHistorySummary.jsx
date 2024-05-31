// eslint-disable-next-line no-unused-vars
import React from "react";

const TravelHistorySummary = () => {
  return (
    <div className="flex  h-[76px] border-b border=[#EBF0F5]">
      <div className=" flex items-center justify-center p-5 ">
        <div className="size-6 bg-[#1882FF] rounded-full text-white flex items-center justify-center leading-[18px] font-semibold text-sm">
          1
        </div>
      </div>
      <div className="w-full">
        <div className=" flex grow justify-between ">
          <FlightInfo />
          <FlightDuration />
        </div>
      </div>
    </div>
  );
};

export default TravelHistorySummary;

const FlightInfo = () => {
  return (
    <div className="py-4">
      <div className=" h-11">
        <div className="text-[#1A2B3D] leading-[24px] pb-0.5 font-semibold text-lg">
          DAC → JFK
        </div>
        <div className="flex items-center h-[18px]">
          {["Round Trip", "25 Mar - 4 Apr 2023", "1 Stop"].map((item, i) => (
            <div className="flex items-center gap-0.5" key={item}>
              <p
                className={`text-[13px] leading-4 pb-0.5 gap-1 text-[#5A6573]`}
              >
                {item}
              </p>
              {i < 2 && (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="rounded-full size-[3px] bg-[#9BA6B2]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FlightDuration = () => {
  return (
    <div className="p-5 flex items-center justify-center">
      <div className="flex items-center justify-center w-16 h-[26px] px-2 py-1 bg-[#E8F3FF] font-[475] text-[#1882FF] text-xs rounded-[32px]">
        33h 20m
      </div>
    </div>
  );
};
