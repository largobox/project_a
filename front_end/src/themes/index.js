import { createMuiTheme } from '@material-ui/core/styles'
import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
    palette: {
        primary: { main: lime[200] },
        secondary: { main: lime[200] }
    },
    typography: { useNextVariants: true }
})

export default theme