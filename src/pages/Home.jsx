import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Box, Heading, Container } from '@chakra-ui/react';
//import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';

const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with the actual API endpoint
//     axios.get('https://api.example.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the products!', error);
//       });
//   }, []);

  return (
    <Container maxW="1200px" p={4}>
    <Carousel />

      
      {/* <ProductList products={products} /> */}
    </Container>
  );
};

export default Home;
