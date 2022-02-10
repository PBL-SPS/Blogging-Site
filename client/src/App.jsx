import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './routes/AppRouter';

const queryClient = new QueryClient()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
