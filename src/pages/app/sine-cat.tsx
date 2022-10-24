import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Heading as="h1" py="4" fontSize="2xl" fontWeight="bold">
        Welcome to Sine wave cat!
      </Heading>

      <VStack align="start" spacing="4">
        {[...Array(50)].map((_, i) => (
          <Text key={i} textColor="gray.700">
            にゃ{'～'.repeat((Math.sin(i / 3) + 1) * 8)}ん ฅ•ω•ฅ
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Home;
