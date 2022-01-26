import react, { useState, useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import CoinList from "../coin/CoinList";
import Coin from "../coin/Coin";
import "../market/market.css";
// import  useGetCryptosQuery  from '../../services/cryptoApi'

 export default function Market() {
  var axios = require("axios").default;
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "de453e0f69mshfdd43ee1176d07ep17744cjsnb662a76eb448",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response?.data?.data?.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const { Title } = Typography;
  console.log(data);
  const coins = data.map((coin) => {
    return <Coin coinData={coin} key={coin.uuid}></Coin>;
  });
  const searchCoins = filteredCoins.map((coin) => (
    <Coin coinData={coin} key={coin.uuid} />
  ));
  console.log(columns);

  const submitHandler = (event) => {
    event.preventDefault();
    const filteredCoins = data.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCoins(filteredCoins);
    console.log(filteredCoins);
    console.log("hello");
  };

  return (
    <div className="coin-app">
      <Title center="center" level={1} className="heading">
        Global Crypto Market
      </Title>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form onSubmit={submitHandler}>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.length > 0 ? searchCoins : coins}
    </div>
  );
}
