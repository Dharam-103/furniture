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
  import {useLocation, useSearchParams} from "react-router-dom";
  import {useDispatch, useSelector} from "react-redux";
  import {getProducts} from '../../Redux/Sofa/action';

  
  
  const Products = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const {sofas} = useSelector((store)=>store.productReducer);
     console.log({sofas})
    const [page, setPage] = useState(1);

    let obj={
      params:{
          category : searchParams.getAll("category"),
          _sort:searchParams.get("order") && "price",
          _order:searchParams.get("order"),
      }
  };

  useEffect(()=>{
      dispatch(getProducts(obj));
  },[location.search])
  
   
  
    const handlePage = (val) => {
      setPage(page + val)
    }
    let lastPage = Math.ceil(100 / 20);
    
   return (
    <Box mt={2}>
    <Heading color={"pink.300"}>All Sofas</Heading>
    <br />
    <Box width={'60%'} rounded={'2xl'} boxShadow={'2px 2px 2px 2px #FED7E2'} margin={'auto'}>
      <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }}>
        {/* // <Box margin={'10px'}>
        //   <Button isDisabled={order === 'asc'} colorScheme='pink' onClick={() => setOrder('asc')}>LOW TO HIGH</Button>
        // </Box>
        // <Box margin={'10px'}>
        //   <Button isDisabled={order === 'desc'} colorScheme='pink' onClick={() => setOrder('desc')}>HIGH TO LOW </Button>
        // </Box> */}
        {/* <Box margin={'10px'}>
          <Input placeholder='Search here' onChange={(e) => setSearch(e.target.value)} />
        </Box> */}
        <Box margin={'10px'}>
          {/* <Select placeholder='Select option' >
            <option value='Makeup'>Makeup</option>
            <option value='Haircare'>Haircare</option>
            <option value='Bath'>Bath</option>
            <option value='Skincare'>Skincare</option>
            <option value='Sanitizingcare'>Sanitizingcare</option>
          </Select> */}
        </Box>
      </SimpleGrid>
    </Box> 
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
        /> : sofas?.map((e) => {
          return (
            <Box
              key={e._id}
              p={6}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
            >
              <Image
                rounded={'md'}
                height={300}
                width={300}
                src={e.image}
              />
              <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                {e.name}
              </Heading> <Text color={'gray.700'} fontSize={'sm'} textTransform={'uppercase'}>
                {e.brand}
              </Text>
              <Text fontWeight={600} fontSize={'xl'}>
                ₹.{e.price}
              </Text>
              <Link color={"tomato"} href={`/singleproduct/${e._id}`} fontSize={'lg'}>
                More
              </Link>
            </Box>
          )
        })
        }
      </SimpleGrid>
      <br />
      {/* Pagination */}
      <Box>
        <Button isDisabled={page === 1} colorScheme={'pink'} onClick={() => handlePage(-1)}>PREV</Button>
        <Button>{page}</Button>
        <Button isDisabled={page === lastPage} colorScheme={'pink'} onClick={() => handlePage(1)}>NEXT</Button>
      </Box>
    </Box>
  </Box >
   )
  }
  
  export default Products
