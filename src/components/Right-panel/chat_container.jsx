import { Box,Text, Container, Divider, HStack,Stack, VStack,StackDivider} from "@chakra-ui/react";
import { DeliveredIcon } from "../../assets/icons"
import { useEffect,useRef,useState     } from "react";

function Chat({message,seen,time,user="other"}){

    return(
        <HStack maxW={"80%"} 
                borderRadius={"12"} 
                p={"3"} 
                alignSelf={ user==="me" ? "flex-end" : "flex-start"} 
                bg={"#a2a6a3"} 
                mx={"12"}
                mb={"2"} 
                >
        
               <p>{"where do you live"}</p>
            
            <HStack alignSelf={"baseline"} bg={"inherit"} >
        
               <p style={{fontSize: "15px"}}>{"2.03 pm"}</p>
               <DeliveredIcon  color={ seen ? "#53bdeb" : "#667781"}/>
            </HStack>
            
        </HStack>
    );
}

export function ChatContainer(props){
    return(
    <Stack border={"1px solid black"} 
           overflow={"auto"} 
           h={"75vh"} 
           divider={<StackDivider border={"none"} w={"100%"}/>}
           mx={"1"}>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           </Stack>
    );
}