import {useState,useEffect} from 'react'
import {Box , Stack, Typography} from '@mui/material'
import { fetchFromAPI, fetchFromAPII } from '../utils/fetchFromApi.js'
import { Sidebar , Vidoes } from '.'

const Feed = () => {

  const [selectedCategory , setSelectedCategory]= useState('New')

   useEffect (()=>{
    fetchFromAPI (`search?part=snippet&q=${setSelectedCategory}`)
   },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: {sx:'column' ,md: 'row'}}}>
      <Box 
      sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      <Typography className='copyright'
      variant='body2' sx={{ mx: 1.5, color: '#fff'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
       copyright 2023 haamidApdi
      </Typography>
      </Box>
     
     
      <Box p={2} sx={{ overflowY: 'auto' , height: '90vh' ,flex: 2}}>
        <Typography variant="h4"
        fontWeight="bold" mb={2} sx={{color: 'white'}}>
          New
          <span style={{ color :'#F31503'}}>Vidoes</span>
        </Typography>
        Vidoes
        <Vidoes/>
     
      </Box>
    </Stack>
  )
}

export default Feed
