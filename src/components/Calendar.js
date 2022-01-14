import { Box, Flex, Stack, Button } from '@chakra-ui/react'

const Calendar = () => {

    const jan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    return (
        <Box>
            <Flex fontSize='2em' fontFamily='Inconsolata' justify='center'>
            <h2>January</h2>
            </Flex>
            <Flex justify='center'>
                {jan.map(date => <Button width='12px'>{date}</Button>)}
            </Flex>
        </Box>
    );
};

export default Calendar;