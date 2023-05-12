import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { RecoilRoot, useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

const queryClient = new QueryClient();

// import * as ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// reportWebVitals();

root.render(
  <div>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </div>
);
