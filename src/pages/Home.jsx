// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Heading, Container } from '@chakra-ui/react';
// import ProductList from '../components/ProductList';

// const Home = () => {
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

//   return (
//     <Container maxW="1200px" p={4}>
//       <Heading as="h1" size="xl" mb={4}>Welcome to Geekbuying Clone</Heading>
//       <ProductList products={products} />
//     </Container>
//   );
// };

// export default Home;
