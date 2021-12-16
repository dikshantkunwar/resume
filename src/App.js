import React from 'react';

import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Landing />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   return (
//     <Box as="main" pb={8}>
//       {/* TODO HEAD  */}

//       <Navigation />
      
//       <Container maxW="container.md" pt={14}>
//         <Footer />
//       </Container>
//     </Box>
//   )
  
// }

// export default App;

