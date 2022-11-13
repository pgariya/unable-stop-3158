import { Box ,Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {Button} from "@chakra-ui/react"


import { ArrowLeftIcon ,ArrowRightIcon } from '@chakra-ui/icons'


let links=["https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951500_1509083176_1509083171_novvac4.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951251_1666091756_unwto_invites_applications_for_best_tourism_villages_2022.jpeg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951543_1538757486_loi_krathong_fall_in_thailand_57ba337b5f9b58cdfd1c227d.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284174_1638860409_photo_1459600661907_3c72c54955de.jpeg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951409_1654136098_chinatown_mural_art.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952031_1637516919_img_8593.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1667295904_1667295717_cover.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952347_1530305529_things_to_do_bali_seminyak_beach.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952232_1497713847_1497713760_1497713620_1487015692_1487015673_12183714455_1d32a16b9d_k.jpg",
"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952396_1649079410_tom_bixler_cskl8pq33mi_unsplash.jpg"];


const CardSlider = () => {
    let [count1,setcount1]=useState(0)
    console.log(count1)
   return (
    <div>
<Text fontSize={30} fontWeight='bold' textAlign='left'>Plan You Next International Trip During November & December</Text>


        <Box  height="350px" display="grid"  gridTemplateColumns="repeat(4,1fr)" gap="10px" textAlign='left'>
        <Box>
            <img style={{width:"100%", height:"220px",borderRadius:"10px" }} src={links[count1+1]} alt="good" />
             <h3>Best Scuba Diving Spots In Indonesia</h3>

        </Box>
        <Box>
            <img style={{width:"100%", height:"220px" ,borderRadius:"10px" }} src={links[count1+2]} alt="good" />
            <h3>Best Scuba Diving Spots In Indonesia</h3>
        </Box><Box>
            <img style={{width:"100%", height:"220px" , borderRadius:"10px"}} src={links[count1+3]} alt="good" />
            <h3>Best Scuba Diving Spots In Indonesia</h3>
        </Box><Box>
            <img style={{width:"100%", height:"220px" , borderRadius:"10px"}} src={links[count1+4]} alt="good" />
            <h3>Best Scuba Diving Spots In Indonesia</h3>
        </Box>
        </Box>

<Box display='flex' justifyContent='space-between' mt='-250px' zIndex={2}>
    
<Box  textAlign='left'>
        <Button bg='transparent' color="white" border='none' cursor='pointer' disabled={count1<1} onClick={()=>setcount1(count1-1)}  > <ArrowLeftIcon></ArrowLeftIcon> </Button>
        </Box>
        <Box textAlign='right'>
        <Button bg='transparent' color="white" border='none' cursor='pointer' disabled={count1>links.length-7} onClick={()=>setcount1(count1+1)}  > <ArrowRightIcon></ArrowRightIcon></Button>
        </Box>

</Box>



    </div>
  )
}

export default CardSlider