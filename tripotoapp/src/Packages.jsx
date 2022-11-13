import React from 'react'
import { Box ,Text,Input ,Stack} from '@chakra-ui/react'
import MindfulRetreat from './MindfulRetreat'
import Domestic from './Domestic'
import International from './International'

const Packages = () => {
  return (
    <div >


<Box backgroundImage="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg " h="350px">

<Stack>
<h1 style={{color:'white',margin:"40px 0px"}}> India's Largest Community of Travellers</h1>

<input type="text" placeholder='Search For Hotels,destination' 
style={{width:"40%" ,margin:"auto",fontSize:"15px" ,padding:"12px 15px" ,borderRadius:"10px"}}/>
</Stack>

</Box>

<Box w='75%' margin='auto' mt={30}  textAlign='left' p={30} style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >

<Text fontSize='30px' fontWeight='bold'>Tripoto's Mindful Retreats</Text>


<MindfulRetreat/>

<Text fontSize='30px' fontWeight='bold'>Trending Domestic Packages</Text>

<Domestic/>


<Text fontSize='30px' fontWeight='bold'>Trending International Packages</Text>

<International/>

</Box>





    </div>
  )
}

export default Packages