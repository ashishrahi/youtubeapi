import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl,demoVideoTitle,demoVideoUrl,demoChannelTitle } from "../../Utilities/contants"
import PropTypes from 'prop-types';


const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log(videoId,snippet)
        
  return (
    <Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:'0'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia
         image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
         alt={snippet?.title}
         sx={{width:{xs:'100%',sm:'358px',md:'320px'},
         height:180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0,60) ||
             demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelTitle}>
          <Typography variant="subtitle2" fontWeight='bold' color='gray'>
            {snippet?.channelTitle.slice(0,60) ||
             demoChannelTitle.slice(0,60)}
             <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
          </Typography>
        </Link>
        </CardContent>
          
        </Card>
  )
}

VideoCard.propTypes = {
    video:PropTypes.arrayOf(PropTypes.number),
    CardMedia:PropTypes.arrayOf(PropTypes.number),

    
  };

export default VideoCard