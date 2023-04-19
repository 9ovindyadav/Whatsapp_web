import { Box ,Flex} from "@chakra-ui/react";
import { SearchPanel } from "./search-panel";
import { ChatList } from "./chat-list";
import { Header } from "./header";

import Profile from "./profile"


export function LeftPanel(){
    return(
        <Flex direction="column" w={"30%"}>
    
            <Box>
             <Header/>
             <SearchPanel/>
            </Box>
            
             <ChatList overflow="auto" flex="1" />
           
        </Flex>
    );
}