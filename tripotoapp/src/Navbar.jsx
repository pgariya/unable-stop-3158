import React from 'react'

import { Box, HStack ,Image ,Menu,MenuButton,MenuItem ,MenuList  } from '@chakra-ui/react'


import { TriangleDownIcon  } from '@chakra-ui/icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const Navbar = () => {

  let {status,data,setdata ,setstatus} =useContext(AuthContext);
 let Navigate = useNavigate()
  let {email}= data

  console.log(email,status)



  let handlelogin =() =>{

    setstatus(!status)
Navigate("/login")



  }

  return (
    <div>

<Box display="flex" justifyContent="space-between" bg="rgb(47,155,219)" p={10} px={35} >


<Link to='/'>
<Box>
    <Image w="50px" src="/logo/Travel Buddy.png" alt="logo"></Image>
</Box>
</Link>

<Box>

<HStack  fontWeight="bold" spacing="20px" py={10} >


<Box>
<Menu isLazy>
  <MenuButton bg="rgb(47,155,219)" border="none" fontWeight="bold" fontSize="15"> Inspiration   <TriangleDownIcon></TriangleDownIcon> </MenuButton>
  <MenuList fontWeight="bold" fontSize="15" >
    <MenuItem p={10} border="none"> <Link to='/singapore'>Visit Singapore</Link> </MenuItem>
    <MenuItem p={10} border="none"> <Link to='/beaches'>Beaches</Link> </MenuItem>
    <MenuItem p={10} border="none"> Mountains </MenuItem>
    <MenuItem p={10} border="none"> Herietage </MenuItem>
    <MenuItem p={10} border="none"> Weakend Guide </MenuItem>
    <MenuItem p={10} border="none"> Upcoming Festival </MenuItem>
    <MenuItem p={10} border="none"> Honeymoon Packages </MenuItem>
  </MenuList>
</Menu>


</Box>


<Box>Forum</Box>

<NavLink to='/packages'>
<Box>Package</Box>

</NavLink>



<Box>
<Menu isLazy>
  <MenuButton bg="rgb(47,155,219)" border="none" fontWeight="bold" fontSize="15"> Publish Trip   <TriangleDownIcon></TriangleDownIcon> </MenuButton>
  <MenuList fontWeight="bold" fontSize="15" >
    <MenuItem p={10} border="none"> Create New </MenuItem>
    <MenuItem p={10} border="none"> Upload Photos /Videos </MenuItem>
    <MenuItem p={10} border="none"> Import Blog </MenuItem>
  </MenuList>
</Menu>
</Box>


<NavLink to='/login' end >
  <Box onClick={handlelogin}>{status ? "Logout" : "Login"}
  </Box></NavLink>





    </HStack>


</Box>

</Box>





    </div>
  )
}

export default Navbar