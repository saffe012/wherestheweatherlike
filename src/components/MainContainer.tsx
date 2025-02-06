import Copyright from "./Copyright";
import SiteTitle from "./SiteTitle";
import WeatherOptions from "./WeatherOptions";
import Button from "./Button";
import { AppContext } from "../App";
import { useContext } from "react";
import { HandleClickGetDestinations } from "../utils/HandleClickGetDestinations";

interface MainContainerProps {
  countState: [number, React.Dispatch<React.SetStateAction<number>>];
}

const MainContainer = ({ countState }: MainContainerProps) => {
  const context = useContext(AppContext);
  const count = context.count;

  const handleClick = () => {
    countState[1]((context.count += 1)); // updates the state of the app to display changes
    // update destinations list based on user input
    context.appDestinationsList = HandleClickGetDestinations(
      context.rainOk,
      context.month,
      context.minimumHighTemp,
      context.maximumHighTemp
    );
  };

  return (
    <div
      className="container background-container"
      style={{
        // Adjust height and width based on the length of appDestinationsList
        height: context.appDestinationsList.length > 0 ? "80vh" : "100vh",
        minWidth:
          context.appDestinationsList.length > 0
            ? "calc(100vw - 15px)"
            : "100vw",
      }}
    >
      <div>
        <SiteTitle />
        <div className="form-group text-center">
          {/* Different weather options dropdowns/slider */}
          <WeatherOptions />
        </div>
        <div className="form-group">
          {/* Button to get destinations */}
          <Button onClick={handleClick}>Get Destinations</Button>
        </div>

        {/* Display message if no destinations are found */}
        {context.appDestinationsList.length <= 0 && count > 0 && (
          <div className="mt-3">
            <h4 className="no-points-message">No destinations found</h4>
          </div>
        )}

        <Copyright
          show={context.appDestinationsList.length <= 0}
          inMainContainer={true}
        />
      </div>
    </div>
  );
};

export default MainContainer;
