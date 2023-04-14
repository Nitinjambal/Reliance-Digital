import {
  Box,
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Image,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// Home
// <Link to="/cart">Cart</Link>
// <Link to="/login">Login</Link>

function Navbar() {
  return (
    <Flex bg={"#e42529"} h={"6rem"}>
      <Box>
        <Link to="/">
          {" "}
          <Image h={"6rem"} src={require("../Images/logo.jpg")} />{" "}
        </Link>
      </Box>
      <Spacer />
      <Box p="2.5rem" w="43%">
        <Stack>
          <Box>
            <Input
              placeholder="Find your favourite products"
              color="black"
              bg={"white"}
              h="2.5em"
            />
          </Box>
        </Stack>
      </Box>
      <Spacer />

      <Box p="2rem">
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color="white"
          >
            <span>
              <Icon as={MdLocationOn} />
            </span>{" "}
            Deliver to Gurugram 122003
          </Button>

          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color="white"
          >
            <Link to="/cart">
              {" "}
              <span>
                <Icon as={BsCartFill} />
              </span>{" "}
              Cart{" "}
            </Link>
          </Button>
          <Button
            as={"a"}
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={"sm"}
            fontWeight={600}
            // color={'white'}

            href={"#"}
          >
            <Link to="/login">Login </Link>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
export default Navbar;
