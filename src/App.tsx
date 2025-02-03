import { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import BackgroundContainer from "./components/BackgroundContainer";
import React from "react";
import { DOESNT_MATTER } from "./stores/GlobalConstants";

// Creating a context object
export const AppContext = React.createContext({
  month: DOESNT_MATTER,
  minimumHighTemp: -10,
  maximumHighTemp: 110,
  rainOk: DOESNT_MATTER,
  count: 0,
  appDestinationsList: [] as {
    destination: string;
    data: { [key: string]: { high_temp: number; rain: number } };
    description: string;
  }[],
});

function App() {
  const countState = useState(0);

  return (
    <>
      <BackgroundContainer countState={countState} />
      <ListContainer />
    </>
  );
}

export default App;
