import { Button, HStack,Input } from "@chakra-ui/react";
import { NewChatIcon,MenuIcon,StatusIcon } from "../../assets/icons";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs" 
 
export function ChatBottom(){
    return(
       <HStack className="chatInput" spacing={5} px={"4"} py={"3"} bg={"#b6b8ba"} mx={"1"}> 
       <BsEmojiSmile/>
       <AiOutlinePaperClip/>
       
        <Input placeholder="Enter Your Message"
               h={"55px"}
               bg={"#f0f2f5"}
              
            />
            <Button>Send</Button>
       </HStack>
    );
}