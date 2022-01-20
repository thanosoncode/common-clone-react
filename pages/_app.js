import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../styles/Globalstyle";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import apartmentsReducer from "../features/Apartments";
import stepsReducer from "../features/Steps";

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      apartments: apartmentsReducer,
      steps: stepsReducer,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
