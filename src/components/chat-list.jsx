import { Avatar, Box, HStack, Stack,StackDivider,chakra ,Flex,Text} from "@chakra-ui/react";
import { DeliveredIcon } from "../assets/icons";

const characterData = [
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    { name: "Govind", 
      message : "Hello how are you",
      seen : true,
      src : " ",
      date : "27/03/2023" 
    },
    
]

export function ChatAccount({name, message, seen,date, src,...rest}){
    return(
        <HStack 
        _hover={{
            cursor: "pointer",
            backgroundColor: "#f5f6f6"
        }}
        py={"3"}
        {...rest}>
            <Avatar mx={"3"} name={name} src={src}/>
            <Box flex={"1"} pr={"4"}>
                <Flex justify="space-between" align="baseline">
                    <Box>
                        <Text fonrWeight="medium">{name}</Text>
                        <HStack>
                            <DeliveredIcon color={ seen ? "#53bdeb" : "#667781"}/>
                            <Text color={"#667781"} fontSize={"sm"}>{message}</Text>
                        </HStack>
                    </Box>
                    <chakra.time fontSize="xs" color="#667781">
                        {date}
                    </chakra.time>
                </Flex>
            </Box>
        </HStack>
    );
}

export function ChatList(props){
    return(
        <Stack spacing={"0"}
        pr={"1"}
        divider={<StackDivider w={"82%"} alignSelf={"flex-end"}/>}
        {...props}>
            {
                characterData.map((item,index)=>(
                    <ChatAccount key={index} src={item.src} date={item.date} name={item.name} message={item.message} seen={item.seen}/>
                ))
            }
        </Stack>
    );
}