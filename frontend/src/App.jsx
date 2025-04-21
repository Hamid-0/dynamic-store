import { Box, Button } from "@chakra-ui/react"
import { Route,Routes } from "react-router-dom"
function App() {

  return (
    <Box minH={"100vh"}>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/create" element={<CreatePage />}></Route>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
