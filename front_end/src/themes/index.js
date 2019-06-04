import { createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7cb342',
        },
        secondary: deepOrange,
    },
    typography: { useNextVariants: true }
})

export default theme

