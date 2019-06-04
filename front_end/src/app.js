import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes'

import PeopleList from './components/people/list'
import MainMenu from './components/base/main_menu'
import MainContent from './components/base/main_content'


// import 'typeface-roboto'

export default function App () {
    return (
        <MuiThemeProvider theme={theme}>
            <MainMenu />
            <MainContent />
        </MuiThemeProvider>
    )
}