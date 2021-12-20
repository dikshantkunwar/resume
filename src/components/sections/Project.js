import { Heading, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import PropTypes from "prop-types"

export default function Project({
  title,
  description,
  date,
  gitlink,
  livepage,
  image,
  ...rest
}) {

  return (
    <Stack
      borderWidth={1}
      borderRadius={8}
      boxShadow={lg}>
        <Heading 
          as="h2"
          size="md"
          fontWeight="bold"
          color="primary.800"
          >{title}</Heading>

        <Heading  
          as="span"
          size="sm"
          >{description}</Heading>

        <Image src={image} />
        <Link>gitlink</Link>
        <Link>livepage</Link>

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