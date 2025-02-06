import MonthWeather from "./MonthWeather";
import MonthRainTempData from "../types/MonthRainTempData";
import DestinationData from "../types/DestinationData";
import { BarChart } from "@mui/x-charts/BarChart";

interface ListItemProps {
  index: number;
  item: DestinationData;
  useMonth: boolean;
}

function ListItem({ index, item, useMonth }: ListItemProps) {
  let months: { month: string; data: MonthRainTempData }[] = [];
  let monthsDisplay = [];
  let tempsDisplay = [];
  let rainDisplay = [];

  // prep data for display
  for (const month of Object.keys(item.data)) {
    months.push({
      month: month,
      data: item.data[month],
    });
    /// Display the first one or two letters of the month name
    // two if there are multiple months that start with the same letter
    if (
      month === "May" ||
      month === "July" ||
      month === "January" ||
      month === "April"
    ) {
      monthsDisplay.push(month.substring(0, 2));
    } else {
      monthsDisplay.push(month.substring(0, 1));
    }
    tempsDisplay.push(item.data[month].high_temp);
    rainDisplay.push(item.data[month].rain);
  }

  let barChartwidth = window.innerWidth * 0.85;

  return (
    <li className="list-group-item" key={index}>
      <div className="card-body mb-4">
        <h3 className="card-title mb-3 mt-3 text-start">{item.destination}</h3>
        <p className="destination-description">{item.description}</p>
        <div className={useMonth ? "" : "destinations-container"}>
          <div className="card-text text-start">
            {window.innerWidth < 950 && !useMonth ? (
              <div>
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: monthsDisplay,
                      colorMap: {
                        type: "piecewise",
                        thresholds: [],
                        colors: ["orange"],
                      },
                    },
                  ]}
                  series={[
                    {
                      data: tempsDisplay,
                      label: "High Temp (F)",
                      color: "orange",
                    },
                  ]}
                  width={barChartwidth}
                  height={250}
                  sx={{
                    pointerEvents: "none",
                  }}
                />
                <BarChart
                  yAxis={[{ scaleType: "band", data: monthsDisplay }]}
                  series={[
                    {
                      data: rainDisplay,
                      label: "Average days with precipitation",
                    },
                  ]}
                  width={barChartwidth}
                  height={250}
                  layout="horizontal"
                  sx={{
                    pointerEvents: "none",
                  }}
                />
              </div>
            ) : (
              <div>
                <ul className="list-group list-group-horizontal text-center">
                  {months.slice(0, 4).map((item, index) => (
                    <MonthWeather
                      key={index}
                      index={index}
                      item={item}
                      useMonth={useMonth}
                    />
                  ))}
                </ul>
                <ul className="list-group list-group-horizontal">
                  {months.slice(4, 8).map((item, index) => (
                    <MonthWeather
                      key={index}
                      index={index}
                      item={item}
                      useMonth={useMonth}
                    />
                  ))}
                </ul>
                <ul className="list-group list-group-horizontal">
                  {months.slice(8, 12).map((item, index) => (
                    <MonthWeather
                      key={index}
                      index={index}
                      item={item}
                      useMonth={useMonth}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
