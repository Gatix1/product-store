import { React, useState } from 'react';
import { Container, VStack, Heading, Box, useColorModeValue, Input, Button } from '@chakra-ui/react';

function CreatePage() {

    const [newProducts, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const handleNewProduct = () => {
        console.log(newProducts);
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
                            value={newProducts.name}
                            onChange={(e) => {setNewProduct({...newProducts, name: e.target.value})}}
                        />
                        <Input
                            placeholder='Price ($)'
                            name="price"
                            value={newProducts.price}
                            onChange={(e) => {setNewProduct({...newProducts, price: e.target.value})}}
                        />
                        <Input
                            placeholder='Image URL'
                            name="image"
                            value={newProducts.image}
                            onChange={(e) => {setNewProduct({...newProducts, image: e.target.value})}}
                        />
                        <Button onClick={handleNewProduct} colorScheme='purple' w="full">Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage