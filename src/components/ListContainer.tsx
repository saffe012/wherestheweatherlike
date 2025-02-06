import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import { AppContext } from "../App";
import { useContext } from "react";

const ListContainer = () => {
  const count = useContext(AppContext).count;
  const appDestinationsList = useContext(AppContext).appDestinationsList;
  return (
    <>
      {/** only dispaly content if there are results in list */}
      {appDestinationsList.length > 0 && (
        <div className="p-card-text">
          <div className="form-group">
            <div>
              <ListGroup destinationsList={appDestinationsList} />
            </div>
          </div>
          <Copyright show={count > 0} inMainContainer={false} />
        </div>
      )}
    </>
  );
};

export default ListContainer;
