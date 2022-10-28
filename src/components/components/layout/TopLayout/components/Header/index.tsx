import {
  Box,
  Container,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';

import { Link } from '@/components/atoms/Link';

export const Header = () => {
  return (
    <Box bg="white">
      <Container maxW="7xl" borderBottom="2px" borderBottomColor="gray.200" px="4" py="6">
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Link href="/" fontSize="xl" fontWeight="medium" textColor="gray.600">
              Application
            </Link>
          </Box>
          <Flex columnGap="10" alignItems="center">
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Box>
                  <Link href="/nextjs" fontWeight="medium" textColor="gray.600">
                    Application
                  </Link>
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <VStack align="stretch">
                    <Link href="/nextjs/form">
                      <Box
                        p="4"
                        borderRadius="lg"
                        cursor="pointer"
                        _hover={{
                          bg: 'green.50',
                        }}
                      >
                        Form
                      </Box>
                    </Link>
                    <Link href="/nextjs/sine-cat">
                      <Box
                        p="4"
                        borderRadius="lg"
                        cursor="pointer"
                        _hover={{
                          bg: 'green.50',
                        }}
                      >
                        Sine cat wave
                      </Box>
                    </Link>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Link href="/nextjs/form" fontWeight="medium" textColor="gray.600">
              Form
            </Link>
            <Link href="/nextjs/sine-cat" fontWeight="medium" textColor="gray.600">
              Sine cat wave
            </Link>
          </Flex>
          <Flex columnGap="10" alignItems="center">
            <Link href="/nextjs" fontWeight="medium" textColor="gray.600">
              Sign in
            </Link>
            <Link
              href="/nextjs"
              rounded="md"
              bg="blue.600"
              px="4"
              py="2"
              fontWeight="medium"
              textColor="white"
              shadow="sm"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Sign up
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
