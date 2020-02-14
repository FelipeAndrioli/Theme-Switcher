import React, { useState } from 'react';
import GlobalStyle from './style/global'
import Header from './components/Header'
import { lightTheme, darkTheme } from './style/theme'
import { ThemeProvider } from 'styled-components'

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }

  return (
    <div className = "App">
      <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header toggleTheme = {toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
