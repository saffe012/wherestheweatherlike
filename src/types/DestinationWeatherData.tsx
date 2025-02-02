type DestinationWeatherData = {
  [key: string]: {
    [key: string]: {
      high_temp: number;
      rain: number;
    };
  };
};

export default DestinationWeatherData;
