import { Container, VStack, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard.jsx';

function HomePage() {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts, products]);


  return (
    <Container maxW='container.xl' py="12">
        <VStack spacing="8">
            <Heading as="h1" size="2xl" textAlign="center" mb="8">Current Products</Heading>

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 4
                }}
                spacing="10"
                w="full">
                    {products.map( (product) => ( !product ? null :
                            <ProductCard key={product._id} product={product} />
                    ))}
            </SimpleGrid>

            {products.length === 0 ? (
                <Text fontSize="3xl" textAlign="center" fontWeight="bold" color="gray.500">
                    No products found {":("} <br/>
                    <Link to="/create">
                        <Text as="span" color="purple.500" _hover={{textDecoration: "underline"}}>Create a new product</Text>
                    </Link>
                </Text> ) : null}
        </VStack>
    </Container>
  )
}

export default HomePage