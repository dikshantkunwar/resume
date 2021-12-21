import { Heading, Stack, Image, LinkOverlay, LinkBox, Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from "prop-types"
// import { IoLogoGithub } from 'react-icons/io5'


export default function Project({
  title,
  description,
  gitlink,
  image,
  ...rest
}) {

  return (
    <Stack
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      p={5}
      m={3}
      bg="#fbe8fd"
      {...rest} 
      >
        <LinkBox cursor="pointer">
          <Image src={image} alt={title} maxH={60} maxW={60}/>
          <LinkOverlay href={gitlink} target="_blank">
            <Heading 
              as="h2"
              size="md"
              fontWeight="bold"
              color="primary.800">
                {title}
              </Heading>
          </LinkOverlay>
          <Text fontSize={12}>{description}</Text>
        </LinkBox>

        {/* <Heading  
          as="span"
          size="sm"
          >{description}</Heading>

        

        
        <Link href={gitlink}><Icon as={IoLogoGithub} /></Link>
        <Link>{livepage}</Link> */}

    </Stack>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  gitlink: PropTypes.string,
  livepage: PropTypes.string,
  image: PropTypes.any
}