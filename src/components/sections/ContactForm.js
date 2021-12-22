import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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

const 
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  USER_ID = process.env.REACT_APP_USER_ID;

export default function ContactForm() {
  const form = useRef();

  const handleSubmit = event =>{
    event.preventDefault();
    emailjs.sendForm(
      SERVICE_ID, 
      TEMPLATE_ID, 
      form.current, 
      USER_ID)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    document.getElementById("contactForm").reset();
  }

  return (
    <Flex w="full" align="center" justifyContent="center" mb="20px">
      <Box p={8} w={{base: "60%", md: "60%", sm: "80%"}} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Contact me</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form id="contactForm" ref={form} onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input 
                type="name" 
                name="user_name"
                placeholder='Your name' 
                />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                name="user_email"
                placeholder='example@email.com'
                />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input 
                name="message"
                placeholder='Your message here' 
                />
            </FormControl>
            <Button width="full" mt={4} type="submit" variantcolor="teal">Submit</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}