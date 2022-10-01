import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Convert from './components/Convert';

const getData = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = '' + year + month + '0' + day;
  return today;
};

function App() {
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);

  useEffect(() => {
    const today = getData();

    const fetchData = async () => {
      const dataUsd = await axios.get(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${today}&json`,
      );

      const dataEur = await axios.get(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=${today}&json`,
      );

      const rateUsd = dataUsd.data[0].rate;
      const rateEur = dataEur.data[0].rate;
      setUsdRate(rateUsd);
      setEurRate(rateEur);
    };

    fetchData();
  }, [usdRate, eurRate]);
  return (
    <div>
      <Header usd={usdRate} eur={eurRate} />
      {/* <Convert /> */}
    </div>
  );
}

export default App;
