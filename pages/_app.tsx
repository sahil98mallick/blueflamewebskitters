import { Store } from "@/Redux/Store/Store";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { ThemeContextProvider } from "@/muitheme/ThemeContextProvider";
import theme from "@/muitheme/palette";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Globalstylewrapper } from "@/styles/Stylecomponents/GlobalStylewrapper";

// React Query Setup
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Globalstylewrapper>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Wrapper>
                <Component {...pageProps} />
              </Wrapper>
            </ThemeProvider>
          </QueryClientProvider>
        </ThemeContextProvider>
      </Globalstylewrapper>
    </>
  )
}
