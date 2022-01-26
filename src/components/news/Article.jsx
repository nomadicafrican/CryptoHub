import './news.css'
function Article(props) {



 return <div>

    

    <div className='article-container'>
    <div className='article-row'>
    <div className='article'>
      <div className='article-data'>
        <p className='article-price'>{props.articleData.title}</p>
        <p className='article-volume'>{props.articleData.source}</p>
        <p className='article-change'>{props.articleData.url}</p>

       

        </div>
      </div>
    </div>
  </div>




 </div> 
}

export default Article;
