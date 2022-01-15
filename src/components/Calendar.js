import { Flex, Button, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


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

    const coolDatesArray = Array.from({length: 31}, (_, i) => i + 1);

    return (
        <Flex  direction={'column'} pt={50} pb='150px'>
            {months.map(month =>
                <Flex direction={'column'} pt='20px' pb='20px'>
                    <Flex fontSize='2em' fontFamily='Inconsolata' justify='center'>
                        <Text>{month.name}</Text>
                    </Flex>
                    <Flex justify='center' pt='15px'>
                    {coolDatesArray.slice(0, month.days).map(date =>
                    <> 
                    <Button m={1} background='none' key={date} width='12px'>{date}
                    </Button>
                    </>
                    )}
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export default Calendar;