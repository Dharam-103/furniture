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
    useToast,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
import { Navigate } from "react-router-dom";
  import React, { useState }  from "react";
function UserSignup() {
  const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
const { isOpen, onOpen, onClose } = useDisclosure()
const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState(0)

    const handleSubmit=()=>{
        const payload={
            name,email,password,phone
        }
        console.log(payload)
        fetch("https://odd-red-antelope-tux.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
          toast({
            title: 'Signup Successfull.',
            description: "You are successfully signed in.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch((err)=>console.log(err))
    }
  
// const email = React.useRef(null)
// const password = React.useRef(null)
// const phone = React.useRef(null)
// const name = React.useRef(null)
// const handleSubmit=()=>{
//   let q1=email.current.value;
//   let q2=password.current.value
//   let q3=name.current.value
//   let q4=phone.current.value
//   console.log(q1,q2)
//   const payload={email:q1,password:q2,name:q3,phone:q4}
//   axios
//     .post("https://odd-red-antelope-tux.cyclic.app/users/register",'no-cors', payload)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((res) =>console.log(res));
// };

  // fetch("https://odd-red-antelope-tux.cyclic.app/users/register",{
  //           mode: 'no-cors',
  //           method:"POST",
  //           headers:{
  //               "Content-Type":"application/json"
  //           },
  //           body:JSON.stringify(payload)
  //       })
  //       .then((res)=>res.json())
  //       .then((res)=>console.log(res))
  //       .catch((err)=>console.log(err))
// }

      
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
                  <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Contact</FormLabel>
                  <Input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
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