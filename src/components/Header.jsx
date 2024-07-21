import React from 'react';
import { Box, Flex, Image, Button, HStack, InputGroup, InputLeftElement, Input,Menu,IconButton,Text,Spacer,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider} from '@chakra-ui/react';
import { Search2Icon,HamburgerIcon } from '@chakra-ui/icons'; 
import SignIn from './Signin';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <Box bg="rgba(0, 102, 255, 1)" color="white" p={5}>
        <Flex align="center" maxW="1200px" mx="auto">
          <Text fontWeight="bolder" fontSize="larger">Geekbuying</Text>
          
          <InputGroup maxW="700px" mx="auto" ml={3}>
            <Input
              type="text"
              placeholder="Search..."
              bg="white"
              color="black"
              borderRadius="md"
              borderColor="gray.300"
              />
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="blue" />}
              />
          </InputGroup>
          <Box>

          <Text mr={4}>
            <Link to="/signin">
              Hello, Sign in<br></br>
              Account & Order
            </Link>
          </Text>
          
          </Box>
          
        </Flex>
        
      </Box>


      <Box bg="rgba(7, 97, 232, 1)" color="white" p={1}>
        <Flex align="center" maxW="1200px" mx="auto">
        <HStack spacing={4} ml={4} >
        <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='ghost'
            />
            
            <MenuList>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>
              <MenuItem></MenuItem>

            </MenuList>
          </Menu>
          <Button variant="link" color="white">New</Button>
          <Button variant="link" color="white">Best Sellers</Button>
          <Button variant="link" color="white">Brand</Button>
          <Button variant="link" color="white">Clearance</Button>
          <Button variant="link" color="white">Deals</Button>
          <Button variant="link" color="white">Coupon</Button>
          <Button variant="link" color="white">App Only</Button>
        </HStack>
        </Flex>
      </Box >
      <Box>
        <Flex align="center" maxW="800px" mx="auto">
          <Text>Free return</Text>
        </Flex>
      </Box>
    </Box>


       
  );
};

export default Header;
