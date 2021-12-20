import React from 'react';
import
{
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react' 

export default function ContactForm() {

  const handleSubmit = event =>{
    event.preventDefault();
    console.log(`name: ${name}, email: ${email}, message: ${message}`);
    //TODO where does this message go
  }

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Contact me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="name" placeholder='Your name' />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder='example@email.com' />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input type="message" placeholder='Your message here' />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="teal">Submit</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}