import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'


const selectedCategory= "New";
const sidebar = () => {
  return (
    <Stack
    direction='row'
    sx={{
      overflowlY:'auto',
      height:{sx: 'auto', md: '95%'},
      flexDirection: {md:'column'},
    }}>
      {categories.map((category)=>(
        <button className='category-btn'
        style={{background: category.name === selectedCategory && '#FC1503', color: "white",}} key={category.name}>
          <span style={{ color:category.name === selectedCategory ? 'whte' : 'red' }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default sidebar