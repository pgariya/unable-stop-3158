import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { ArrowLeftIcon ,ArrowRightIcon } from '@chakra-ui/icons'


const links=["https://cdn1.tripoto.com/media/filter/nxxl/img/30751/Image/1665394736_homepage_banner_singapore_copy.jpg",
"https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1665126895_67098315_6056_4dc2_976b_45c23888b05f.gif",
"https://cdn1.tripoto.com/media/filter/nxxl/img/30751/Image/1665394736_homepage_banner_singapore_copy.jpg"
]


const Slider = () => {

let [count,setcount]= useState(0);

console.log(count)

useEffect(() => {

},[count])


return(

<div style={{marginBottom:"250px"}}>

{/* <h1>Slider</h1> */}

<div >
<img src= {links[count]} alt="slide" width='100%' height="400px"></img>
</div>


<div style={{display:"flex" , justifyContent:"space-between" , marginTop:"-200px" }}>
    <button style={{bg:'transparent' , border:'none' ,cursor:'pointer' ,padding:"10px"}}  disabled={count<=1} onClick={() => setcount(count-1) }> <ArrowLeftIcon></ArrowLeftIcon>  </button>
    <button  style={{bg:'transparent'  , border:'none' ,cursor:'pointer' ,padding:"10px"}}  disabled={count>=links.length-1 } onClick={() => setcount(count+1)}> <ArrowRightIcon></ArrowRightIcon> </button>
</div>


</div>


)





}

export default Slider