import React from 'react'
import { Slideshow } from './Slider'
import { Box, Center, Stack, VStack,Text,Image,Flex } from '@chakra-ui/react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <br/>
      <Center>
        <Box style={{fontFamily:"Mrs Eaves XL Serif,serif",fontSize:"28px",lineHeight:"32px"}}>Explore Our Furniture Range</Box>
      </Center>
      <Center>
      <Box mt={"1%"} border={"1px solid #b8622d"} w={"15%"}></Box>
      </Center>
      <br/>
      <Center border='0px solid red'>
        <Flex w='80%' border='0px solid black'>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://www.ulcdn.net/media/web-home-popular-categories/deal_zone_icon-15_Desktop.svg?1665149548' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>Deal Zone</Text>
        </VStack>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://thumbs.dreamstime.com/b/desk-microscope-family-picture-line-illustration-icon-white-background-study-tea-signs-symbols-can-be-used-web-logo-177256448.jpg' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>Study Table</Text>
        </VStack>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://media.istockphoto.com/id/1278930398/vector/sofa-icon-vector-logo-template.jpg?s=170667a&w=0&k=20&c=9_Bqa4Fv2yzw27mPAhRbv8cBQVEE8JqAwH9qTgtuByQ=' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>Sofas</Text>
        </VStack>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://thumbs.dreamstime.com/b/bed-icon-vector-bedroom-illustration-symbol-hotel-logo-sign-bed-icon-vector-bedroom-illustration-symbol-hotel-logo-sign-156644795.jpg' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>Beds</Text>
        </VStack>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://www.ulcdn.net/media/Web-home-popular-categories/store_icon.png?1535694121' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>50+Stores</Text>
        </VStack>
        <VStack border='0px solid black'>
            <Image w='600px' h='122px' src='https://www.ulcdn.net/media/web-home-popular-categories/UL_CATEGORY_ICONS-Lighting.svg?1665149591' alt='%'/>
            <Text style={{fontFamily:"Mrs Eaves XL Modern,sans-serif",fontSize:"16px",lineHeight:"24px"}}>Lightening</Text>
        </VStack>
        </Flex>
        </Center>
        {/* ******** */}
        <br/>
        <br/>
      <Center>
        <Box style={{fontFamily:"Mrs Eaves XL Serif,serif",fontSize:"28px",lineHeight:"32px"}}>Visit Our Stores</Box>
      </Center>
      <Center>
      <Box mt={"1%"} border={"1px solid #b8622d"} w={"15%"}></Box>
      </Center>
      <br/>
      <Carousel/>
    </div>
  )
}

export default Home
