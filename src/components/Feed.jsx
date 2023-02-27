import React from 'react'
import {Box , Stack, Typography} from '@mui/material'
import { Sidebar } from '.'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx:'column' ,md: 'row'}}}>
      <Box 
      sx={{
        height: {sx: 'auto', md: '92vh'}
        ,borderRight: '1px solid #3d3d3d', px:{sx:0 ,md:0 }}}>
      <Typography className='copyright'
      variant='body2' sx={{ mx: 1.5, color: '#fff'}}>
        <Sidebar/>
       copyright 2023 haamid apdi
      </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
