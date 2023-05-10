import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../Redux/Sofa/action';
import ProductCard from './ProductCard';



const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { sofas } = useSelector((store) => store.productReducer);
  //  console.log({sofas})
  // const [page, setPage] = useState(1);

  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      sort: searchParams.get("sort"),
      order: searchParams.get("sort"),
      limit:searchParams.get("limit"),
      page:searchParams.get("page")
    }
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search])


  return (
    <Box mt={2}>
      <Heading color={"#ff6b6b"}>All Sofas</Heading>
      <br />

      <Box margin={'auto'} width='90%'>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={5}>
          {sofas.length === 0 ? <Spinner
            thickness='4px'
            speed='3s'
            color='red.500'
            size='xl'
            marginLeft='590px'
            marginTop='10px'
          /> : sofas?.map((el) => {
            return <ProductCard key={el.id} {...el} />
          })}
    </SimpleGrid>
  </Box >
  </Box >
   )
  }

export default Products
