import { Center, Flex, Heading, Box, Text, AbsoluteCenter, HStack } from "@chakra-ui/react";
import { EncryptedIcon, GeneralIcon } from "../../assets/icons";

export function DefaultPage(props){
    return(
        <Center bg={"#f0f2f5"} borderBottom={"6px solid #436960"} position={"relative"} w={"70%"} {...props}>
            <Flex direction={"column"}>
                <GeneralIcon/>
                <Box>
                    <Heading fontWeight={"light"}>Whatsapp Web</Heading>
                    <Text fontSize={"sm"} mt={"4"}>Send and Receive messages without keeping your phone online <br/>{" "}
                    Use Whatsapp on up to 4 linked devices and 1 Phone </Text>
                </Box>
                <AbsoluteCenter axis="horizontal" bottom={"10"} flex={"1"} mt={"10"}>
                    <HStack justifyItems={"baseline"} color={"#8696a0"}>
                        <EncryptedIcon/>
                        <Text fontSize={"sm"} fontWeight={"medium"}>End-to-end encrypted</Text>
                    </HStack>
                </AbsoluteCenter>

            </Flex>
        </Center>
    );
}