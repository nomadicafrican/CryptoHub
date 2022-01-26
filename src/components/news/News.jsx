import {useState, useEffect} from "react";
import {axios} from 'axios'
import Article from './Article'


function News() {
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
  
  



  return <div>
     
{articles}

{/* <h1>{response.data}</h1> */}



  </div>;
}

export default News;
