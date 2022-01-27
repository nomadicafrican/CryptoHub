import './news.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Box} from '@mui/material';



export default function Article(props) {
  return (
    // <div data-aos="fade-down-right"
    // data-aos-duration="3000">

<div>
         
           
       
    <Grid marginTop={19}>

    <Box p={3} sx={{ flexDirection: 'row' }}>
   

    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          
          height="240"
          />
          
          
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {props.articleData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.articleData.source}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href= {props.articleData.url}size="small" color="primary">
          View Article
        </Button>
      </CardActions>
    </Card>
          
          </Box>
          </Grid>

</div>
  );
}

// function Article(props) {
  


//  return <div>

    

//     <div className='article-container'>
//     <div className='article-row'>
//     <div className='article'>
//       <div className='article-data'>
//         <p className='article-price'>{props.articleData.title}</p>
//         <p className='article-volume'>{props.articleData.source}</p>
//         <p className='article-change'>{props.articleData.url}</p>

       

//         </div>
//       </div>
//     </div>
//   </div>




//  </div> 
// }

// export default Article;
