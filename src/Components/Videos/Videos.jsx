import { Stack,Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from '../ChannelCard/ChannelCard'
import PropTypes from 'prop-types';

const Videos = ({videos,direction}) => {

  if(!videos?.length) return 'Loading...';
    console.log(videos);
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item,idx)=>
            <Box key={idx}>
               {item.id.videoId && <VideoCard video={item}/>}
               {item.id.channelId && <ChannelCard channelDetail={item}/>}

            </Box>
        )}
        
        </Stack>
  )
}

Videos.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.number),
    direction: PropTypes.string,
  };
export default Videos