import React from 'react'
import Switch from 'react-switch'
import { Container } from './style'
//import { lightTheme, darkTheme } from '../style/theme'
//import { ThemeProvider } from 'styled-components'

//export default class Header extends Component {
function Header(props) {

    return (
        <Container> Theme Change Application
            <Switch 
                onChange = {props.toggleTheme}
                checked = {props.theme === 'dark'}
                checkedIcon = {false}
                uncheckedIcon = {false}
                height = {10}
                width = {40}
                handleDiameter = {20}
                offColor = "#333"
                onColor = "#c62e65"
            />
        </Container>
    )
}

export default Header