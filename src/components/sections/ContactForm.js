import React, { useState } from 'react';
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

  const [contactName, setcontactName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event =>{
    event.preventDefault();
    console.log(`name: ${contactName}, email: ${email}, message: ${message}`);
    //TODO where does this message go
  }

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Contact me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input 
                type="name" 
                placeholder='Your name' 
                onChange={event => setcontactName(event.currentTarget.value)}/>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                placeholder='example@email.com'
                onChange={event => setEmail(event.currentTarget.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input 
                type="message" 
                placeholder='Your message here' 
                onChange={event => setMessage(event.currentTarget.value)}/>
            </FormControl>
            <Button width="full" mt={4} type="submit" variantColor="teal">Submit</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}