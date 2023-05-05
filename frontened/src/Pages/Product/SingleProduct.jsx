import {
    Grid, GridItem, Box, Center, Icon, HStack
    , Alert, AlertIcon, AlertTitle,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    Stackdivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { MdLocalShipping } from 'react-icons/md';
import styled from "styled-components";

const SingleProduct = () => {

    return (
        <div>
            <Center>
                <Flex className='singleproduct' border='1px solid black' w='80%' justifyContent='Center' mt={5} gap={5}>

                    {/* image */}
                    <Stack w='50%' mt={2}>
                        <Image h='580px' border='0px solid black' src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465' alt="title" />
                        {/* <Center> */}
                            <HStack spacing='24px'>
                                <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                                    alt='Dan Abramov'
                                />
                                <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                                    alt='Dan Abramov'
                                />
                                <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://www.ulcdn.net/images/products/283517/slide/666x363/Janet_adrian_velvet_1.jpg?1566799465'
                                    alt='Dan Abramov'
                                />
                            </HStack>
                        {/* </Center> */}
                    </Stack>
                    {/* image */}
                    <Stack>
                        <Box maxW='34rem' border='1px solid black' mt={2} >
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
                            <br />
                        </Box>
                        </Stack>

                </Flex>
            </Center>
        </div>
    )
}

export default SingleProduct

const div = styled.div`
 @media (max-width: 900px){
  .singleproduct > Stack{
     flex-direction:column;
    }
 }
`;