import { Box, Stack } from '@chakra-ui/react'
import React from 'react'




const Footer = () => {
  return (
    <Stack w='90%' m='auto' mt={50} border="2px solid black" p={25} bg="black" color='white'  >


<Box display='flex' justifyContent='space-around'  >
    <Box className='foot_hov'>About Tripoto</Box>
    <Box className='foot_hov'>Products</Box>
    <Box className='foot_hov'>Important Travel Links</Box>
    <Box className='foot_hov'>Partner Programs</Box>
</Box>

<Box display='flex' justifyContent='space-around' >
    <Box className='foot_hov'>How it works</Box>
    <Box className='foot_hov'>Tour Packages</Box>
    <Box className='foot_hov'>Goa Tourism</Box>
    <Box className='foot_hov'>Buy Travel Leads</Box>
</Box>
<Box display='flex' justifyContent='space-around' >
    <Box className='foot_hov'>FAQ's</Box>
    <Box className='foot_hov'>Travel Guide</Box>
    <Box className='foot_hov'>Dubai Tourism</Box>
    <Box className='foot_hov'>Partner with us</Box>
</Box>
<Box display='flex' justifyContent='space-around' >
    <Box className='foot_hov'> Privacy Policy </Box>
    <Box className='foot_hov'>Trips & Itineraries</Box>
    <Box className='foot_hov'>Singapore Tourism</Box>
    <Box className='foot_hov'> Earn Credits</Box>
</Box>
<Box display='flex' justifyContent='space-around' >
    <Box className='foot_hov'>Career</Box>
    <Box className='foot_hov'>Place to Visit</Box>
    <Box className='foot_hov'>Manali Tourism</Box>
    <Box className='foot_hov'>Import Blog To Itinerary</Box>
</Box>
<Box display='flex' justifyContent='space-around' >
    <Box className='foot_hov'>About Tripoto</Box>
    <Box className='foot_hov'>Products</Box>
    <Box className='foot_hov'>Important Travel Links</Box>
    <Box className='foot_hov'>Partner Programs</Box>
</Box>




    </Stack>
  )
}

export default Footer