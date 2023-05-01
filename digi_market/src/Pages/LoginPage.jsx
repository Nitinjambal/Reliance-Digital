import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import Footer from "../Components/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

import { Navigate } from "react-router-dom";

export default function SplitScreen() {
  const { isAuth, login, logout, token } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleOnClick = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let data = await res.json();
      console.log("data:", data);

      login(data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  if (isAuth && token !== "") {
    return <Navigate to="/" />;
  }


  // const gotoRegisterPage=()=>{
  //       <Navigate to="/"/>
  // }
  return (
    <>
      <Navbar />
      <SubNavbar />

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                border={"1px solid gray"}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                border={"1px solid gray"}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"red"}
                variant={"solid"}
                onClick={handleOnClick}
              >
                Sign in
              </Button>
              <Heading fontSize={"xl"}>or</Heading>

              <Button
                colorScheme={"red"}
                variant={"solid"}
                // onClick={gotoRegisterPage}
              >
             <Link to="/">Register</Link>  
              </Button>

            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            w="100%"
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              // 'https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg'
            }
          />
        </Flex>
      </Stack>

      <Footer />
    </>
  );
}
