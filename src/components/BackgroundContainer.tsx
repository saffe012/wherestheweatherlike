import Copyright from "./Copyright";
import SiteTitle from "./SiteTitle";
import WeatherOptions from "./WeatherOptions";
import Button from "./Button";
import { SetStateAction } from "react";
import DestinationData from "../types/DestinationData";

interface BackgroundContainerProps {
  appDestinationsList: DestinationData[];
  count: number;
  handleMonthChange: (event: { target: () => SetStateAction<string> }) => void;
  handleRainOkChange: (event: { target: () => SetStateAction<string> }) => void;
  handleHighTempRangeChange: ({
    min,
    max,
  }: {
    min: number;
    max: number;
  }) => void;
  handleClick: () => void;
}

const BackgroundContainer = ({
  appDestinationsList,
  count,
  handleMonthChange,
  handleRainOkChange,
  handleHighTempRangeChange,
  handleClick,
}: BackgroundContainerProps) => {
  return (
    <div
      className="container background-container"
      style={{
        height: count > 0 ? "80vh" : "100vh",
        minWidth: count > 0 ? "calc(100vw - 15px)" : "100vw",
      }}
    >
      <div>
        <SiteTitle />
        <div className="form-group text-center">
          <WeatherOptions
            handleMonthChange={handleMonthChange}
            handleRainOkChange={handleRainOkChange}
            handleHighTempRangeChange={handleHighTempRangeChange}
          />
        </div>
        <div className="form-group">
          <Button onClick={handleClick}>Get Destinations</Button>
        </div>
        <Copyright
          show={appDestinationsList.length <= 0}
          inBackgroundContainer={true}
        />
      </div>
    </div>
  );
};

export default BackgroundContainer;
