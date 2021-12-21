import 
{ Flex,
  Heading,
  Stack,
  Box,
  Image } from "@chakra-ui/react";

import React from "react";
import PropTypes from "prop-types"
import SocialLinks from "./SocialLinks";

export default function Hero({
  title,
  subtitle,
  image,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={5}
      {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "60%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
            >
              {title}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              {subtitle}
            </Heading>

            <SocialLinks />
        </Stack>
        <Box w={{ base: "30%", sm: "30%", md: "30%" }} mb={{ base: 12, md: 0 }} mt={{ base: 30, md: 0}}>
          <Image src={image} size="50%" rounded="1rem"  />
        </Box>
      </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
}
 
Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
}