import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react"
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegSun } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode();    
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={
                    {
                        base: "column",
                        sm: "row"
                    }
                }
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Dynamic Store 🛒</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <BsFillPlusSquareFill fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ?<FaRegSun fontSize={20} />: <IoMoonSharp fontSize={20}/>} 
                    </Button>

                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar