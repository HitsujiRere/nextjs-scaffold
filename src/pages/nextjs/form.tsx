import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
};

const Home: NextPage = () => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(null);
      }, 1000);
    });
  };

  return (
    <VStack align="start">
      <Heading as="h1" py="4" fontSize="2xl" fontWeight="bold">
        Welcome to Form using React-Hook-Form!
      </Heading>

      <Stack as="form" onSubmit={handleSubmit(onSubmit)} width="full">
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            {...register('email', { required: 'Email is required!' })}
            bg="white"
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>

        <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </VStack>
  );
};

export default Home;