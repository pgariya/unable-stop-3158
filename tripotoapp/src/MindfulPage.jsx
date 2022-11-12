import { Box, Text,Button } from '@chakra-ui/react'
import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const MindfulPage = () => {

  let [data,setdata] = useState([])
  useEffect( () =>{

      axios.get(`https://equal-tortoiseshell-submarine.glitch.me/user`)
      .then( (res) => setdata(res.data))
      .catch((err) => console.log(err))

  },[])

  console.log(data)


  return (
    <Box>

<Box backgroundImage="https://cdn1.tripoto.com/media/transfer/img/1789711/Image/1656336375_offbeat_places_2_1.gif" h="400px"></Box>


<Box width="70%"  margin='auto' textAlign='left' >

<Text fontSize='35px' fontWeight='bold'>Tripoto's Mindful Retreats</Text>
<Text fontSize='20px' color='grey'>Offbeat places, unique properties and interesting activities</Text>
<Text fontSize='20px'>Handcrafted by tripoto. Your meals, stay and activities are included in the price!</Text>

 
    <Box>


<div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" ,gap:"20px" }}>

{
    data.map( (el) => <div key={el.id} >


    <Box style={{textAlign:"left",padding:"2px"}}   >
    <NavLink to={`/mindfulPage/${el.id}`}>
        <img src={el.banner} alt="minful imageee" style={{width:"100%" ,height:"250px" , borderRadius:"10px"}}></img>
   </NavLink>
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


    <Box textAlign='left' mt='80px'>


<Text fontSize='30px' fontWeight='bold'>Frequently Asked Questions (FAQs)</Text>

<Text fontSize='18px' fontWeight='bold'> 1. What are Mindful Retreats?</Text>
<Text fontSize='18px'>Tripoto's latest offering, Mindful Retreats are carefully curated packages that ensure a smooth travel experience away from mainstream and crowded locations. These offbeat getaways go beyond a regular weekend trip and let you experience a location deeply by engaging in immersive activities. Each retreat comes with your stay, meals and activities included in the package. Just pack and go to #FindYourCalm</Text>


<Text fontSize='18px' fontWeight='bold'>2. How can I book?</Text>
<Text fontSize='18px'>Click the retreat you're interested in. Fill the form on the package page and make the payment to book. You can also reach out to the travel experts at Tripoto on this number: 08046162990</Text>


<Text fontSize='18px' fontWeight='bold'> 3.How are Mindful Retreats different from a regular holiday package?</Text>
<Text fontSize='18px'>What makes Tripoto's Mindful Retreats different from any package that you will find listed on the web are its unique range of locations and activities. We proudly curate experiences that you won't find anywhere else, no matter how many 'things to do' pages you scout through. As part of the retreat, your host (a local) will welcome you to their property and make you experience hidden gems and share secrets of the location that you won't find otherwise.</Text>


<Text fontSize='18px' fontWeight='bold'> 4. What do you mean by all-inclusive? What are the inclusions and exclusions?</Text>
<Text fontSize='18px'>Tripoto's latest offering, Mindful Retreats are carefully curated packages that ensure a smooth travel experience away from mainstream and crowded locations. These offbeat getaways go beyond a regular weekend trip and let you experience a location deeply by engaging in immersive activities. Each retreat comes with your stay, meals and activities included in the package. Just pack and go to #FindYourCalm</Text>

<Text fontSize='18px' fontWeight='bold'> 5. What are Mindful Retreats?</Text>
<Text fontSize='18px'>No. We curate mindful, happy and meaningful holidays, and we do it at the best price possible! Instead of offering deals, we believe in getting you the most memorable and quality holiday options.</Text>


<Text fontSize='18px' fontWeight='bold'> 6. What are Mindful Retreats?</Text>
<Text fontSize='18px'>Tripoto's latest offering, Mindful Retreats are carefully curated packages that ensure a smooth travel experience away from mainstream and crowded locations. These offbeat getaways go beyond a regular weekend trip and let you experience a location deeply by engaging in immersive activities. Each retreat comes with your stay, meals and activities included in the package. Just pack and go to #FindYourCalm</Text>


<Text fontSize='18px' fontWeight='bold'> 7. How can I book?</Text>
<Text fontSize='18px'>Click the retreat you're interested in. Fill the form on the package page and make the payment to book. You can also reach out to the travel experts at Tripoto on this number: 08046162990</Text>






</Box>








    </Box>












    </Box>
  )
}

export default MindfulPage