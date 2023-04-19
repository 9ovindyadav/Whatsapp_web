import { Center, Flex, Heading, Box, Text, AbsoluteCenter, HStack, Avatar,IconButton,Tooltip } from "@chakra-ui/react";
import { CommunityIcon, SearchIcon, } from "../../assets/icons";

const iconData = [
    {icon : <SearchIcon  />, label : "Search"},
    {icon : <CommunityIcon/>, label : "Menu"},
    
];

export function CustomTooltip({icon,label}){
    return(
        <Tooltip 
        shouldWrapChildren 
        label={label} 
        bg={"#eaebdf"} 
        color={"black"} 
        fontSize={"xs"} 
        > 
            <IconButton color={"black"} variant={"ghost"} >{icon}</IconButton>
        </Tooltip>
    );
}


export function ChatHeader({name,src,}){
    return(<HStack
        bg={"#f0f2f5"}
        justify={"space-between"}
        px={"2"}
        mx={"1"}
        py={"4"}
        borderBottom={"1px solid #d0dbd3"}
        color={"#54656f"}
        >
            
            <HStack px={"4"} spacing={"4"} > 
               <Avatar boxSize={"40px"} src={src}/>
               <Heading fontSize={"2xl"} fontWeight={"400"}>{"Govind Yadav"}</Heading>
               </HStack>
            

            <HStack spacing={"8"}>
              {
                iconData.map((item,index)=>(
                    <CustomTooltip  key={index} icon={item.icon} label={item.label}/>
                ))
              }
           </HStack>   

           </HStack>
               

            
    
    );
}