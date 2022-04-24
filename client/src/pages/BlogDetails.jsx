import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useAuth from "../hooks/useAuth";
import PosterImage from "../assets/img/Ws1s82d-avengers-wallpaper-hd.jpg";

const BlogDetails = () => {
  const { user } = useAuth();
  return (
    <Container maxW={"5xl"} p="12">
      <Box>
        <Box>
          <HStack>
            <Avatar name="Sanket Kulkarni" />
            <VStack style={{ marginLeft: 20 }} alignItems={"start"}>
              <Text as={"b"}>Sanket Kulkarni</Text>
              <Box>
                <HStack>
                  <Text as={"abbr"} color="#c7c7c7" fontSize={"15"}>
                    Mar 22, 2022
                  </Text>
                  <Text as={"abbr"} color="#c7c7c7" fontSize={"15"}>
                    {" "}
                    . 2 min read
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </HStack>
        </Box>
        <Box marginTop={"8"}>
          <Heading>This is test blog</Heading>
          <Image
            src={PosterImage}
            alt="Poster Image"
            height={"100%"}
            width={"100%"}
            marginTop={"5"}
          />
          <Box marginTop={"10"}>
            <Text fontSize={"20"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br />
            <Text fontSize={"20"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br />
            <Text fontSize={"20"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br />
            <Text fontSize={"20"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetails;
