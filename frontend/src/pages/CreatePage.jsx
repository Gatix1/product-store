import { React, useState } from 'react';
import { Container, VStack, Heading, Box, useColorModeValue, Input, Button, useToast } from '@chakra-ui/react';
import { useProductStore } from '../store/product';

function CreatePage() {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const {createProduct} = useProductStore();
    const toast = useToast();

    const handleNewProduct = async () => {
        const { success, message } = await createProduct(newProduct);

        success ? toast({
            title: "Success",
            description: message,
            status: "success",
            duration: 3000,
            isClosable: true
        }) : toast({
            title: "Error",
            description: message,
            status: "error",
            duration: 3000,
            isClosable: true
        })
    }


    return (
        <Container maxW="container.sm">
            <VStack
            spacing="8">
                <Heading as="h1" size="2xl" textAlign="center" mb="8" mt="16">Create New Product</Heading>
                <Box
                w="full"
                bg={useColorModeValue("gray.100", "gray.900")}
                p="6"
                rounded="lg"
                shadow="md">
                    <VStack spacing="4">
                        <Input
                            placeholder='Product Name'
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => {setNewProduct({...newProduct, name: e.target.value})}}
                        />
                        <Input
                            placeholder='Price ($)'
                            name="price"
                            value={newProduct.price}
                            onChange={(e) => {setNewProduct({...newProduct, price: e.target.value})}}
                        />
                        <Input
                            placeholder='Image URL'
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => {setNewProduct({...newProduct, image: e.target.value})}}
                        />
                        <Button onClick={handleNewProduct} colorScheme='purple' w="full">Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage