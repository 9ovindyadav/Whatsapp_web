import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import { DefaultPage } from "./Right-panel/default_page";
import { ChatHeader } from "./Right-panel/ch_header";
import { ChatContainer } from "../components/Right-panel/chat_container"
import { ChatBottom } from "./Right-panel/chat_bottom"

export function RightPanel(props){

    const click = true;
    return(
    <>
        {
            click ? <Flex direction="column" w={"70%"}>
    
            <Box>
            <ChatHeader/>
            </Box>
            <ChatContainer/>
            <Box>
            <ChatBottom/>
            </Box>
        
            </Flex> : <DefaultPage/>
        }
       
       </>
    );
}