import React from 'react'

import { Box, HStack ,Image ,Menu,MenuButton,MenuItem ,MenuList  } from '@chakra-ui/react'


import { TriangleDownIcon  } from '@chakra-ui/icons'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<Box display="flex" justifyContent="space-between" bg="rgb(47,155,219)" p={10} px={35} >


<Link to='/'>
<Box>
    <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="logo"></Image>
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
<Box>Package</Box>


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


<NavLink to='/login' end ><Box>Login</Box></NavLink>




    </HStack>


</Box>

</Box>





    </div>
  )
}

export default Navbar