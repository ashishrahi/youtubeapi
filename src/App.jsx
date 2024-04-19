import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar/Navbar'
import Feed from './Components/Feed/Feed'
import VideoDetail from './Components/VideoDetail/VideoDetail'
import ChannelDetail from './Components/ChannelDetail/ChannelDetail'
import SearchFeed from './Components/SearchFeed/SearchFeed'


const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>

    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App