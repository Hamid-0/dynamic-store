import {
    Box, Image, Heading, Text, HStack, IconButton, useColorModeValue, useToast, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    VStack,
    Input
} from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useProductStore } from "../store/product";
import { useRef, useState } from "react";

const ProductCard = ({ product }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null);
    const { deleteProduct,updateProduct } = useProductStore()
    const toast = useToast()
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const handleDelete = async () => {
        const { success, message } = await deleteProduct(product._id)
        if (success) {
            toast({
                title: message,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }
        else {
            toast({
                title: 'Failed To Delete Product',
                description: message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }
    const handleUpdate = async (pid, updatedProduct)=>{
        await updateProduct(pid, updatedProduct)
        onClose();
    }
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >

            <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />

            <Box
                p={4}

            >
                <Heading as={"h3"} size={'md'} mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<MdOutlineEdit />} colorScheme="blue" ref={finalRef} tabIndex={-1} onClick={onOpen} />
                    <IconButton icon={<MdOutlineDelete />} onClick={handleDelete} colorScheme="red" />
                </HStack>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack
                                spacing={4}
                            >
                                <Input placeholder="Product Name"
                                    name="name"
                                    value={updatedProduct.name}
                                    onChange={(e)=>setUpdatedProduct({...updatedProduct,name: e.target.value})}
                                />
                                <Input placeholder="Price"
                                    name="price"
                                    value={updatedProduct.price}
                                    onChange={(e)=>setUpdatedProduct({...updatedProduct,price: e.target.value})}
                                />
                                <Input placeholder="Image URL"
                                    name="image"
                                    value={updatedProduct.image}
                                    onChange={(e)=>setUpdatedProduct({...updatedProduct,image: e.target.value})}
                                />

                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={()=>handleUpdate(product._id, updatedProduct)} >
                                Save
                            </Button>
                            <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}
export default ProductCard;