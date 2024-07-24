import React from 'react';
import { Box,Image,Text,Link } from '@chakra-ui/react'
import { px } from 'framer-motion';

const Card = ({ img, title, desc, price, addToCart ,id}) => {
  return (
    
      <Box maxW='sm' bg="white" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={img} alt={title} />

  
        <Box p='6'>
  
          <Box
            mt='1'
            fontWeight='bolder'
            as='h1'
            lineHeight='tight'
            noOfLines={1}
            fontSize='20px'
          >
          {title}
          </Box>
          <Text>
            {desc}       
        </Text>
          <Box>
            <strong>${price}</strong> 
            {/* <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box> */}
          </Box>

          <Box>

          </Box>

        </Box>
      </Box>
   
  );
};

export default Card;
{/* <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <h3>${price.toFixed(2)}</h3>
      <button onClick={addToCart}>Add to cart</button>
    </div> */}