import React from 'react'
import {
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons'

function ProductCard({ _id, name, price, image, brand }) {
    return (
       
        <Box
            key={_id}
            p={6}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
        >
             <Link to={`/sofas/${_id}`}>
            <Image
                rounded={'md'}
                height={300}
                width={300}
                src={image}
            />
            </Link>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                {name}
            </Heading> <Text color={'gray.700'} fontSize={'sm'} textTransform={'uppercase'}>
                {brand}
            </Text>
            <Text fontWeight={600} fontSize={'xl'}>
                ₹.{price}
            </Text>
           
        </Box>
      
    );
}

export default ProductCard
