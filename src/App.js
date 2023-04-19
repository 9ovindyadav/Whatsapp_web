import { Flex } from "@chakra-ui/react";
import { LeftPanel } from "./components/left-panel";
import { RightPanel } from "./components/right-panel";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import {Home} from "./home"
import { Profile } from "./components/profile";

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
</Router>
   
  );
}

export default App;
