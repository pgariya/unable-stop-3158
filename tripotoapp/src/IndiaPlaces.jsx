import { Box, Image ,Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const IndiaPlaces = () => {

    let [data,setdata] = useState([])

    useEffect(() =>{

        axios.get(`https://avdhoot-fake-api.herokuapp.com/india`)
        .then( (res) => setdata(res.data))
        .catch((err) => console.log(err))

    },[])


    // {console.log(data)}
  return (
    <Box display='grid' gridTemplateColumns='repeat(4,1fr)' gap={20}>
        
{
   
   data.map((el) => <Box key={el.id} textAlign='left'>

<Image src={el.image} w='100%' h='220px' borderRadius='10px'></Image>

<Text fontSize={22} fontWeight='bold'>{el.title}</Text>

<Text fontSize={15} color='teal' fontWeight='bold'> By : {el.by}</Text>

   </Box>)



}







    </Box>
  )
}

export default IndiaPlaces