// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ThemeProvider } from "styled-components";
// import { RecoilRoot } from "recoil";
// import { darkTheme, lightTheme } from "./theme";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// const queryClient = new QueryClient();

// root.render(
//   <div>
//     <RecoilRoot>
//       <ThemeProvider theme={lightTheme}>
//         <App />
//       </ThemeProvider>
//     </RecoilRoot>
//   </div>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

// import * as ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// reportWebVitals();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);

root.render(
  <div>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>
);
