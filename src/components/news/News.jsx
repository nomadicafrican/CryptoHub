import {useState, useEffect} from "react";
import {axios} from 'axios'
import Article from './Article'
import Particles from "react-tsparticles";
import Aos from 'aos'



function News() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  var axios = require("axios").default;
  const [data, setData] = useState([])
  

  

  var options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    params: {
    
      _limit: 100,
      
    },
    headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key': 'de453e0f69mshfdd43ee1176d07ep17744cjsnb662a76eb448'
    }
   
  };
  
  
  useEffect(() => {
    
    axios.request(options)
    .then(function (response) {
      setData(response.data)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  
  
  let articles = data.slice(0,15).map((article) => {
    return <Article articleData={article} key={article.id}></Article>
 })
  
  



  return <div  className="news-div"
  
  >
    <img
        className="headerImg"
        src="https://spectrum.ieee.org/media-library/illustration-of-bitcoin-and-other-types-of-cryptocurrency-floating-on-a-gold-background.jpg?id=25589877&width=1200&coordinates=0%2C31%2C0%2C32&height=600"
        alt=""
      />
   
{articles}

{/* <h1>{response.data}</h1> */}



  </div>;
}

export default News;
