import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Link as ChakraLink,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useAuth from "../hooks/useAuth";

const NavLink = ({ children, type }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}>
    <Link to={`/${type}`}>{children}</Link>
  </ChakraLink>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logOutUser, isLoggedIn, user } = useAuth();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Link to="/">
              <Box>Blogging Site</Box>
            </Link>
            <Box style={{ marginLeft: 30 }}>
              <NavLink type="newsletter">Newsletter</NavLink>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {isLoggedIn ? (
                <NavLink type="create-blog">Write Blog</NavLink>
              ) : null}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {isLoggedIn ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}>
                    <Icon w={10} h={10} as={RiAccountCircleLine} />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar name={user.name} />
                    </Center>
                    <br />
                    <Center>
                      <p>{user.name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>My Blogs</MenuItem>
                    <MenuItem onClick={logOutUser}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <NavLink type="login">Login</NavLink>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
