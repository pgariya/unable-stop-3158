import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';
import {Form, Navigate, useNavigate, useParams} from "react-router-dom"
import { Button, Box ,Stack,Image,Text, Input, Checkbox } from '@chakra-ui/react';

import {ArrowForwardIcon ,PhoneIcon} from "@chakra-ui/icons"


let inintalformdata= {
    email:"",
    name:"",
    contact_no:"",
    departure_city:""
}

const SingleMindful = () => {

    let [data,setdata] = useState([]);
    let [loading,setloading] = useState(false)
    let [count,setcount] = useState(0)
    let [formdata,setformdata]= useState(inintalformdata);

    let params= useParams()
    console.log(params)

    let Navigate= useNavigate()

useEffect( () => {
       setloading(true)
    axios.get(`https://equal-tortoiseshell-submarine.glitch.me/user/${params.id}`)
    .then( (res) => {   setdata(res.data)  
     setloading(false)  } )
    .catch((err) => console.log(err))


},[])

{console.log(data)}


let handleChange=(e) =>{

  setformdata({...formdata,[e.target.name] :e.target.value})

}


let handleSubmit= () =>{

    console.log(formdata)
   console.log(params.id)
//    <Navigate to=`/mindfulPage/params.id/payment` />
    

}

// console.log(formdata)

if(loading){
    return(  <h1>......loading </h1>)
}

  return (
    <Box w='75%' margin='auto'   display='flex' textAlign='left' mt={20}>


<Box w='65%' p={20} style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>

<Image src={data.banner} alt="ban" w="100%"></Image>

<Stack gap={5}>
<Text fontSize='25px' fontWeight='bold'>{data.descTitle}</Text>


<Box display='flex' justifyContent='space-between' >

<Box display='flex' >
    <Box><Image src={data.cirImage} pt={10} pr={20} borderRadius="50px" w='50px'></Image></Box>
   <Box> <Text fontSize='20px'>{data.cirDesc}</Text></Box>
</Box>



<Text color='red' fontSize='20px'> <PhoneIcon></PhoneIcon> {data.number}</Text>

</Box>

<hr></hr>
<Text fontSize='18px'> Rating: {data.rating}</Text>

<Box display='flex' justifyContent='space-between' mt='-10px'>
    <Button color='white' bg='teal' px='20px' fontSize='18px' borderRadius='10px' border='none'>{data.days}</Button>
    <Text fontSize='15px' fontWeight='bold'> ₹ {data.price } /person</Text>
</Box>

<Text fontSize='20px'  fontWeight='bold'> Location : {data.location}</Text>

 {/* another map  */}




<hr/>

<Text fontSize='20px' fontWeight='bold'>Overview</Text>

<Text fontSize='16px'>This winter, take a break from the hustle & bustle of your daily life and soak in the serenity of Mandawa, where time stands still. Tripoto Mindful Retreats have combined the best of a luxury stay along with fun-filled activities that'll make your next getaway a memorable affair. On this luxe cooking retreat, you’ll stay at the 200-year-old Mandawa Kothi and learn how to cook authentic Rajasthani delicacies including Gatte Ki Sabzi and Laal Maas in the royal kitchen! </Text>

<Text fontSize='16px' style={{marginBottom:"30px"}}>Holding on to incredible tales from the past, this Kothi was deserted for decades before its owner Rajendra Singh Palawat finally brought it back to life by renovating it in a way that it still holds on to its uniqueness and royalty. And now, you get to experience it first-hand at this Mindful Retreat. Explore Rajasthan differently this time, book your spot at this culinary getaway!</Text>
<Text fontSize='20px'  fontWeight='bold'>What you will love </Text>

<ul style={{ fontSize:"16px",marginTop:"25px"}}>
    <li>Experiencing local traditional activities like 'Tie and Dye' fabric work, and savoring the taste of dal kachori & local sweets</li>
    <li>Cooking delicious Rajasthani meals with the chef in the royal kitchen</li>
    <li>Unwinding at a heritage haveli that's now a modern boutique hotel </li>

</ul>

<Text fontSize='20px' fontWeight='bold'>What will you experience</Text>
<ul>
    <li>An experiential royal stay</li>
    <p>– A luxurious stay in a heritage Haveli complemented with delectable cuisine</p>
<p>– Learn to make the exquisite Rajasthani meal in the royal kitchen. (Veg items would include the famous Dahi Baingan, Gatte Ki Sabzi, Lassan ki chutney & non-veg items include Laal Maas, Chicken Jai Singh, etc)</p>
<p>– Savour the dinner in the beautiful ambiance of the haveli with pretty lighting and a bonfire.</p>


<li>An experiential royal stay</li>
    <p>– A luxurious stay in a heritage Haveli complemented with delectable cuisine</p>
<p>– Learn to make the exquisite Rajasthani meal in the royal kitchen. (Veg items would include the famous Dahi Baingan, Gatte Ki Sabzi, Lassan ki chutney & non-veg items include Laal Maas, Chicken Jai Singh, etc)</p>
<p>– Savour the dinner in the beautiful ambiance of the haveli with pretty lighting and a bonfire.</p>


<li>An experiential royal stay</li>
    <p>– A luxurious stay in a heritage Haveli complemented with delectable cuisine</p>
<p>– Learn to make the exquisite Rajasthani meal in the royal kitchen. (Veg items would include the famous Dahi Baingan, Gatte Ki Sabzi, Lassan ki chutney & non-veg items include Laal Maas, Chicken Jai Singh, etc)</p>
<p>– Savour the dinner in the beautiful ambiance of the haveli with pretty lighting and a bonfire.</p>


<li>An experiential royal stay</li>
    <p>– A luxurious stay in a heritage Haveli complemented with delectable cuisine</p>
<p>– Learn to make the exquisite Rajasthani meal in the royal kitchen. (Veg items would include the famous Dahi Baingan, Gatte Ki Sabzi, Lassan ki chutney & non-veg items include Laal Maas, Chicken Jai Singh, etc)</p>
<p>– Savour the dinner in the beautiful ambiance of the haveli with pretty lighting and a bonfire.</p>




</ul>









</Stack>

</Box>


<Box w='32%' h='750px' p={15}  ml={15}  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>



<Stack gap={8} textAlign='center'>

<Text fontSize='18' fontWeight="bold" >Enter Your Details and Proceed to Book </Text>

<Input placeholder='Email' type='email' variant='filled' p={5} name="email"  onChange={handleChange}/>

<Input placeholder='Full Name' variant='filled' p={5} name="name"  onChange={handleChange}/>

<Input placeholder='Contact Number' type='number' variant='filled' p={5} name="contact_no"  onChange={handleChange}/>

<Input placeholder='Departure City' variant='filled' p={5} name="departure_city"  onChange={handleChange}/>


<label style={{textAlign:"left",fontWeight:"bold"}}> Check  in Date and Time :
<Input
 placeholder="Select Date and Time"
 size="4xl"
 type="datetime-local"
 p={5}
/>
</label>

<Text textAlign='left' fontWeight='bold'>Type of Room</Text>
<Checkbox size='md' colorScheme='green' defaultChecked border='1px solid grey'>
Deluxe rooms on twin sharing basis
  </Checkbox>

<Box display='flex' justifyContent='space-between' mt={10} w="95%">
    <Box w='75%' >
        <Text alignItems='right'>Number Of People (For children upto 6 years, there is no extra charge, and half price for kids from 6-12 years)</Text>
    </Box>
    <Box mt={25}>
<Button disabled={count<= 0} onClick={()=> setcount(count-1)}>-</Button>
<Button border='none'>{count}</Button>
<Button onClick={() => setcount(count+1)}>+</Button>

    </Box>
</Box>

 
<Checkbox defaultChecked colorScheme='red' border='2px solid grey'>Send me Update For this Booking on </Checkbox>

<Box fontWeight='bold' display='flex' justifyContent='space-around' fontSize='20px'>
    <Text >Amount</Text>
    <Text>₹ {data.price } </Text>
</Box>

<Button color='white' fontSize='18px' bg="blue" borderRadius='10px' border='none' p={15} onClick={handleSubmit}>Next <ArrowForwardIcon></ArrowForwardIcon></Button>

</Stack>











</Box>









    </Box>
  )
}

export default SingleMindful