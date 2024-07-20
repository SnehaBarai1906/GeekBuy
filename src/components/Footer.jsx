import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Input,
  Button,
  Image,
  SimpleGrid,
  Divider,
  Icon,
} from '@chakra-ui/react';
//import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box bg="gray.100" p={10}>
      <VStack spacing={10} align="stretch">
        <Flex justify="center" align="center" direction={{ base: 'column', md: 'row' }}>
          <Text fontSize="lg" fontWeight="bold" color="blue.600">
            Why buy from Geekbuying?
          </Text>
          <Box w="100%" maxW="500px" mt={{ base: 4, md: 0 }} ml={{ md: 4 }}>
            <Input
              placeholder="Enter email to get ₹5067.66 OFF (coupon * 5) and 3 G-coins worth ₹253.38"
              bg="white"
              borderColor="blue.400"
            />
          </Box>
          <Button colorScheme="blue" ml={2} mt={{ base: 4, md: 0 }}>
            Subscribe
          </Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} margin="40px">
          <VStack align="flex-start" fontSize="13px">
            <Text fontWeight="bold">Help</Text>
            <Link>How to order</Link>
            <Link>How to track</Link>
            <Link>About us</Link>
            <Link>Contact us</Link>
            <Link>Warranty</Link>
            <Link>FAQs</Link>
            <Link>Order status</Link>
            <Link>Sitemap</Link>
          </VStack>
          <VStack align="flex-start" fontSize="13px">
            <Text fontWeight="bold">Support</Text>
            <Link>Shipping guide</Link>
            <Link>Payment information</Link>
            <Link>Wholesale</Link>
            <Link>Drop shipping</Link>
            <Link>Affiliates</Link>
            <Link>Blog</Link>
          </VStack>
          <VStack align="flex-start" fontSize="13px">
            <Text fontWeight="bold">Policies</Text>
            <Link>Terms & conditions</Link>
            <Link>Return policy</Link>
            <Link>Privacy</Link>
            <Link>Declaration</Link>
            <Link>Customs</Link>
          </VStack>
          <VStack align="flex-start">
            <Text fontWeight="bold">Download The App</Text>
            <Image src="https://via.placeholder.com/150" alt="QR Code" boxSize="100px" />
          </VStack>
        </SimpleGrid>
      </VStack>
     </Box>
  );
};

export default Footer;
