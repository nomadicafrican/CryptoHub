import Coin from "./Coin";
function CoinList({coins, ...props}) {
  // for (let coinIndex = 0; coinIndex < coins.length; coinIndex ++ ) {
console.log(props)
  // }
  const coinView = coins?.map((coin) => <Coin key={coin.uuid} coinData={coin}/>)
  

  
  return <div>
 {coinView}
  </div>;
}

export default CoinList;
