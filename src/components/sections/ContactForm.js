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
  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Contact me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder='Your name' />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" placeholder='example@email.com' />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input type="text" placeholder='Your message here' />
            </FormControl>
            <Button width="full" mt={4} type="submit">Submit</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}