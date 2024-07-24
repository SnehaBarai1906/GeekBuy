import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

const Card = ({ img, title, desc, price, addToCart, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={img} alt={title} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>

          <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
{
  /* <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <h3>${price.toFixed(2)}</h3>
      <button onClick={addToCart}>Add to cart</button>
    </div> */
}
