import React from 'react'
import PeopleList from './components/people/list'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes'

// import 'typeface-roboto'

export default function App () {
    return (
        <MuiThemeProvider theme={theme}>
            <main>
                <header>
                    <h1>App component</h1>
                </header>
                <section>
                    <PeopleList />
                </section>
            </main>
        </MuiThemeProvider>
    )
}