import './App.css';
import profilePic from './profile.jpg'
import Education from './components/Education';
import Experience from './components/Experience';
import Navigation from './components/Navigation';
import Skills from './components/Skills'
import Footer from './components/Footer';

import { Box, Container,} from '@chakra-ui/react'
import ArticleList from './components/ArticleList';


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

/*
return (
    <Container>
      <Navigation pic={profilePic} />
      
      <Container 
        maxWidth="container.sm" 
        padding={0} 
        bg="grey.50"
        marginTop="1em">
        <ArticleList />
      </Container>
      <Footer />
    </Container>
  );
   */
