import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
  import React, { useState }  from "react";
function UserSignup() {
    const [showPassword, setShowPassword] = useState(false);
const { isOpen, onOpen, onClose } = useDisclosure()
const email = React.useRef(null)
const password = React.useRef(null)
const phone = React.useRef(null)
const name = React.useRef(null)
const handleSubmit=(e)=>{
  e.preventDefault();
  let q1=email.current.value;
  let q2=password.current.value
  let q3=name.current.value
  let q4=phone.current.value
  console.log(q1,q2)
  const userdetail={email:q1,password:q2,name:q3,phone:q4}
  fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(userdetail),
  })
  .then((res)=>res.json())
  .then((bag)=>{
  })
  .catch((err)=>console.log(err))
}

      
        return (
          <>
          <Text onClick={onOpen} align={'center'}>
                Sign up
              </Text>
            <Modal
              initialFocusRef={name}
              finalFocusRef={password}
              isOpen={isOpen}
              onClose={onClose}
              size={"5xl"}
            >
              <ModalOverlay />
              <ModalContent >
              <Stack minH={'80vh'} w={"auto"} direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.ulcdn.net/media/subscription_popup/SPop-Up-Soiree-in-the-Sun.jpg?1682879431'
          }
        />
      </Flex>
              <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
          SIGN UP FOR SALE UPDATES
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" ref={name}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Contact</FormLabel>
                  <Input type="number" ref={phone}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={email}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} ref={password}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'orange.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      
    </Stack>
              </ModalContent>
            </Modal>
          </>
        )
      
}
export default UserSignup