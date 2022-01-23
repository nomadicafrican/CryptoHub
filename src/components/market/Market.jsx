import react, {useState, useEffect} from 'react'
import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
import CoinList from '../CoinList'
import Coin from '../Coin'
// import  useGetCryptosQuery  from '../../services/cryptoApi'


function Market() {
  var axios = require("axios").default;
  const [data, setData] = useState({}) 




  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'de453e0f69mshfdd43ee1176d07ep17744cjsnb662a76eb448'
    }
  };

useEffect(() => {
  axios.request(options).then(function (response) {
  
	console.log(response.data.data.coins[1].name);
  setData(response.data)
}).catch(function (error) {
	console.error(error);
});
}, []);
const globalStats = data?.data
console.log(globalStats)

  // const {data, isFetching} = useGetCryptosQuery();
  const {Title} = Typography
  return <div>
    <>
    <Title level={2} className='heading'>Global Crypto Market</Title>
    <Row>
      <Col>
      <Row gutter={[32, 32]}>
        
        <Col span={12}><Statistic title="Total Cryptocurrencies" />< CoinList title='Name'coins={globalStats?.coins}/> </Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  />< CoinList coins={globalStats?.coins}/> </Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  />< CoinList coins={globalStats?.coins}/> </Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  />< CoinList coins={globalStats?.coins}/> </Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies"  />< CoinList coins={globalStats?.coins}/> </Col>
      </Row>
      </Col>
    </Row>
    </>
  </div>;
}

export default Market;
