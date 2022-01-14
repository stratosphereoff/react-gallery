import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box bg='black' w='100%' p={10} color='white'>
            <Container maxW="container.lg"> 
                <Flex as="header-box">
                    <Text fontFamily='Inconsolata' fontSize='15px' align="center">© 2022 gree</Text>
                </Flex>
            </Container>
        </Box>
    );
  };
  
  export default Footer;