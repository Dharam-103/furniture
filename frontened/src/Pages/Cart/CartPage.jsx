import React, { useEffect, useState } from 'react'
import { Card,Box,Image,Heading,Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, updateCart, updateCartDec } from '../../Redux/Cart/action'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'

const CartPage = () => {
  const dispatch=useDispatch()
 const data = useSelector(store=>store.CartReducer.cart)
 console.log(data)
 const totals = data?.reduce(
  (accumulator, currentValue) => accumulator + currentValue.total,
  0
);
//  setTotal(totals)
  useEffect(()=>{
    dispatch(getCart) 
 },[])

 const handleDelete=(id)=>{
  dispatch(deleteCart(id)).then(()=>dispatch(getCart))
}
const handleIncrease=(id,total,price,quantity)=>{
  console.log(id)
  dispatch(updateCart(id,total,price,quantity)).then(()=>dispatch(getCart))
}
const handleDecrease=(id,total,price,quantity)=>{
  console.log(id)
  dispatch(updateCartDec(id,total,price,quantity)).then(()=>dispatch(getCart))
}
  
return(
    <div style={{height:"auto"}}>
      <Box mt={30}>
        <Box w={"45%"} m={"auto"} display={"flex"}>
      <Heading mr={5} color={"orange.500"}>1. <u>Cart</u> &gt; </Heading>
      <Heading  mr={5} color={"grey"}>2. <u>Address</u> &gt; </Heading>
      <Heading  mr={5} color={"grey"}>3. <u>Payment</u></Heading>
      </Box>
      </Box>
        <Box display={""} pt={10} pb={20} >
        <Tabs size='md' variant='enclosed' w="80%" m="auto" border="2px solid grey" borderRadius={"10px"} p="10px"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
  <TabList >
    <Tab>Cart</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    
        <div style={{overflowY:"scroll", height:"400px"}}>
        {data?.map((el)=><Card w={"100%"} m={"auto"} key={el.id} borderRadius={"10px"} p={"20px"} mt={"15px"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline' 
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={el.image}
    alt='Caffe Latte'
  /><Box display={"flex"} gap={120}>
  <Box ml={10} > <Heading textAlign={"left"} fontSize={"20px"} size='xl'>Product</Heading>
  <Heading mt={5} textAlign={"left"} fontSize={"15px"} size='xl'>{el.name}</Heading>
  <Heading  textAlign={"left"} fontSize={"12px"} color={"grey"}>Standard Set - Sofas: Left Aligned 3 seater + Chaise | Colour: Camel | Sofa Size: Regular | Sofa Material: Leather | Sofa Type: Sectional</Heading>
  </Box>
  <Box > <Heading textAlign={"left"} fontSize={"20px"} size='xl'>Delivery Date</Heading>
  <Heading mt={5} textAlign={"center"} fontSize={"15px"} size='xl'>By {new Date().getDate()+4}-{new Date().getMonth()+1}-{new Date().getFullYear()}</Heading></Box>
  <Box> <Heading textAlign={"left"} fontSize={"20px"} size='xl'>Quantity</Heading>
  <Box mt={5} display={"flex"} >
    <Button colorScheme='orange' size={"sm"} isDisabled={el.quantity===1} onClick={()=>handleDecrease(el._id,el.total,el.price,el.quantity)}>-</Button>
    <Heading fontSize={"25px"}>{el.quantity}</Heading>
    <Button  colorScheme='orange' size={"sm"} isDisabled={el.quantity===5} onClick={()=>handleIncrease(el._id,el.total,el.price,el.quantity)}>+</Button>
    </Box></Box>
    <Box> <Heading textAlign={"left"} fontSize={"20px"} size='xl'>Total</Heading>
  <Heading mt={5} textAlign={"center"} fontSize={"15px"} size='xl'>₹{el.total}</Heading></Box>
  </Box>
  <Box ml={5}>
  <RxCross2 fontSize={30} onClick={()=>handleDelete(el._id)}/>
  </Box>
  
</Card>
        )}
    </div>
    </TabPanel>
  </TabPanels>
</Tabs>
<br />
<hr />
<Box w={"90%"} mt={10} mb={400}>
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"  p={15} borderRadius={5} w={"30%"}  float={"right"} >
      <Heading textAlign={"left"} fontSize={"20px"} color={"orange.500"}>Apply Coupon/Vouchers</Heading>
      <Box mt={8} mb={2} display={"flex"} justifyContent={"space-between"}>
      <p fontSize={"15px"} >Cart Total</p>
      <p fontSize={"15px"} >₹{totals}</p>
      </Box>
      <Box mb={2} display={"flex"} justifyContent={"space-between"}>
      <p fontSize={"15px"} >Delivery Charges</p>
      <p style={{color:"green"}} fontSize={"15px"} >FREE</p>
      </Box>
      <Box mb={2} display={"flex"} justifyContent={"space-between"}>
      <p fontSize={"15px"} >Total Payable Amount</p>
      <p fontSize={"15px"} >₹{totals}</p>
      </Box>
      <Box mb={2} mt={3} display={"flex"} justifyContent={"space-between"}>
      <Heading fontSize={"15px"} >Booking Amount (Pay Now)</Heading>
      <Heading fontSize={"15px"} >₹{totals}</Heading>
      </Box>
      <Box mb={2} mt={8}>
      <Button w={"48%"} variant={"ghost"} color={'orange.500'} mr={3} _hover={{color:"white",bg:"orange.500"}}>Continue Shopping</Button>
      <Link to="/checkout"><Button w={"48%"} bg={"orange.500"} color={"white"} _hover={{color:"orange.500",bg:"white"}}>CHECKOUT</Button></Link>
      </Box>
    </Box>
        </Box>
        </Box>
    </div>
  )
}

export default CartPage
