import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "react-query";
// import { ThemeProvider } from "@mui/styles";
// import { themeMui } from "./theme";
import queryClient from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { persistor, store } from "./store";
import "./i18next";
import PageFallback from "./components/UI/PageFallback";

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              {/* <ThemeProvider theme={themeMui}> */}
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              {/* </ThemeProvider> */}
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </div>
    </Suspense>
  );
}

export default App;
