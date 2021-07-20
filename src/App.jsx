import React from 'react';
import { ThemeProvider } from 'styled-components';

import mainTheme from './styles/themes/main.theme';
import ResetCss from './styles/base/reset.styled';

import Routes from './routes/main.routes';

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Routes />
        <ResetCss />
    </ThemeProvider>
);

export default App;
