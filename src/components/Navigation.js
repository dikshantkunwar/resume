import { 
  Box,
  Container,
  useColorModeValue,
  Flex,
  Heading, 
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  useColorMode
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      _target={_target}
      >
        {children}
      </Link>
  )
}

const Navigation = props => {
  const { toggleColorMode } = useColorMode();
  
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css = {{ backdropFilter: 'blur(10px)'}}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
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
            flexGrow={1}
            mt={{ base: 4, md: 0}}
            float='right'
          >
            <Router>
              <Link to='/#'>Projects</Link>
              <Link to='/#'>Resume</Link>
            </Router>
            <Button onClick={toggleColorMode}> Toggle dark theme </Button>
          </Stack>

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