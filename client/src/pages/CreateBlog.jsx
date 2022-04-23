import {
    Button,
    Center,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Input,
    Switch,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router";
import Editor from "../components/Editor";
import ImagePicker from "../components/ImagePicker";
import useAuth from "../hooks/useAuth";

const CreateBlog = () => {
    const { isLoggedOut } = useAuth();
    if (isLoggedOut) return <Navigate to="/" />;
    return (
        <Container maxW="7xl" py={4}>
            <HStack
                justifyContent={"space-between"}
                alignItems={"center"}
                py={4}
            >
                <Heading>Create Blog</Heading>
                <HStack>
                    <Button size={"lg"} colorScheme={"teal"}>
                        Save
                    </Button>
                    <HStack bg="gray.100" p={4} rounded="full">
                        <Text fontWeight={"bold"} color="gray.600">
                            Published
                        </Text>
                        <Switch colorScheme={"green"} size={"lg"} />
                    </HStack>
                </HStack>
            </HStack>
            <VStack mt={4} spacing={"4"}>
                <FormControl>
                    <FormLabel htmlFor="title">Blog Title</FormLabel>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Your blog title goes here"
                    />
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="description">
                        Blog Description
                    </FormLabel>
                    <Textarea
                        id="description"
                        type="text"
                        placeholder="Your blog description goes here"
                    />
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </FormControl>
                <HStack w="full" alignItems={"flex-start"}>
                    <ImagePicker
                        name={"poster"}
                        title={"Choose poster image"}
                    />
                </HStack>
                <Editor />
            </VStack>
        </Container>
    );
};

export default CreateBlog;
