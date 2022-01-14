import { Box, Container, Flex, Heading } from '@chakra-ui/react'

const Header = () => {
    return (
        <Box bg='black' w='100%' p={10} color='white'>
            <Container maxW="container.lg"> 
                <Flex as="header-box">
                    <Heading fontFamily='Inconsolata' letterSpacing='25px' fontSize='60px' align="center">Image Gallery</Heading>
                </Flex>
            </Container>
        </Box>
    );
  };
  
  export default Header;