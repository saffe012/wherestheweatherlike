import DestinationWeather from "../stores/DestinationWeather";
import MonthData from "../types/MonthData";
import DestinationWeatherData from "../types/DestinationWeatherData";
import DestinationData from "../types/DestinationData";
import {
  DOESNT_MATTER,
  LESS_RAIN,
  SOME_RAIN_IS_OK,
} from "../stores/GlobalConstants";

export const HandleClickGetDestinations = (
  rainOk: string,
  month: string,
  minimumHighTemp: number,
  maximumHighTemp: number
): {
  destination: string;
  data: { [key: string]: { high_temp: number; rain: number } };
  description: string;
}[] => {
  let destinationsList: DestinationData[] = [];

  function checkRainLevel(numberOfRainDays: number) {
    if (rainOk === DOESNT_MATTER) {
      return true;
    } else if (rainOk === LESS_RAIN) {
      return numberOfRainDays < 10;
    } else if (rainOk === SOME_RAIN_IS_OK) {
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

  // shuffle list so that not always the same destinations are displayed first
  const shuffledList = shuffle(Object.keys(DestinationWeather));
  for (const destination of shuffledList) {
    if (month === DOESNT_MATTER) {
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
      // destiantion has at least one month that meets the criteria
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
