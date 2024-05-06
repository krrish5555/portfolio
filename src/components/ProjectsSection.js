import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";

const projects = [
  {
    title: "Handwritten Digit Recognition Using Deep Learning - Undergraduate Final Year Project",
    description:
      "Created a project for recognizing handwritten digits in python. Develop a comprehensive Python project for recognizing handwritten digits using machine learning. Utilize a deep learning model such as a Convolutional Neural Network (CNN) trained on the MNIST dataset to achieve high accuracy in digit classification. Implement preprocessing techniques, data augmentation, and hyperparameter tuning to optimize model performance. Provide a user-friendly interface for users to input handwritten digits and receive accurate predictions. Additionally, integrate visualization tools to analyze model performance and showcase predicted digits.",
    additionalDetails: `
    Built a project that employs a Multilayer Perceptron (MLP) with two hidden layers, totaling 2916 and 2884 neural units, to classify handwritten digits with high precision. Utilizing modern optimization techniques such as dropout and Adam, the model achieves a test accuracy of 99.16% after training for 23 epochs, during which it is fed with 46 million slightly varied images generated through online data augmentation techniques. Despite misclassifying 84 out of 10,000 images in the test set, the model's second guess is correct for 64 of those, suggesting potential for further improvement. Some misclassified images are particularly challenging even for human eyes to identify, likely due to distortions during the image extraction process. However, considering the use of simpler techniques and architecture compared to benchmarks, the project's results are deemed impressive.
    `,
    getImageSrc: () => require("../images/photo1.png"),
    projectLink: "https://github.com/krrish5555/FinalYearProject",
  },
  {
    title: "Tracking The Spread of The Invasive Spotted Lanternfly - Machine Learning Project",
    description:
      "Developed a Python project to predict lyde density using Random Forest Classifier models. The project involves data loading, preprocessing, and exploratory data analysis to understand the environmental factors affecting lyde density. Multiple models are trained and evaluated with different sets of features, and feature importance analysis is conducted. Cross-validation and learning curve analysis are used to assess model performance. Finally, the trained models are employed to predict lyde density based on user-provided input data.",
    additionalDetails: `
    The project accomplished several key objectives: data preprocessing ensures the data is clean and ready for analysis, while exploratory data analysis reveals important insights about lyde density and its relationships with other variables. Multiple Random Forest Classifier models are trained and evaluated, providing a comprehensive understanding of lyde density prediction. Cross-validation techniques validate the models' performance, and learning curve analysis assesses their generalization ability. The models successfully predict lyde density based on user-provided input data, demonstrating practical application. Future work is identified to further improve model performance, and the section concludes with a summary of findings and potential implications of the project.

    `,
    getImageSrc: () => require("../images/photo2.jpg"),
    projectLink: "https://github.com/krrish5555/machineLearning-SLF",
  },
  {
    title: "Develop a Simple Calculator - Coursera Project",
    description:
      "Built a fully functional simple calculator app using React. The app allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division. Implement the `plus`, `minus`, `times`, and `divide` functions to update the result displayed on the screen accordingly. Style the UI using CSS for a clean and user-friendly interface. Users can input numbers, perform calculations, and see the result displayed instantly. Additionally, include buttons to reset the input and result.",
    additionalDetails: `
    The calculator app has been extended with additional features including subtraction, multiplication, and division functionalities. The \'minus\' function subtracts the input value from the current total, while the \'times\' function multiplies the input value by the current total, and the \`divide\` function divides the current total by the input value. Two buttons have been added to reset the input and result, clearing the input field and resetting the result to 0, respectively. These enhancements improve the app's functionality, allowing users to perform a wider range of mathematical operations and providing greater control over their calculations.
    `,
    getImageSrc: () => require("../images/photo3.jpg"),
    projectLink: "https://github.com/krrish5555/courseraProjects/tree/main/simpleCalculator",
  },
  {
    title: "Restaurant Reservation System - Coursera Project",
    description:
      "Created a responsive website for \"Little Lemon\" using HTML and CSS. The website features a header with navigation links to different pages, including Home, Menu, Reservations, and Contact. It showcases today\'s special dish with an image, price, and description in the main section. The footer includes the Little Lemon logo and copyright information. Ensure the layout is visually appealing and user-friendly, with proper styling and responsiveness across devices.",
    additionalDetails: `
    In addition to the existing features, the Reservations page now includes a calendar widget that allows users to select the date and time for their reservation. The calendar widget enhances the user experience by providing an intuitive way to choose their preferred reservation slot. Furthermore, a confirmation email feature has been implemented, which sends users a confirmation email after successfully submitting their reservation. This ensures that users receive details of their booking and improves communication with customers, streamlining the reservation process.
    `,
    getImageSrc: () => require("../images/photo4.png"),
    projectLink: "https://github.com/krrish5555/courseraProjects/tree/main/littleLemonProject",
  },
  {
    title: "Interactive Shell Implementation in C - OS Project",
    description:
      "Built the ish shell, a Unix command interpreter with syntax similar to csh, capable of executing commands, handling I/O redirection, and managing job control. The shell should support lexical structure parsing, command line parsing for simple commands, pipelines, and lists, as well as I/O redirection using metacharacters like <, >, >>, and |. Additionally, it should execute commands either as built-in functions or by searching for executable files in the PATH variable, forking new processes with the execve system call, and managing job control with bg, fg, and kill commands. The shell should also read initialization commands from ~/.ishrc, maintain environment variables internally, and provide advanced interactive features like status reporting and signal handling.",
    additionalDetails: `
    Additionally, developed the ish shell to include built-in commands such as cd for changing the working directory, exit for terminating the shell, and setenv and unsetenv for manipulating environment variables. Implement job control commands like bg to run jobs in the background, fg to bring jobs into the foreground, and kill to send signals to jobs. Ensure proper handling of job status reporting and signal handling, with the shell tracking the status of each job and reporting whenever it finishes or becomes blocked. Provide a user-friendly interface, with the ability to execute commands asynchronously, suppress output from background jobs, and display job numbers and associated process IDs for easy reference.
    `,
    getImageSrc: () => require("../images/photo5.png"),
    projectLink: "https://github.com/krrish5555/operatingSystem",
  },
  {
    title: "Intelligent Routing for Emergency Services in Edwardsville - DAA Project",
    description:
      "Built the intelligent routing system for finding the shortest path and the shortest distance between two nodes in the graph. The nodes represent the emergency places in the Edwardsville city. The main aim of this project is to develop the system using three advanced algorithms - Dijkstra, Divide and Conquer and Bellman-Ford algorithms. The expected result was similar as achieved by the standard system like google maps or apple maps.",
    additionalDetails: `
    Successfully developed the system that works like the standard google maps or apple maps. The three advanced algorithms were able to produce the accurate same results as done by other systems. The test was done on the small Edwardsville city of Illinois state of USA but can be made working for large cities with complex graph structure.
    `,
    getImageSrc: () => require("../images/photo6.jpg"),
    projectLink: "https://github.com/krrish5555/findingShortestPath---DAA",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            additionalDetails={project.additionalDetails}
            imageSrc={project.getImageSrc()}
            projectLink={project.projectLink} // Pass the project link
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
