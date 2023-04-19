import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Tooltip, VStack, useDisclosure } from "@chakra-ui/react"
import { MenuIcon,CommunityIcon, NewChatIcon, StatusIcon} from "../assets/icons.jsx"
import { Link } from "react-router-dom";

const iconData = [
    {icon : <MenuIcon/>, label : "Community chat"},
    {icon : <StatusIcon/>, label : "Status"},
    {icon : <NewChatIcon/>, label : "New Chat"},
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
            <IconButton variant={"ghost"} >{icon}</IconButton>
        </Tooltip>
    );
}

export function Header(){

const {isOpen,onClose,onOpen} = useDisclosure();

    return(
        <Flex 
        bg={"#f0f2f5"}
        justify={"space-between"}
        px={"2"}
        py={"4"}
        borderRight={"1px solid #f2f2f2"}
        color={"#54656f"}
        >
            <Link to={"/profile"} >
        <button>
        <Avatar  name="Govind" src={""}/>
        </button></Link>
        
        <HStack spacing={"3"}>
            {
                iconData.map((item,index)=>(
                    <CustomTooltip key={index} icon={item.icon} label={item.label}/>
                ))
            }
        </HStack>
        </Flex>
    );
}