import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="#edf2f6" color="#1c1b1bff" py={20} px={10} minH='100vh'>
        <VStack mb={10}>
          <Text fontWeight="bold" textStyle="4xl">
            Our Clients Speak
          </Text>
          <Text>We have been working with clients around the world</Text>
        </VStack>
        <Grid
          gap={10}
          gridTemplateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
        >
          <VStack textAlign="center">
            <Box
              maxW="md"
              background="white"
              shadow="sm"
              p={10}
              borderRadius="sm"
            >
              <Text textStyle="3xl" fontWeight="bold">
                Efficient collborating
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sit laudantium voluptate porro repudiandae quos, cumque aut
                quibusdam vero asperiores.
              </Text>
            </Box>
            <Box w={50} h={50} borderRadius="full" overflow="hidden">
              <Image
                objectFit="cover"
                src="https://i.pinimg.com/236x/f1/8c/6a/f18c6a866401d1f606f422d60675f92f.jpg"
              ></Image>
            </Box>
            <Text textStyle="2xl" fontWeight="bold">
              Jaqline julliot
            </Text>
            <Text>CEO at bankrupt startup</Text>
          </VStack>
          <VStack textAlign="center">
            <Box
              maxW="md"
              background="white"
              shadow="sm"
              p={10}
              borderRadius="sm"
            >
              <Text textStyle="3xl" fontWeight="bold">
                Efficient collborating
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sit laudantium voluptate porro repudiandae quos, cumque aut
                quibusdam vero asperiores.
              </Text>
            </Box>
            <Box w={50} h={50} borderRadius="full" overflow="hidden">
              <Image
                objectFit="cover"
                src="https://i.pinimg.com/236x/f1/8c/6a/f18c6a866401d1f606f422d60675f92f.jpg"
              ></Image>
            </Box>
            <Text textStyle="2xl" fontWeight="bold">
              Jaqline julliot
            </Text>
            <Text>CEO at bankrupt startup</Text>
          </VStack>
          <VStack textAlign="center">
            <Box
              maxW="md"
              background="white"
              shadow="sm"
              p={10}
              borderRadius="sm"
            >
              <Text textStyle="3xl" fontWeight="bold">
                Efficient collborating
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                sit laudantium voluptate porro repudiandae quos, cumque aut
                quibusdam vero asperiores.
              </Text>
            </Box>
            <Box w={50} h={50} borderRadius="full" overflow="hidden">
              <Image
                objectFit="cover"
                src="https://i.pinimg.com/236x/f1/8c/6a/f18c6a866401d1f606f422d60675f92f.jpg"
              ></Image>
            </Box>
            <Text textStyle="2xl" fontWeight="bold">
              Jaqline julliot
            </Text>
            <Text>CEO at bankrupt startup</Text>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default App;
