import React from "react";
import {
  Box,
  Heading,
  Link as ChakraLink,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  Avatar,
} from "@chakra-ui/react";
import useGetBlog from "../hooks/useGetBlog";
import moment from "moment";
import { BACKEND_URL } from "../utils/constants";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Avatar name={props.name} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

const Home = () => {
  const { data } = useGetBlog();
  const { isLoggedIn } = useAuth();
  let blogs = [];
  blogs = isLoggedIn ? data : data.filter((blog) => blog.isDraft === false);
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Top Articles</Heading>
      {blogs
        ?.filter((item) => item.isTop)
        .map((item) => (
          <Link to={`/blog-details/${item._id}`}>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between">
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%">
                  <ChakraLink
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}>
                    <Image
                      borderRadius="lg"
                      src={BACKEND_URL + item.poster}
                      alt="Poster of Blog"
                      objectFit="contain"
                    />
                  </ChakraLink>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}>
                <Heading marginTop="1">
                  <ChakraLink
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}>
                    {item?.title}
                  </ChakraLink>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg">
                  {item?.description}
                </Text>
                <BlogAuthor
                  name={item?.publishedBy?.name}
                  date={moment(item.publishedAt).format("LL")}
                />
              </Box>
            </Box>
          </Link>
        ))}
      <Heading as="h2" marginTop="20">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {blogs
          ?.filter((item) => !item.isTop)
          .map((item) => (
            <Link to={`/blog-details/${item._id}`}>
              <WrapItem
                width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <ChakraLink
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}>
                      <Image
                        transform="scale(1.0)"
                        src={BACKEND_URL + item.poster}
                        alt="Poster of Blog"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </ChakraLink>
                  </Box>
                  <Heading fontSize="xl" marginTop="2">
                    <ChakraLink
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}>
                      {item.title}
                    </ChakraLink>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    {item.description}
                  </Text>
                  <BlogAuthor
                    name={item?.publishedBy?.name}
                    date={moment(item.publishedAt).format("LL")}
                  />
                </Box>
              </WrapItem>
            </Link>
          ))}
      </Wrap>
    </Container>
  );
};

export default Home;
