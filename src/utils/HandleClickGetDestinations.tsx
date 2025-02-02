import { SetStateAction } from "react";
import DestinationWeather from "../stores/DestinationWeather";
import MonthData from "../types/MonthData";
import DestinationWeatherData from "../types/DestinationWeatherData";

export const HandleClickGetDestinations = (
  rainOk: string,
  month: string,
  minimumHighTemp: number,
  maximumHighTemp: number
): SetStateAction<
  {
    destination: string;
    data: { [key: string]: { high_temp: number; rain: number } };
    description: string;
  }[]
> => {
  let destinationsList: {
    destination: string;
    data: MonthData;
    description: string;
  }[] = [];

  function checkRainLevel(numberOfRainDays: number) {
    if (rainOk === "Doesn't Matter") {
      return true;
    } else if (rainOk === "Less Rain") {
      return numberOfRainDays < 10;
    } else if (rainOk === "Some Rain is Ok") {
      return numberOfRainDays < 15;
    } else {
      return numberOfRainDays >= 15;
    }
  }

  let destinations: DestinationWeatherData = {};

  function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledList = shuffle(Object.keys(DestinationWeather));

  for (const destination of shuffledList) {
    if (month === "Doesn't Matter") {
      let months: MonthData = {};
      for (const monthfor of Object.keys(
        DestinationWeather[destination].weather
      )) {
        if (
          DestinationWeather[destination].weather[monthfor].high_temp >=
            minimumHighTemp &&
          DestinationWeather[destination].weather[monthfor].high_temp <=
            maximumHighTemp &&
          checkRainLevel(DestinationWeather[destination].weather[monthfor].rain)
        ) {
          months[monthfor] = DestinationWeather[destination].weather[monthfor];
        }
      }
      if (Object.keys(months).length > 0) {
        destinations[destination] = months;
      }
    } else {
      if (
        DestinationWeather[destination].weather[month].high_temp >=
          minimumHighTemp &&
        DestinationWeather[destination].weather[month].high_temp <=
          maximumHighTemp &&
        checkRainLevel(DestinationWeather[destination].weather[month].rain)
      ) {
        let months: MonthData = {};
        months[month] = DestinationWeather[destination].weather[month];
        destinations[destination] = months;
      }
    }
  }

  for (const destination of Object.keys(destinations)) {
    destinationsList.push({
      destination: destination,
      data: destinations[destination],
      description: DestinationWeather[destination].description,
    });
  }

  return destinationsList;
};
