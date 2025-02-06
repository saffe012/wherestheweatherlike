import { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import MainContainer from "./components/MainContainer";
import React from "react";
import { DOESNT_MATTER } from "./stores/GlobalConstants";

// context object that holds the state of the app accross all components
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
  // updates the state of the app to display changes when user clicks the search button
  const countState = useState(0);

  return (
    <>
      {/** container that holds the title and query elements */}
      <MainContainer countState={countState} />
      {/** container that holds the results of the query */}
      <ListContainer />
    </>
  );
}

export default App;
