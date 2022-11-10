import React from 'react'
import { Text,Box, Flex, Image } from '@chakra-ui/react'
import axios  from "axios"
import { useState ,useEffect } from 'react'


const Partnership = () => {
    let [data,setdata]= useState([])


    useEffect( () =>{

        axios.get(`https://avdhoot-fake-api.herokuapp.com/Package`)
        .then( (res) => setdata(res.data))
        .catch((err) => console.log(err))

    },[])

    // console.log(data)

  return (
    <Box>

<h1 style={{textAlign:"left"}}>In the Spotlight: Partnerships</h1>

<div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)" ,gap:"20px"}}>
{
    data.map( (el) => <div key={el.id} style={{border:"2px solid black"}} >

    <div>
        <img src={el.image} width="100%"></img>
        <h3>India Tourism </h3>
        <h2>{el.title}</h2>
    </div>



    </div>)
}

</div>



    </Box>
  )
}

export default Partnership