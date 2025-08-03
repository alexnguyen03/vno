'use client';

import { ChakraProvider, Container, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Toolbar } from '../components/toolbar/tool-bar';
import { DialogProvider } from './dialog-provider';
import { GlobalDialog } from '../components/ui/global-dialog';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <DialogProvider>
          <Container className="bg-green">
            <Toolbar />
            {props.children}

            <GlobalDialog />
          </Container>
        </DialogProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
