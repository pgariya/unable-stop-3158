import React from 'react'

import { Box, HStack ,Image ,Menu,MenuButton,MenuItem ,MenuList ,Portal ,Text ,Button ,MenuGroup } from '@chakra-ui/react'


import { TriangleDownIcon  } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <div>

<Box display="flex" justifyContent="space-between" bg="rgb(47,155,219)" p={7} px={35} >


<Box>
    <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="logo"></Image>
</Box>


<Box>

    <HStack  fontWeight="bold" spacing="20px" >

<Box>
<Menu isLazy>
  <MenuButton bg="rgb(47,155,219)" border="none" fontWeight="bold" fontSize="15">Open menu   <TriangleDownIcon></TriangleDownIcon> </MenuButton>
  <MenuList >
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
</Menu>
</Box>


<Box>Forum</Box>
<Box>Package</Box>


<Box>
<Menu isLazy >
  <MenuButton bg="rgb(47,155,219)" border="none" fontWeight="bold" fontSize="15">Open menu   <TriangleDownIcon></TriangleDownIcon> </MenuButton>
  <MenuList  >
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
</Menu>
</Box>


<Box>Sign in</Box>




    </HStack>


</Box>

</Box>





    </div>
  )
}

export default Navbar