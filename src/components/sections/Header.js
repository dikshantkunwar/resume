import React from 'react';

import { 
  Box,
  Container,
  useColorModeValue,
  Flex,
  Heading, 
 // Menu,
 // MenuButton,
 // MenuList,
  IconButton,
  useColorMode,
  Text,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import PropTypes from "prop-types";

const MenuItems = (props) => {
  const { isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
      >

    </Text>
  )
}
export default function Header(){
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

          {/* <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto'}}
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
            mt={{ base: 4, md: 0}}
            float='right'
          >
            <MenuItems>Home</MenuItems>
            <MenuItems>How it works</MenuItems>
            <MenuItems>Contact me</MenuItems>
          </Stack> */}

          <IconButton
              aria-label='Toggle theme'
              colorScheme={useColorModeValue('blackAlpha', 'pink')}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}
             ></IconButton>

          {/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
              as={IconButton}
              icon={ <HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              />
              <MenuList>
              </MenuList>
            </Menu>
          </Box> */}
        </Container>
    </Box>
  )
}

Header.propTypes = {
  children: PropTypes.any,
  isLast: PropTypes.any
};

MenuItems.propTypes = {
  children: PropTypes.any,
  isLast: PropTypes.any
};