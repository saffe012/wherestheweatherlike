import { SetStateAction, useState } from "react";
import "./App.css";
import { HandleClickGetDestinations } from "./utils/HandleClickGetDestinations";
import ListContainer from "./components/ListContainer";
import BackgroundContainer from "./components/BackgroundContainer";
import DestinationData from "./types/DestinationData";

let month = "Doesn't Matter";
let minimumHighTemp = -10;
let maximumHighTemp = 110;
let rainOk = "Doesn't Matter";

function App() {
  //declare state variables
  const [count, setCount] = useState(0);
  const [appDestinationsList, setAppDestinationsList] = useState<
    DestinationData[]
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
      <BackgroundContainer
        appDestinationsList={appDestinationsList}
        count={count}
        handleMonthChange={handleMonthChange}
        handleRainOkChange={handleRainOkChange}
        handleHighTempRangeChange={handleHighTempRangeChange}
        handleClick={handleClick}
      />
      <ListContainer
        appDestinationsList={appDestinationsList}
        month={month}
        count={count}
      />
    </>
  );
}

export default App;
