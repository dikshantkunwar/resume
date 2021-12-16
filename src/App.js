import React from 'react';
import './App.css';
// import profilePic from './profile.jpg'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Box, Container,} from '@chakra-ui/react'
// import ArticleList from './components/ArticleList';


function App() {
  return (
    <Box as="main" pb={8}>
      {/* TODO HEAD  */}

      <Navigation />
      
      <Container maxW="container.md" pt={14}>
        <Footer />
      </Container>
    </Box>
  )
  
}

export default App;

