// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigatedPath from "./NavigatedPath";
import FlightSchedule from "./FlightSchedule/FlightSchedule";

const FlightDetails = () => {
  return (
    <section className="max-w-[1192px] w-full  ps-6 flex flex-col gap-5">
      <NavigatedPath />
      <FlightSchedule />
    </section>
  );
};

export default FlightDetails;
