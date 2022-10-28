import { Container, Heading } from '@chakra-ui/react';
import type { NextPageWithLayout } from 'next';

import { TopLayout } from '@/components/layout/TopLayout';

const Home: NextPageWithLayout = () => {
  return (
    <Container maxW="7xl">
      <Heading as="h1" py="4" fontSize="2xl" fontWeight="bold">
        Welcome to Next.js!
      </Heading>
      <Heading as="h2" py="2" fontSize="xl" fontWeight="bold" textColor="gray.900">
        This is a Next.js project using Chakra-UI.
      </Heading>
    </Container>
  );
};

export default Home;

Home.getLayout = (page) => <TopLayout>{page}</TopLayout>;
