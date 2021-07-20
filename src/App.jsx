import React from 'react';
import { ThemeProvider } from 'styled-components';

import mainTheme from './styles/themes/main.theme';
import ResetCss from './styles/base/reset.styled';

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <ResetCss />
        <div>Hello World</div>
    </ThemeProvider>
);

export default App;
