import { Grid, Link, Text, VStack, Box, Code } from '@chakra-ui/react';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Logo } from '../components/Logo';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sample />}>

        </Route>
      </Routes>
    </Router>
  )
}


const Sample = () => <Box textAlign="center" fontSize="xl">
  <Grid minH="100vh" p={3}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <VStack spacing={8}>
      <Logo h="40vmin" pointerEvents="none" />
      <Text>
        Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
      </Text>
      <Link
        color="teal.500"
        href="https://chakra-ui.com"
        fontSize="2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Chakra
      </Link>
    </VStack>
  </Grid>
</Box>

export default AppRouter