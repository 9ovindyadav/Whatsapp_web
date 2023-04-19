import { Flex } from "@chakra-ui/react";
import { LeftPanel } from "./components/left-panel";
import { RightPanel } from "./components/right-panel";
import { Login } from "./login";

export function Home(props){

    const user = true ;
    return(
       <>
       {
            user ? (<Flex h={"100vh"}>
            <LeftPanel/>
            <RightPanel/>
            </Flex>) : <Login/>
       }
       </>
    );
}