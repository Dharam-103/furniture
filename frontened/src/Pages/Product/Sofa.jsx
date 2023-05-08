import React from 'react'
import Sidebar from './Sidebar'
import Products from './Product'
import {Box,Flex,Spacer} from '@chakra-ui/react'

const Sofa = () => {
  return (
    <Flex>
  <Box p='6'>
   <Sidebar/>
  </Box>
  <Spacer />
  <Box p='6' >
   <Products/>
  </Box>
</Flex>
  )
}

export default Sofa
