import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Box, Heading, Container } from '@chakra-ui/react';

import Carousel from '../components/Carousel';
import Trending from '../components/Trending';

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
    <br></br>
    <Trending />     
      
    </Container>
  );
};

export default Home;
