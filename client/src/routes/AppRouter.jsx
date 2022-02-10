import { Grid, Link as CLink, Text, VStack, Box, Code, Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Logo } from '../components/Logo';
import Private from '../pages/Private';
import { setAuth } from '../redux/auth/slice';
import ProtectedRoute from './ProtectedRoute';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="private" element={<ProtectedRoute />}>
          <Route path="" element={<Private />} />
        </Route>
      </Routes>
    </Router>
  )
}


const Sample = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(setAuth({ authState: "LOGGEDIN" }))
  }
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
        </Text>
        <CLink
          color="teal.500"
          href="https://chakra-ui.com"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Chakra
        </CLink>
        <Button onClick={login}>Login</Button>
        <Link to={"private"}><CLink>Private page</CLink></Link>
      </VStack>
    </Grid>
  </Box>
}

export default AppRouter