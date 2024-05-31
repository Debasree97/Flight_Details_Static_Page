// eslint-disable-next-line no-unused-vars
import React from "react";
import TravelHistoryDetails from "./TravelHistoryDetails/TravelHistoryDetails";
import TravelHistorySummary from "./TravelHistorySummary";

const FlightSchedule = () => {
  return (
    <div className="bg-white max-w-[840px] w-full shadow-[0_2px_8px_0_rgba(0, 0, 0, 0.04)] rounded-lg">
      <TravelHistorySummary />
      <TravelHistoryDetails />
    </div>
  );
};

export default FlightSchedule;
