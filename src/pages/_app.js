// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "../../styles/global.css"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
