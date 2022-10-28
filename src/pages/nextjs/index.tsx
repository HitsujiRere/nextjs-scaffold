import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Heading as="h1" py="4" fontSize="2xl" fontWeight="bold">
        Welcome to App!
      </Heading>
    </Box>
  );
};

export default Home;
