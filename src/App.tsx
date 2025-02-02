import Button from "./components/Button";
import WeatherOptions from "./components/WeatherOptions";
import ListGroup from "./components/ListGroup";
import { SetStateAction, useState } from "react";
import "./App.css";
import FontImport from "./components/FontImport";
import SiteTitle from "./components/SiteTitle";
import { HandleClickGetDestinations } from "./utils/HandleClickGetDestinations";
import MonthData from "./types/MonthData";

let month = "Doesn't Matter";
let minimumHighTemp = -10;
let maximumHighTemp = 110;
let rainOk = "Doesn't Matter";

function App() {
  //declare state variables
  const [count, setCount] = useState(0);
  const [appDestinationsList, setAppDestinationsList] = useState<
    { destination: string; data: MonthData; description: string }[]
  >([]);

  //declare event handlers
  const handleMonthChange = (event: {
    target: () => SetStateAction<string>;
  }) => {
    month = event.toString();
  };
  const handleHighTempRangeChange = ({
    min,
    max,
  }: {
    min: number;
    max: number;
  }) => {
    minimumHighTemp = min;
    maximumHighTemp = max;
  };
  const handleRainOkChange = (event: {
    target: () => SetStateAction<string>;
  }) => {
    rainOk = event.toString();
  };
  const handleClick = () => {
    setCount(count + 1);
    setAppDestinationsList(
      HandleClickGetDestinations(
        (rainOk = rainOk),
        (month = month),
        (minimumHighTemp = minimumHighTemp),
        (maximumHighTemp = maximumHighTemp)
      )
    );
  };

  return (
    <>
      <head>
        <FontImport />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <div
        className="container background-container"
        style={{
          height: count > 0 ? "80vh" : "100vh",
          minWidth: count > 0 ? "calc(100vw - 15px)" : "100vw",
          overflowX: "hidden",
        }}
      >
        <div>
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
            {appDestinationsList.length <= 0 && (
              <p className="photo-font copyright">
                ©2025 Matthew Saffert. All rights reserved.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="form-group">
        {count > 0 && (
          <div>
            <ListGroup destinationsList={appDestinationsList} month={month} />
          </div>
        )}
      </div>
      {appDestinationsList.length > 0 && (
        <div className="form-group mt-4 content-div">
          <p className="copyright">
            ©2025 Matthew Saffert. All rights reserved.
          </p>
        </div>
      )}
    </>
  );
}

export default App;
