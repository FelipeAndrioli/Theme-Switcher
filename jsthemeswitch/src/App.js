import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import { lightTheme, darkTheme } from './styles/theme'
import {ThemeProvider} from 'styled-components'

function App() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }

    return(

        <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle />
                <button onClick = {toggleTheme}>Toggle Theme</button>
                <h1>It's a {theme} theme!</h1>
                <footer>
                </footer>
            </>
        </ThemeProvider>
    )
}

export default App;
