import WeatherOption from "./WeatherOption";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import { useState } from "react";
import "../App.css";

interface WeatherOptionsProps {
  handleMonthChange: (event: any) => void;
  handleHighTempRangeChange: (event: any) => void;
  handleRainOkChange: (event: any) => void;
}

function WeatherOptions({
  handleMonthChange,
  handleHighTempRangeChange,
  handleRainOkChange,
}: WeatherOptionsProps) {
  const [month] = useState("Doesn't Matter");
  const months = [
    "Doesn't Matter",
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

  const [rainOk] = useState("Doesn't Matter");
  const rainOks = ["Doesn't Matter", "Less Rain", "Some Rain is Ok"];
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
