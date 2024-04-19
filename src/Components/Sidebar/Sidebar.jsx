import { Stack } from "@mui/material"
import { categories } from "../../Utilities/contants"
import PropTypes from 'prop-types';


const Sidebar = ({selectedCategory,setSelectedCategory}) => 
  (
    <Stack 
    direction='row' 
    sx={{
      overflow:'auto',
      height: { sx: "auto", md: "95%" },
      flexDirection:{md:'column'}
    
    }}>
{categories.map((category)=>(
    <button 
    onClick={()=>setSelectedCategory(category.name)}
    className="category-btn"
    style={{ background:category.name === selectedCategory && '#FC1503' ,color:'white'}}
    key={category.name}
    >
    <span style={{color:category.name === selectedCategory ? 'white':'red',marginRight:'15px'}}>
    {category.icon}
    </span>
    <span style={{opacity:category.name === selectedCategory ?'1':'0.8'}}>
    {category.name}
    </span>

    </button>
))} 
    </Stack>
  )

  Sidebar.propTypes = {
    videos:PropTypes.arrayOf(PropTypes.number),
    selectedCategory:PropTypes.string,
    setSelectedCategory:PropTypes.func,
    
  };

export default Sidebar