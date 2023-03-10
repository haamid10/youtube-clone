import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'


// const selectedCategory= "New";
const sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
    direction='row'
    sx={{
      overflowlY:'auto',
      height:{sx: '4%', md: '95%'},
      flexDirection: {md:'column'},
    }}>
      {categories.map((category)=>(
        <button 
        onClick={()=> setSelectedCategory(category.name)}
        className='category-btn'
        style={{background: category.name === selectedCategory && '#FC1503', color: "white",}} key={category.name}>
         
          <span style={{ color:category.name === selectedCategory ? 'whte' : 'red' }}>{category.icon}</span>
         
          <span style={{opacity:  category.name === selectedCategory ? '1': '0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default sidebar
