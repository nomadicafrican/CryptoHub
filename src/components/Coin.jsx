function Coin({coinData}) {
  
  return <div>
 {coinData?.symbol}
 {coinData?.name}
 {coinData?.color}
 {coinData?.iconUrl}
  </div>;
}

export default Coin;
