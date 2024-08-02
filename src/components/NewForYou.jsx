import React from "react";
import { Box, Center } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const NewForYou = () => {
  return (
    <Box bg="white" w="100%" p={4} color="white">
      {/* <Heading color="black" >
        Trending Categories
      </Heading> */}
      <Flex>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://img.gkbcdn.com/p/2024-05-07/Apexel-200X-Phone-Microscope-Lens-White-524422-0._w280_p1_.jpg"
              borderRadius="none"
            />
            <Stack mt="6" spacing="3">
              <Text>
                Apexel 200X Phone Microscope Lens with CPL, Adjustable LED
                Lights
              </Text>
              <Heading size="md">$304</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Spacer />
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://img.gkbcdn.com/p/2024-04-03/FNIRSI-HS-02-Electric-Soldering-Iron-Blue-524106-0._w280_p1_.jpg"
              borderRadius="none"
            />
            <Stack mt="6" spacing="3">
              <Text>
                FNIRSI HS-02 Electric Soldering Iron, 0.96" HD Color Screen, PD
                100W
              </Text>
              <Heading size="md">$313</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Spacer />
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://img.gkbcdn.com/p/2024-06-20/onexgpu-e-gpu-dock-8gb-aeab9a-1718875012053._w280_p1_.jpg"
              borderRadius="none"
            />
            <Stack mt="6" spacing="3">
              <Text>
                (Free Gift OCulink Cable Bag Cleaning Tool) One Netbook ONEXGPU
                e-GPU
              </Text>
              <Heading size="md">$626</Heading>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default NewForYou;
