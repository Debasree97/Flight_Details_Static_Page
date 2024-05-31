// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import FlightDetails from "./FlightDetails/FlightDetails";

const Body = () => {
  return (
    <main className="flex max-w-[1112px] w-full  py-4 ">
      <Sidebar />
      <FlightDetails />
    </main>
  );
};

export default Body;
