import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../sections/Header";
import PropTypes from "prop-types"

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
      >
        <Header />
        { props.children }
      </Flex>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.any
}