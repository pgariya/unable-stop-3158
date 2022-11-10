import { Container ,Box, Flex, Spacer ,Image, Center ,Input ,InputRightElement ,Text,InputGroup ,Stack} from '@chakra-ui/react'
import React from 'react'

import Partnership from './Partnership'


const Home = () => {
  return (
    <Box>


<Box backgroundImage="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" h="350px">

<Stack>
<h1  style={{color:'white',margin:"40px 0px"}}>India's Largest Community of Travellers</h1>

<input type="text" placeholder='Search For Hotels,destination' 
style={{width:"40%" ,margin:"auto",fontSize:"15px" ,padding:"12px 15px" ,borderRadius:"10px"}}/>
</Stack>

  </Box>








<Container w="70%" border="2px solid red" margin="auto"  h="1000px">



<Flex my={20}>

<Box  > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" alt="p1" w="100%"/> </Box>
<Spacer/>


<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" alt="p2" w="100%" /></Box>
<Spacer/>

<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" alt="p3" w="100%" /></Box>
<Spacer/>

<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" alt="p4"  w="100%"/></Box>



</Flex>




<Partnership/>




</Container>





    </Box>
  )
}

export default Home