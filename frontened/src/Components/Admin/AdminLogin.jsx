import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function AdminLogin() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const email = React.useRef(null);
  const password = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let q1 = email.current.value;
    let q2 = password.current.value;

    const payload = { email: q1, password: q2 };
    fetch("https://odd-red-antelope-tux.cyclic.app/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        toast({
          title: "Login Successfull.",
          description: "You are logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch((err) => console.log(err.message));
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
            alt={"Login Image"}
            // flex={"3"}
            h={"84vh"}
            w={"65vw"}
            mb={"6"}
            objectFit={"fill"}
            src={
              "https://www.ulcdn.net/media/subscription_popup/SPop-Up-Soiree-in-the-Sun.jpg?1682879431"
            }
          />
        </Flex>

        <Flex
          h={"75vh"}
          w={"30vw"}
          // flex={"2"}
          pt={"8"}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={8} mt={"14"} mx={"auto"} maxW={"lg"} py={10} px={6}>
            <Heading fontSize={"2xl"}>Login to Your Admin Account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input ref={email} type="email" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  ref={password}
                  type={showPassword ? "text" : "password"}
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
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"orange.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"orange"}
                variant={"solid"}
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Stack pt={6}>
                <Text align={"center"} display={"flex"} m={"auto"}>
                  Not an Admin ?
                  <NavLink to="/adminregister" style={{ color: "orange" }}>
                    {" "}
                    <Text ml={"1"}>Register</Text>
                  </NavLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
export default AdminLogin;
