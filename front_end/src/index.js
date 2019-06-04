import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './app'

window.store = store // ВНИМАНИЕ

render(
    <Provider store = {store}>
        <Router>
            <CssBaseline />
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)