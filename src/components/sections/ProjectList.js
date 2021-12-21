import React from 'react'
import { Flex } from '@chakra-ui/react'
import Project from './Project'

export default function ProjectList() {
  return (

    <Flex 
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      mb="60px"
      >
      <Project 
        title="Lotide"
        description="Lotide - clone of lodash"
        date = "10/10/2021"
        gitlink = "github link here/dikshantkunwar"
        livepage = ""
        image = ""
        />
        <Project 
        title="Tweeter"
        description="Tweeter - clone of twitter"
        date = "10/10/2021"
        gitlink = "github link here/dikshantkunwar"
        livepage = ""
        image = ""
        />
        <Project 
        title="Scheduler"
        description="Schedule appointments"
        date = "10/10/2021"
        gitlink = "github link here/dikshantkunwar"
        livepage = ""
        image = ""
        />
    </Flex>
  )
}