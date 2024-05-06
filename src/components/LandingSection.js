// LandingSection.js
import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/myPhoto.jpg";


const greeting = "Hello, I am Krishna!";
const bio1 = "A seasoned Frontend Developer with expertise in Javascript.";
const bio2 = " Let's collaborate to build engaging and impactful web applications together.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack color="white" textAlign="center">
      <Avatar size="2xl" src={profileImage} />
      <Heading size="lg" mt={4}>
        {greeting}
      </Heading>
      <Text>{bio1}</Text>
      <Text>{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
