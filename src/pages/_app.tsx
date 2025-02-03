import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
        <Footer/>
      </main>
    </MantineProvider>
  );
}
