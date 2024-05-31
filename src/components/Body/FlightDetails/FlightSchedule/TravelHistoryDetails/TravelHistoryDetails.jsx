// eslint-disable-next-line no-unused-vars
import React, { useMemo } from "react";
import Location from "./Location";
import TimeDateDetails from "./TimeDateDetails";
import AirlineInfo from "./AirlineInfo";

const TravelHistoryDetails = () => {
  const dynamicIndex = useMemo(
    () => Array.from({ length: 7 }, (_, index) => index),
    []
  );
  return (
    <div className="p-4">
      {dynamicIndex.map((item) => (
        <>
          {[0, 3, 6].includes(item) ? <Location index={item} /> : null}
          {[1, 4].includes(item) ? <TimeDateDetails /> : null}
          {[2, 5].includes(item) ? <AirlineInfo index={item} /> : null}
        </>
      ))}
    </div>
  );
};

export default TravelHistoryDetails;
