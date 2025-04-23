import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaRegPlusSquare, FaRegSun, FaRegMoon } from 'react-icons/fa';

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <Container maxW="1140px" px="4" bg={useColorModeValue("gray.100", "gray.900")} rounded="lg" shadow="lg">
        <Flex
        h="16"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
            base: "column",
            sm: "row"
        }}
        >
            <Text
            bgGradient={useColorModeValue('linear(to-r,rgb(177, 108, 183),rgb(105, 63, 144))', 'linear(to-r,rgb(232, 232, 232),rgb(150, 126, 190))')}
            bgClip='text'
            fontSize={{base: "22", sm: "28"}}
            textTransform="uppercase"
            textAlign="center"
            fontWeight='bold'
            >
                <Link to="/">Product Store 🛒</Link>
            </Text>
            <HStack spacing="2" alignContent="center">
                <Link to="/create">
                    <Button>
                        <FaRegPlusSquare fontSize="20"/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaRegMoon fontSize="20"/> : <FaRegSun fontSize="20"/>}
                </Button>
            </HStack>
        </Flex>
    </Container>
    )
}

export default Navbar