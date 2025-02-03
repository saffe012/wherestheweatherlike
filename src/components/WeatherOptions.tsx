import WeatherOption from "./WeatherOption";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { SetStateAction, useContext, useState } from "react";
import "../App.css";
import { AppContext } from "../App";
import {
  DOESNT_MATTER,
  LESS_RAIN,
  SOME_RAIN_IS_OK,
} from "../stores/GlobalConstants";

function WeatherOptions() {
  const [month] = useState(DOESNT_MATTER);
  const months = [
    DOESNT_MATTER,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const context = useContext(AppContext);

  //declare event handlers
  const handleMonthChange = (event: {
    target: () => SetStateAction<string>;
  }) => {
    context.month = event.toString();
  };

  const handleRainOkChange = (event: {
    target: () => SetStateAction<string>;
  }) => {
    context.rainOk = event.toString();
  };

  const handleHighTempRangeChange = ({
    min,
    max,
  }: {
    min: number;
    max: number;
  }) => {
    context.minimumHighTemp = min;
    context.maximumHighTemp = max;
  };

  const [rainOk] = useState(DOESNT_MATTER);
  const rainOks = [DOESNT_MATTER, LESS_RAIN, SOME_RAIN_IS_OK];
  let mtClass = window.innerWidth > 500 ? "mt-4" : "mt-1";
  return (
    <>
      <div className="row h-100 justify-content-center align-items-center">
        <div className={"form-group " + mtClass}>
          <h4>
            <span className="label label-default photo-font option-choice">
              Month
            </span>
          </h4>
          <WeatherOption
            key="month"
            selection={month}
            choices={months}
            onChange={handleMonthChange}
            classname="month-dropdown"
          />
        </div>
        <div className="form-group mt-4">
          <h4>
            <span className="label label-default photo-font option-choice">
              Rain Amount
            </span>
          </h4>
          <WeatherOption
            key="rain"
            selection={rainOk}
            choices={rainOks}
            onChange={handleRainOkChange}
            classname="rain-dropdown"
          />
        </div>
      </div>
      <div className="form-group mt-4 text-center">
        <h4 className="avg-ht-label">
          <span className="label label-default photo-font option-choice">
            Average High Temperature (F)
          </span>
        </h4>
        <MultiRangeSlider
          min={-10}
          max={110}
          onChange={handleHighTempRangeChange}
        />
      </div>
    </>
  );
}

export default WeatherOptions;
