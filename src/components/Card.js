import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, additionalDetails, imageSrc, projectLink }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [shortenedDescription, setShortenedDescription] = useState(
    description.length > 150 ? description.slice(0, 250) + "..." : description
  );

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href={projectLink} isExternal style={{ textDecoration: "none" }} target="_blank">
        <Image src={imageSrc} alt={title} />
        <Heading fontSize="20px" mt="1" fontWeight="semibold" lineHeight="tight">
          {title}
        </Heading>
        <Text mt="2" color="white">
          {showDetails ? description : shortenedDescription}
        </Text>
      </Link>
      {description !== additionalDetails && (
        <>
          <Text mt="2" color="white" display={showDetails ? "block" : "none"}>
            {additionalDetails}
          </Text>
          <Button
            mt="4"
            colorScheme="purple"
            onClick={handleToggleDetails}
            rightIcon={<FontAwesomeIcon icon={showDetails ? faEyeSlash : faArrowRight} />}
          >
            {showDetails ? "See Less" : "See More"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default Card;
