import React from 'react'
import { Flex } from '@chakra-ui/react'
import Project from './Project'

// import lotideThumb from '../../../public/projects/lotide.png'
import tweeterThumb from '../../projects-images/tweeter.jpg'
// import schedulerThumb from '../../../public/projects/scheduler.png'

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
        gitlink = "https://github.com/dikshantkunwar/lotide"
        livepage = ""
        image = {tweeterThumb}
        />
        <Project 
        title="Tweeter"
        description="Tweeter - clone of twitter"
        gitlink = "https://github.com/dikshantkunwar/tweeter"
        livepage = ""
        image = {tweeterThumb}
        />
        <Project 
        title="Scheduler"
        description="Schedule appointments"
        gitlink = "https://github.com/dikshantkunwar/scheduler"
        livepage = ""
        image = {tweeterThumb}
        />
    </Flex>
  )
}