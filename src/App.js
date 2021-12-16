import './App.css';
import profilePic from './profile.jpg'
import Education from './components/Education';
import Experience from './components/Experience';
import Navigation from './components/Navigation';
import Skills from './components/Skills'
import Footer from './components/Footer';

import { Container, Flex, Button, useColorMode } from '@chakra-ui/react'


function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Navigation pic={profilePic} />

      <Container maxWidth="container.sm" padding={0} bg="grey.50">
        
        <Flex h="100vh" py={20} flexDirection="column">
          ABC
          <Button onClick={toggleColorMode}> Toggle dark theme </Button>
        </Flex>
      </Container>
      {/* <section> 
        <Skills />
        <Education />
        <Experience />
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
