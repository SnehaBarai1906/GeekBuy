import React, { useState, useEffect } from "react";
import Card from "./Card";
import {
  Box,
  SimpleGrid,
  Text,
  Select,
  Checkbox,
  Input,
} from "@chakra-ui/react";

const Bestseller = () => {
  const [data, setData] = useState([]);

  // Function to shuffle the array (Fisher-Yates Shuffle)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Fetch random data from data.json
  const fetchRandomData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");
      const result = await response.json();
      console.log("Fetched Data:", result);

      // Shuffle data and select a subset (e.g., 10 items)
      const shuffledData = shuffleArray(result);
      const randomData = shuffledData.slice(0, 10);
      // console.log(randomData);

      setData(randomData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <div>
      {/* Header */}
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        fontWeight="bolder"
        fontSize="30px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mb={4}
      >
        <Text>Best Seller</Text>
      </Box>

      {/* Filter and Sort Section */}
      <Box
        p={4}
        mb={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="50px"
        bg="gray.100"
      >
        <Box display="flex" alignItems="center">
          <Text mr={2}>New Arrived:</Text>
          <Select placeholder="Select days" mr={2}>
            <option value="7">7 days</option>
            <option value="15">15 days</option>
            <option value="30">30 days</option>
          </Select>
          <Text mr={2}>Filter:</Text>
          <Select placeholder="Ship From" mr={2}>
            <option value="local">Local</option>
            <option value="international">International</option>
          </Select>
          <Checkbox mr={2}>In Stock</Checkbox>
          <Checkbox mr={2}>On Sale</Checkbox>
          <Checkbox mr={2}>Free Shipping</Checkbox>
          <Box display="flex" alignItems="center">
            <Text mr={2}>Price:</Text>
            <Input placeholder="Min" w="80px" mr={2} />
            <Input placeholder="Max" w="80px" />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Text mr={2}>Sort By:</Text>
          <Select placeholder="Best Match" mr={2}>
            <option value="best">Best Match</option>
            <option value="new">New Arrival</option>
            <option value="price">Price</option>
          </Select>
        </Box>
      </Box>

      {/* Product Cards Grid */}
      <Box p={4} bg="gray.100" mx="50px" display="flex" justifyContent="center">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          spacing="6"
          maxWidth="1200px"
        >
          {data && data.length > 0 ? (
            data.map(({ id, image, description, title, price }) => (
              <Card
                key={id}
                id={id}
                img={image}
                title={title}
                desc={description}
                price={price}
                addToCart={() => console.log("Added to cart:", id)}
              />
            ))
          ) : (
            <Text>No data available</Text>
          )}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Bestseller;
