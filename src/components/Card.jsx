import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Card = ({ img, title, desc, price, addToCart, id }) => {
  return (
    <RouterLink to={`/product/${id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={img} alt={title} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="bold"
            as="h1"
            lineHeight="tight"
            noOfLines={1}
            fontSize="20px"
          >
            {title}
          </Box>

          <Text>{desc}</Text>
          <Box>
            <strong>${price}</strong>
          </Box>
        </Box>
      </Box>
    </RouterLink>
  );
};

export default Card;
