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
    <Box width='70%'   display="flex" margin="auto" gap="20px" mt={30}>

 
 <Box width='75%'  textAlign='left'>


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

 <Box width='23%' height="450px"  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >

 
 <Stack spacing={10} p={15}>

  <Text fontWeight='bold' >Want to book a similar trip?</Text>
  <Input variant='outline' placeholder='Email'   />
  <Input variant='filled' placeholder='Full Name' />
  <Input variant='flushed' placeholder='Contact Number' />
  <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
  <Input variant='unstyled' placeholder='Departure City' />

  <Input variant='outline' placeholder='Destination'  />
  <Input variant='filled' placeholder='Budget Per Person' />
  
  <Select placeholder='Prefered Hotel Category' size="xl">
  <option value='option1'>2 Star</option>
  <option value='option2'>3 Star</option>
  <option value='option3'>4 Star</option>
  <option value='option3'>5 Star</option>
</Select>

<Text textAlign='left' mt={20} fontWeight='bold'>Flight Booked ? </Text>

<Checkbox defaultChecked color='black'> Booked </Checkbox>

<Button bg='blue' color='white' border='none' p={5} borderRadius="10px" >Request Callback</Button>


</Stack>

 </Box>


 




    </Box>
  )
}

export default SinglePartnership