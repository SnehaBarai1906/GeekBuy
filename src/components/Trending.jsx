import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Spacer,Card,CardBody,Stack,Heading,Image,Text } from '@chakra-ui/react';


const Trending = () => {
    return (
        
        <Box bg='white' w='100%' p={4} color='white'>
            {/* <Heading>Trending Categories</Heading> */}
            <Flex>
                <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://img.gkbcdn.com/bn/2407/488x274-1-6698891b2b40c945a4a73ce7._p1_.jpg'                    
                    borderRadius='none'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Tech For Top Grades</Heading>
                    <Text>
                        Equip with the best tools for learning. Power with the school with top twch.
                    </Text>
                    
                    </Stack>
                </CardBody>
                </Card>
                <Spacer />
                <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://img.gkbcdn.com/bn/2407/488x274-6699c3352b40c96e70751d2f._p1_.jpg'                    
                    borderRadius='none'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Innovate School projects</Heading>
                    <Text>
                        Equip with the best tools for learning. Power with the school with top twch.
                    </Text>
                    
                    </Stack>
                </CardBody>
                </Card>
                <Spacer />
                <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://img.gkbcdn.com/bn/2407/488x274-2-669888f22b40c945a4a73ce3._p1_.jpg'                    
                    borderRadius='none'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Smart living. Smart learnings</Heading>
                    <Text>
                        Equip with the best tools for learning. Power with the school with top twch.
                    </Text>
                    
                    </Stack>
                </CardBody>
                </Card>


            </Flex>  
            
        </Box>
        
    );
}

export default Trending;
