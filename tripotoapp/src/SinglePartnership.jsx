import { Box ,Image, Input, Stack ,Text ,Select, Checkbox, Button ,Skeleton,SkeletonCircle ,SkeletonText } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'



const SinglePartnership = () => {

    let [data,setdata] = useState([]);
    let [loading,setloading] = useState(false)

    let params= useParams();
    console.log(params)

useEffect( () => {
       setloading(true)
    axios.get(`https://avdhoot-fake-api.herokuapp.com/partnerships/${params.id}`)
    .then( (res) => {   setdata(res.data)  
     setloading(false)  } )
    .catch((err) => console.log(err))


},[])


// console.log(data)

if(loading) {
  return <Box>

<h1 >   ..... loading </h1>


  </Box>



 
}





  return (
    <Box width='75%'   display="flex" margin="auto" gap="20px" mt={30}>

 
 <Box width='70%'  textAlign='left' p={20} style={{boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}>


<h2>{data.title}</h2>
<p style={{ fontSize:"20px" }}>{data.discreption}</p>
<Image src={data.image_top} w="100%" ></Image>

<p style={{ fontSize:"20px" }}>{data.about_p1}</p>
<p style={{ fontSize:"20px" }}>{data.about_p2}</p>
<p style={{ fontSize:"20px" }}>{data.about_p3}</p>

<Image src={data.image_mid} w="100%"  ></Image>

<p style={{ fontSize:"20px" }}>{data.about_p4}</p>
<p style={{ fontSize:"20px" }}>{data.activity_p1}</p>
<p style={{ fontSize:"20px" }}>{data.activity_p2}</p>
<p style={{ fontSize:"20px" }}>{data.activity_p3}</p>

<Image src={data.image_bottom} w="100%"  ></Image>

 </Box>

 <Box width='23%' height="550px"  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >

 
 <Stack spacing={10} p={15}>

  <Text fontWeight='bold' >Want to book a similar trip?</Text>
  <Input variant='outline' placeholder='Email'  p={5} />
  <Input variant='filled' placeholder='Full Name' p={5} />
  <Input variant='flushed' placeholder='Contact Number' p={5}/>
  <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
 p={5}
/>
  <Input variant='unstyled' placeholder='Departure City' p={5}/>

  <Input variant='outline' placeholder='Destination'  p={5}/>
  <Input variant='filled' placeholder='Budget Per Person' p={5}/>
  
  <Select placeholder='Prefered Hotel Category' size="xl" p={5}>
  <option value='option1'>2 Star</option>
  <option value='option2'>3 Star</option>
  <option value='option3'>4 Star</option>
  <option value='option3'>5 Star</option>
</Select>

<Text textAlign='left' mt={20} fontWeight='bold'>Flight Booked ? </Text>

<Checkbox defaultChecked color='black'> Booked </Checkbox>

<Button bg='blue' color='white' border='none' p={10} fontWeight='bold' borderRadius="10px" >Request Callback</Button>


</Stack>

 </Box>


 




    </Box>
  )
}

export default SinglePartnership