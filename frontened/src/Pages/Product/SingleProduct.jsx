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
import {getSingleProduct} from '../../Redux/Sofa/action';

const SingleProduct = () => {
    const {_id} = useParams()
    console.log(_id)
    // const [data, setData] = useState({})
    const dispatch = useDispatch();
    const location = useLocation();
    const x = useSelector((store)=>store.productReducer);
    console.log(x)
    // const { id } = useParams()
    
    // useEffect(() => {
    //     axios.get(`https://odd-red-antelope-tux.cyclic.app/sofas${id}`)
    //         .then((res) => {
    //             setData(res.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }, []) 

    useEffect(()=>{
        dispatch(getSingleProduct(_id));
    },[location.search])

    return (
        <Box width={'80%'} margin='auto' mt={5}>
            <SimpleGrid columns={{ lg: 2, md: 1, sm: 1 }} gap={3}>

                <Box >
                    <Image rounded={'md'}
                        height={500}
                        width='100%' border='0px solid black' src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465' alt="title" />

                    <br />
                    <HStack spacing='24px'>
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                            alt='Dan Abramov'
                        />
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                            alt='Dan Abramov'
                        />
                        <Image
                            rounded={'md'}
                            boxSize='100px'
                            objectFit='cover'
                            src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                            alt='Dan Abramov'
                        />
                    </HStack>
                </Box>
                <Box
                    // key={data?._id}
                    p={6}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                >

                    <Heading a mb={4}>Janet 2 Seater Fabric Loveseat In Adrian Velvet Colour</Heading>
                    <Text fontSize='xl'>Rs. 10,000</Text>
                    <br />

                    <HStack>
                        <Icon as={StarIcon} h={5} w={5} alignSelf={'center'} />
                        <Box>
                            Rating
                        </Box>
                    </HStack>
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

                        <Text >Title</Text>
                        <br />
                        <List spacing={2}>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    Name:
                                </Text>{' '}
                                title
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    title:
                                </Text>{' '}
                                title
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    title:
                                </Text>{' '}
                                title
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    title:
                                </Text>{' '}
                                title
                            </ListItem>
                            <ListItem>
                                <Text as={'span'} fontWeight={'bold'}>
                                    title:
                                </Text>{' '}
                                title
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
                    // onClick={handleAddToCart}
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