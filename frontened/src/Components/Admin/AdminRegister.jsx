import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminRegister() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      phone,
    };

    console.log(payload);

    axios
      .post("https://odd-red-antelope-tux.cyclic.app/admin/register", payload)
      .then((res) => {
        console.log(res);
        toast({
          title: "Signup Successfull.",
          description: "You are successfully signed in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        if (res.status === 200) {
          navigate("/adminlogin");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Stack
        maxH={"80vh"}
        mt={"10"}
        w={"auto"}
        mb={"20"}
        pb={"20"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1}>
          <Image
            flex={2}
            h={"84vh"}
            w={"auto"}
            mb={"6"}
            alt={"Login Image"}
            objectFit={"fill"}
            src={
              "https://www.ulcdn.net/media/subscription_popup/SPop-Up-Soiree-in-the-Sun.jpg?1682879431"
            }
          />
        </Flex>
        {/* Form Box */}
        <Flex
          h={"75vh"}
          pt={"8"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mt={"14"} mx={"auto"} maxW={"lg"} py={10} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"2xl"} textAlign={"center"}>
                Become an Admin to Sell Your Products!
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Contact</FormLabel>
                      <Input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={handleSubmit}
                    loadingText="Submitting"
                    size="lg"
                    bg={"orange.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"left"} display={'flex'}>
                    Already an Admin?{" "}
                    <NavLink to="/adminlogin" style={{ color: "orange" }}>
                      <Text ml={"1"}>Login</Text>
                    </NavLink>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
export default AdminRegister;

// import React from "react";

// const AdminRegister = () => {
//   return <div>Hello</div>;
// };

// export default AdminRegister;
