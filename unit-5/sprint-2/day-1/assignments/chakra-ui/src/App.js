import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Flex,
  Center,
  Square,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
  <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}  mr='650px'>
          <Text>DESKTOP LAYOUT</Text> 
          <Flex color='white'>
                   
  <Center w='100px' h='300px' bg='#0072bb'>
      <Text>NAV</Text>
  </Center>
  <Center w='250px' bg='#f8931d' size='150px'>
    <Text>CONTEXT</Text>
  </Center>
  <Center  w='100px' bg='#ee1c25'>
    <Text>WIDGET</Text>
  </Center>
</Flex>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
