import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '1b9b61e3a772c93005fe1304b726a172',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'standard', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Miami"
      unitsLabels={{ temperature: 'f', windSpeed: 'mp/h' }}
      showForecast
    />
  );
};

export default Weather;