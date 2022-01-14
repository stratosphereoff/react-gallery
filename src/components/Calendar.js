import { Box, Flex, Stack, Button, Text } from '@chakra-ui/react'

const Calendar = () => {

    const months = [
        {name: 'January', days: 31},
        {name: 'February', days: 28},
        {name: 'March', days: 31},
        {name: 'April', days: 30},
        {name: 'May', days: 31},
        {name: 'June', days: 30},
        {name: 'July', days: 31},
        {name: 'August', days: 31},
        {name: 'September', days: 30},
        {name: 'October', days: 31},
        {name: 'November', days: 30},
        {name: 'December', days: 31}
    ];

    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


    return (
        <Flex  direction={'column'} pt={50} pb='150px'>
            {months.map(month =>
                <Flex direction={'column'} pt='20px' pb='20px'>
                    <Flex fontSize='2em' fontFamily='Inconsolata' justify='center'>
                        <Text>{month.name}</Text>
                    </Flex>
                    <Flex justify='center' pt='15px'>
                    {dates.slice(0, month.days).map(date => <Button m={1} background='none' key={date} width='12px'>{date}</Button>)}
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export default Calendar;