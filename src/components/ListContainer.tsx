import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import DestinationData from "../types/DestinationData";

interface ListContainerProps {
  appDestinationsList: DestinationData[];
  month: string;
  count: number;
}

const ListContainer = ({
  appDestinationsList,
  month,
  count,
}: ListContainerProps) => {
  return (
    <div>
      <div className="form-group">
        {count > 0 && (
          <div>
            <ListGroup destinationsList={appDestinationsList} month={month} />
          </div>
        )}
      </div>
      <Copyright
        show={appDestinationsList.length > 0}
        inBackgroundContainer={false}
      />
    </div>
  );
};

export default ListContainer;
