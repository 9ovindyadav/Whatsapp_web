import { HStack, IconButton, Input, InputGroup, InputLeftElement, Tooltip } from "@chakra-ui/react";
import { FilterIcon, SearchIcon } from "../assets/icons";

export function SearchPanel(){
    return(
<HStack spacing={2} px={"4"} py={"2"} borderBottom={"1px"} borderColor={"#e2e8f0"}>
    <InputGroup>
    <InputLeftElement pointerEvents={"none"} children={<SearchIcon color={"grey.300"}/>}/>
    <Input placeholder="Search or Start New Chat"
    h={"36px"}
    bg={"#f0f2f5"}
    variant={"filled"}
    _placeholder={{
        opacity: 0.6,
        color: "#3b4a54",
        paddingLeft: "14px"
    }}
    _hover={{ bg: "#f0f2f5"}}/>
    </InputGroup>
    <Tooltip label={"Filter Unread Chats"}
    shouldWrapChildren
    bg={"#eae6df"}
    color={"black"}
    fontSize={"xs"}>
        <IconButton>
            <FilterIcon/>
        </IconButton>
    </Tooltip>
</HStack>
    );
}