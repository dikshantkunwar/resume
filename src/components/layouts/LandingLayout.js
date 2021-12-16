import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

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
        <Footer />
      </Flex>
  )
}