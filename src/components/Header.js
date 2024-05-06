// Header.js
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto: khanalkrishna555@gmail.com" },
  { icon: faGithub, url: "https://github.com/krrish5555" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/krishna-khanal-773467202/" },
  { icon: faFacebook, url: "https://www.facebook.com/profile.php?id=100027032691529" },
  { icon: faInstagram, url: "https://www.instagram.com/khanal_krrish_1969/" }
];

const Header = () => {
  const [transform, setTransform] = useState("translateY(0)");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        if (currentScrollY > 200) {
          setTransform("translateY(-200px)");
        }
      } else {
        setTransform("translateY(0)");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [transform]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transform={transform}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="#projects-section">
                Projects
              </a>
              <a onClick={handleClick("contactme")} href="#contactme-section">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
