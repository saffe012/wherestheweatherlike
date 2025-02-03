import Copyright from "./Copyright";
import SiteTitle from "./SiteTitle";
import WeatherOptions from "./WeatherOptions";
import Button from "./Button";
import { AppContext } from "../App";
import { useContext } from "react";
import { HandleClickGetDestinations } from "../utils/HandleClickGetDestinations";

interface BackgroundContainerProps {
  countState: [number, React.Dispatch<React.SetStateAction<number>>];
}

const BackgroundContainer = ({ countState }: BackgroundContainerProps) => {
  const context = useContext(AppContext);
  const count = context.count;

  const handleClick = () => {
    context.count += 1;
    countState[1](count + 1);
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
          <WeatherOptions />
        </div>
        <div className="form-group">
          <Button onClick={handleClick}>Get Destinations</Button>
        </div>

        {context.appDestinationsList.length <= 0 && count > 0 && (
          <div className="mt-3">
            <h4 className="no-points-message">No destinations found</h4>
          </div>
        )}

        <Copyright
          show={context.appDestinationsList.length <= 0}
          inBackgroundContainer={true}
        />
      </div>
    </div>
  );
};

export default BackgroundContainer;
