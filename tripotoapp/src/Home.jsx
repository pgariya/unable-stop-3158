import { Container ,Box, Flex, Spacer ,Image, Center ,Input ,InputRightElement ,Text,InputGroup ,Stack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BudgetTour from './BudgetTour'
import CardSlider from './CardSlider'
import IndiaPlaces from './IndiaPlaces'
import MindfulRetreat from './MindfulRetreat'
import Partnership from './Partnership'
import Slider from './Slider'


const Home = () => {
  return (
    <Box>

           {/* backgroundImage */}
<Box backgroundImage="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" h="350px">
<Stack>
<h1 style={{color:'white',margin:"40px 0px"}}> India's Largest Community of Travellers</h1>

<input type="text" placeholder='Search For Hotels,destination' 
style={{width:"40%" ,margin:"auto",fontSize:"15px" ,padding:"12px 15px" ,borderRadius:"10px"}}/>
</Stack>
  </Box>



<Container w="80%" border="2px solid red" margin="auto"  >


<Flex my={20}>
<Box  >  <Link to='/mindfulPage'>
<Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" alt="p1" w="100%"/>
</Link>  </Box>
<Spacer/>
<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" alt="p2" w="100%" /></Box>
<Spacer/>

<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" alt="p3" w="100%" /></Box>
<Spacer/>
<Box > <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" alt="p4"  w="100%"/></Box>
</Flex>


                {/* Partnership section */}
<Partnership/>



            {/* slider section */}
<Slider/>




<Text fontSize={30} fontWeight='bold' textAlign='left'>Find Best Places to Visit in India in November & December</Text>
      {/* India section */}
      <IndiaPlaces/>



<Box>
  <Image src='https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956480_rajasthan_1.jpg' alt='india group' width='100%'/>
</Box>


                {/* card slider */}
                <CardSlider/>


                <Box>
  <Image src='https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956495_indonesia_1.jpg' alt='india group' width='100%' mt='220px'/>
</Box>



<Text fontSize={30} fontWeight='bold' textAlign='left'>Book Budget Tour Packages Curated For You</Text>
        {/* Budget tour packages */}

<BudgetTour/>


<Text fontSize={30} fontWeight='bold' textAlign='left'>Travel and Learn with Tripoto's Mindful Retreats</Text>
          {/* Mindful Retreat.. */}
<MindfulRetreat/>






</Container>


    </Box>
  )
}

export default Home