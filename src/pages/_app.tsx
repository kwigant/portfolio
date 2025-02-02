import { Header } from "@/components/header";
import "@/styles/globals.css";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"], // Add the weights you need
  subsets: ["latin"], // Add any necessary subsets
  variable: "--font-poppins", // Optional: create a CSS variable for the font
});

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
      '#4B8085',
    ],
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Poppins, sans-serif',
    sizes: {
      h1: { fontSize: rem(36), },
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <main className={poppins.className}>
        <Header/>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
