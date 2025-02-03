import ListItem from "./ListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect, useContext } from "react";
import DestinationData from "../types/DestinationData";
import { AppContext } from "../App";
import { DOESNT_MATTER } from "../stores/GlobalConstants";

interface ListGroupProps {
  destinationsList: DestinationData[];
}

function ListGroup({ destinationsList }: ListGroupProps) {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<DestinationData[]>(
    destinationsList.slice(0, 10)
  );

  useEffect(() => {
    setItems(destinationsList.slice(0, 10)); // Reset state when someProp changes
    setHasMore(true);
  }, [destinationsList]);

  function fetchData() {
    let length = items.length;
    setItems(destinationsList.slice(0, length + 10));
    setHasMore(items.length < destinationsList.length);
  }

  const month = useContext(AppContext).month;
  return (
    <>
      {destinationsList.length === 0 && (
        <div className="mt-3 text-center">
          <h5>No destinations found</h5>
        </div>
      )}
      {
        <div className="mt-3 text-center">
          <h5>Showing {destinationsList.length} destinations.</h5>
        </div>
      }
      {month != DOESNT_MATTER && (
        <div className="mt-3 destinations-container">
          <h3>Destinations for {month}</h3>
        </div>
      )}
      <div className="destinations-container">
        <InfiniteScroll
          className="list-group list-group-flush"
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<div></div>}
          endMessage={<div className="my-5 text-center">--- 1 ---</div>}
        >
          {items.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              item={item}
              useMonth={month != DOESNT_MATTER}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default ListGroup;
