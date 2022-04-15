import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Image,
    Input,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ImagePicker = ({ onChange, title, name, defaultUrl }) => {
    const [file, setFile] = useState(defaultUrl);

    if (!file)
        return (
            <FormControl maxW={"sm"}>
                <FormLabel htmlFor={name}>
                    <Center
                        bg={useColorModeValue("gray.100", "gray.700")}
                        borderRadius={"md"}
                        maxW={"sm"}
                        height="200px"
                        border={"4px dashed"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        _hover={{
                            bg: useColorModeValue("gray.200","gray.700"),
                            cursor: "pointer",
                            borderColor: "gray.400",
                        }}
                    >
                        <Text color={"gray.500"}>{title}</Text>
                    </Center>
                </FormLabel>
                <Input
                    name={name}
                    id={name}
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                        // onChange(e)
                    }}
                    type="file"
                    display={"none"}
                />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        );

    if (file)
        return (
            <VStack  maxW={"sm"}>
                <Image
                    src={URL.createObjectURL(file)}
                    
                    maxW={"sm"}
                    maxH="200px"
                    objectFit={"cover"}
                    border={"4px dashed"}
                    borderColor="gray.300"
                />
                <Button size={"sm"} onClick={() => setFile(null)}>
                    Remove Image
                </Button>
            </VStack>
        );
};

export default ImagePicker;
