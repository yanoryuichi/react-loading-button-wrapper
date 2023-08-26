import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import ButtonWithCustomHook from './ButtonWithCustomHook';
import ButtonWithWrapper from './ButtonWithWrapper';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ButtonWithCustomHook />
      <br />
      <ButtonWithWrapper />
    </StyledEngineProvider>
  </React.StrictMode>
);