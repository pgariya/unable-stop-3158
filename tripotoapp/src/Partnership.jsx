import React from 'react'
import { Text,Box, Flex, Image } from '@chakra-ui/react'
import axios  from "axios"
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Partnership = () => {
    let [data,setdata]= useState([])


    useEffect( () =>{

        axios.get(`https://avdhoot-fake-api.herokuapp.com/partnerships`)
        .then( (res) => setdata(res.data))
        .catch((err) => console.log(err))

    },[])

    // console.log(data)

  return (
    <Box>

<h1 style={{textAlign:"left"}}>In the Spotlight: Partnerships</h1>

<div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)" ,gap:"10px" }}>

{
    data.map( (el) => <div key={el.id} >

<Link to={`/${el.id}`}>
    <Box style={{textAlign:"left",padding:"5px"}}   >
        <img src={el.image_top} style={{width:"100%" ,height:"250px" , borderRadius:"10px"}}></img>

        <Text fontSize={18} fontWeight='bold' color='red' > India Tourism </Text>
        <Text fontSize={20} fontWeight='bold' color='black'> {el.title}</Text>
    </Box>
 </Link>


    </div>)
}

</div>



    </Box>
  )
}

export default Partnership