import React from 'react'
import {
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Button,
    HStack,
    Stack,
    useColorModeValue, ListItem, List, Icon,
     useToast
} from '@chakra-ui/react';
import { useState, useEffect, } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { StarIcon} from '@chakra-ui/icons'
import { MdLocalShipping } from 'react-icons/md';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getSingleProduct} from '../../Redux/Sofa/action';


const SingleProduct = () => {
  const toast=useToast()
     const dispatch = useDispatch();
    // const location = useLocation();
    // const x = useSelector((store)=>store.productReducer);
    // console.log(x)
    
    const [data, setData] = useState({})
    const { id } = useParams()

    const handleCart = (image,name,price) =>{
        console.log(image,name,price)
        dispatch(addToCart(image,name,price))
        toast({
            title: 'Added Product Successfully',
            description: "Your item is added to cart",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }
    
    useEffect(() => {
        axios.get(`https://odd-red-antelope-tux.cyclic.app/sofas/${id}`)
            .then((res) => {
                // console.log("res",res.data)
                setData(res.data)
            }).catch((err) => {
                // console.log(err)
            })
    }, [id]) 

    
    // console.log("data",data)
    return (
        <Box width={'80%'} margin='auto' mt={5}>
            <SimpleGrid columns={{ lg: 2, md: 1, sm: 1 }} gap={3}>

                <Box >
                    <Image rounded={'md'}
                        height={500}
                        width='100%' border='0px solid black' src={data.image} alt="title" />

                    <br />
                    <HStack spacing='24px'>
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src={data.image}
                            alt={data.name}
                        />
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src={data.image}
                            alt={data.name}
                        />
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src={data.image}
                            alt={data.name}
                        />
                    </HStack>
                </Box>
                <Box
                    key={data?._id}
                    p={6}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    textAlign={'left'}
                >

                    <Heading a mb={4}>{data.name}</Heading>
                    <Text fontSize='xl'>Rs.{data.price}</Text>
                    <br />
                    <Box>
                        <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                            mb={'4'}>
                            Product Details
                        </Text>
                        <br />
                        <List spacing={2}>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    Name:
                                </Text>{' '}
                                {data.name}
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    Brand:
                                </Text>{' '}
                                {data.brand}
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    Discount:
                                </Text>{' '}
                                {data.discount}
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    EMI:
                                </Text>{' '}
                                {data.emi}
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    Small:
                                </Text>{' '}
                                {data.small}
                            </ListItem>
                        </List>
                    </Box>

                    <Button
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        backgroundColor='#ff6b6b '
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}
                     onClick={()=>{handleCart(data.image,data.name,data.price)}}
                    >
                        Add to cart
                    </Button>
                    <br />
                    <br />
                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Box>

            </SimpleGrid>
        </Box>
    )
}


export default SingleProduct
