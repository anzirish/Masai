import "./App.css";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container maxW="md" py={8}>
        <Box
          bg="white"
          border="3px solid"
          borderColor="#a59b9bff"
          borderRadius="xl"
          p={8}
          textAlign="center"
          shadow="lg"
          position="relative"
        >
          <Box position="relative" display="inline-block" mb={6}>
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              border="4px solid white"
              shadow="lg"
              overflow="hidden"
              mx="auto"
              bg="gray.200"
              position="relative"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJ6An58ImvDhVkNrHkfCyH594bmqe03ierA&s"
                alt="Lindsey James"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              position="absolute"
              bottom="0"
              right="0"
              w="20px"
              h="20px"
              bg="green.400"
              borderRadius="full"
              border="3px solid white"
            />
          </Box>

          <VStack spacing={1} mb={6}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="black"
              letterSpacing="-0.025em"
            >
              Lindsey James
            </Text>
            <Text color="gray.500" fontSize="md" fontWeight="bold">
              @lindsey_jam3s
            </Text>
          </VStack>

          <VStack spacing={1} mb={8}>
            <Text color="black" fontSize="md" lineHeight="1.6">
              Actress, musician, songwriter
            </Text>
            <Text color="black" fontSize="md" lineHeight="1.6">
              and artist. PM for work inquires
            </Text>
            <Text color="black" fontSize="md" lineHeight="1.6">
              or
            </Text>
            <Text color="blue.500" fontSize="md" fontWeight="medium">
              #tag
            </Text>
            <Text color="black" fontSize="md" lineHeight="1.6">
              me in your posts
            </Text>
          </VStack>

          <Flex justify="center" wrap="wrap" gap={2} mb={8}>
            <Box
              bg="gray.100"
              color="black"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
            >
              #ART
            </Box>
            <Box
              bg="gray.100"
              color="black"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
            >
              #PHOTOGRAPHY
            </Box>
            <Box
              bg="gray.100"
              color="black"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
            >
              #MUSIC
            </Box>
          </Flex>

          <HStack spacing={4} justify="center">
            <Button
              size="lg"
              variant="outline"
              borderColor="gray.300"
              color="black"
              bg="gray.100"
              _hover={{
                bg: "gray.200",
                transform: "translateY(-1px)",
                shadow: "sm",
              }}
              px={8}
              borderRadius="full"
              fontWeight="medium"
            >
              Message
            </Button>
            <Button
              size="lg"
              colorScheme="blue"
              color="white"
              bg="blue.500"
              _hover={{
                bg: "blue.600",
                transform: "translateY(-1px)",
                shadow: "md",
              }}
              px={8}
              borderRadius="full"
              fontWeight="medium"
            >
              Follow
            </Button>
          </HStack>
        </Box>
      </Container>
    </>
  );
}

export default App;
