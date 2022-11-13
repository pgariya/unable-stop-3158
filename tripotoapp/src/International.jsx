import React from 'react'
import { Text,Box, Button } from '@chakra-ui/react'
import axios  from "axios";
import { useState ,useEffect } from 'react'




const International = () => {
    let [data,setdata] = useState([])
    useEffect( () =>{

        axios.get(`https://equal-tortoiseshell-submarine.glitch.me/international`)
        .then( (res) => setdata(res.data))
        .catch((err) => console.log(err))

    },[])

    console.log(data)

  return (
    <Box>


<div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)" ,gap:"20px" }}>

{
    data.map( (el) => <div key={el.id} >


    <Box style={{textAlign:"left",padding:"2px"}}   >
        <img src={el.banner} alt="minful imageee" style={{width:"100%" ,height:"220px" , borderRadius:"10px"}}></img>

        <Text fontSize={18} fontWeight='bold' color='teal' ml={5} > {el.descTitle} </Text>

        <Box display='flex' justifyContent='space-between' mt='-20px' mb='-10px' >
        <Text fontSize={18} fontWeight='bold' color='black' ml={5}> {el.location}</Text>
        <Text fontSize={18} fontWeight='bold' color='black' mr={5} > {el.days} </Text>
        </Box>
        
        <Box display='flex' justifyContent='space-between'>
        <Text fontSize={14} fontWeight='bold'  ml={5}> {el.price} / per person </Text>
        <Button colorScheme='teal' variant='outline' size='md' fontWeight='bold' border='none'bg='teal' color='white' borderRadius='10px' px={10}>Book Now</Button>
        </Box>
        
    </Box>


    </div>)
}

</div>



    </Box>
  )
}

export default International