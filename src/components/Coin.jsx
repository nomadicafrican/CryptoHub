import './coins.css'
import millify from 'millify';
import { usEffect } from 'react'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';

function Coin(props) {
useEffect(() => {
  Aos.init()
})
 const marketCap = props.coinData?.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 const price = millify(props.coinData.price)
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className='coin-container'>
    <div className='coin-row'>
      <div className='coin'>
        <img width="30%" src={props.coinData.iconUrl} alt='crypto' />
        <h1>{props.coinData.name}</h1>
        <p className='coin-symbol'>{props.coinData.symbol}</p>
      </div>
      <div className='coin-data'>
        <p className='coin-price'>${millify(props.coinData.price)}</p>
        <p className='coin-volume'>${marketCap}</p>
        <p className='coin-change'>{props.coinData.change}%</p>

        {props.coinData.change< 0 ? (
          <p className='coin-percent red'>{props.coinData.change}%</p>
        ) : (
          <p className='coin-percent green'>{props.coinData.change}%</p>
        )}

        
      </div>
    </div>
  </div>



    //  <tr>
    //   <td >{props.coinData?.symbol}</td>
    //   <td className='text-align-center'>{props.coinData?.name}</td>
    //   <td>
    //     <img src={props.coinData.iconUrl} width='30'/>
        
    //   </td>
    //   <td >${marketCap}</td>
    //   <td>${props.coinData?.price}</td>
    //   <td>{props.coinData?.rank}</td>
    // </tr>
    
  );
}

export default Coin;
