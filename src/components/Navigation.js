import React from 'react';

import { 
  Box,
  Container,
  useColorModeValue,
  Flex,
  Heading, 
  Stack,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'

import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

// const LinkItem = ({ href, path, _target, children, ...props }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//   return (
//     <Link
//       p={2}
//       bg={active ? 'grassTeal' : undefined}
//       color={active ? '#202023' : inactiveColor}
//       _target={_target}
//       >
//         {children}
//       </Link>
//   )
// }

const Navigation = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('red.50', 'whiteAlpha.50')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      //bg={useColorModeValue('#203866', 'pink')}
      bg={bgColor}
      css = {{ backdropFilter: 'blur(10px)'}}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
        >
          <Flex align="center" mr={12}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              Dikshant Konwar
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto'}}
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
            mt={{ base: 4, md: 0}}
            float='right'
          >
            {/* <Router>
              <Link to='/#'>Projects</Link>
              <Link to='/#'>Resume</Link>
            </Router> */}

            <Routes>
              <Route path="/" component={<Skills />} exact />
              <Route path="/about" component={<Education />} />
              <Route path="/shop" component={<Experience />} />
            </Routes>
          </Stack>

          <IconButton
              aria-label='Toggle theme'
              colorScheme={useColorModeValue('blackAlpha', 'pink')}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}
             ></IconButton>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
              as={IconButton}
              icon={ <HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              />
              <MenuList>
                {/* Add menu links here ... */}
                <Router>
                  <Link to='/#'>Projects</Link>
                  <Link to='/#'>Resume</Link>
                </Router>
              </MenuList>
            </Menu>
          </Box>
        </Container>
    </Box>
  )
};

export default Navigation;