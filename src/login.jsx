import { Button, Center,Box, VStack } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi"

export function Login(){
    return (
            <VStack h={"100vh"} justifyContent={"center"} spacing={2}>
            <Button w={"200px"} colorScheme="blue"><FiLogIn/>{"Login"}</Button>
            </VStack>
    
    );
}