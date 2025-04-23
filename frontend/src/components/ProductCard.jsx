import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast, Modal, useDisclosure, ModalOverlay, ModalBody, Button, ModalContent, ModalCloseButton, ModalHeader, VStack, Input, ModalFooter } from '@chakra-ui/react';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { React, useEffect, useState } from 'react'
import { useProductStore } from '../store/product';

function ProductCard(props) {
    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    let [ updatedProduct, setUpdatedProduct ] = useState({
        name: "",
        price: 0,
        image: ""
    });

    useEffect(() => {
        setUpdatedProduct(props.product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDeleteProduct = async () => {
        const {success, message} = await deleteProduct(props.product._id);
        success ? (
            toast({
                title: "Product deleted.",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true
            })
        ) : (
            toast({
                title: "Error.",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true
            })
        )
    }

    const handleUpdateProduct = async () => {
        const {success, message} = await updateProduct(props.product._id, updatedProduct);
        success ? (
            toast({
                title: "Product updated.",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true
            })
        ) : (
            toast({
                title: "Error.",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true
            })
        );
    }

    return (
        <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        bg={useColorModeValue("gray.100", "gray.700")}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        p="2"
        >
            <Image
                src={props.product.image}
                alt={props.product.name}
                objectFit="cover"
                w="full"
                h="300px"
                rounded="lg"> 
            </Image>
            <Box p="4">
                <Heading as="h3" size="lg" mb="2">{props.product.name}</Heading>
                <Text fontWeight="bold" fontSize="xl" mb="4">${props.product.price}</Text>
            </Box>
            <HStack spacing="2">
                <IconButton icon={<MdModeEdit/>} onClick={onOpen} fontSize="20" colorScheme="purple" p="1" ms="4" mb="4"/>
                <IconButton icon={<MdDelete/>} onClick={handleDeleteProduct} fontSize="20" colorScheme="red" p="1" mb="4"/>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Edit Product</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack spacing="4">
                            <Input
                                placeholder="Product Name"
                                name="name"
                                type="text"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}/>
                            <Input
                                placeholder="Price ($)"
                                name="price"
                                type="number"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
                            <Input
                                placeholder="Image URL"
                                name="image"
                                type="text"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}/>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleUpdateProduct} colorScheme='purple' me="2" w="full">Update</Button>
                        <Button onClick={onClose} colorScheme='red' w="full">Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ProductCard;