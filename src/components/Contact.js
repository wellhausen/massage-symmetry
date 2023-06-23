import React from 'react';
import { Heading, Text, Box, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Flex justify="center" align="center" minHeight="100vh">
      <Box minW="600px" p="1rem">
        <Flex direction={["column", null, "row"]} justify={["flex-start", null, "space-between"]} align={["flex-start", null, "start"]}>
          <Box flex="4" alignSelf={["flex-start", null, "start"]} pl={["100px", null, "0"]}>
            <Heading as="h1" fontSize="2xl" mb={["1rem", null, "0"]} pt={[null, null, "100px"]}>Contact</Heading>
            <Text fontSize="lg" mb="1rem">Massage Symmetry</Text>
            <Text fontSize="lg" mb="1rem">512-228-9744</Text>
            <Text fontSize="lg" mb="1rem">crsmithtxlmt@gmail.com</Text>
            <Text fontSize="lg">Austin, TX</Text>
          </Box>
          <Box flex="8" ml={[null, null, "50px"]}>
            <form>
              <FormControl mb="1rem">
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name" />
              </FormControl>
              <FormControl mb="1rem">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" />
              </FormControl>
              <FormControl mb="1rem">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl mb="1rem">
                <FormLabel>Subject</FormLabel>
                <Input type="text" placeholder="Subject" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Message" />
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContactPage;
