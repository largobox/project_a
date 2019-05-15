import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

const styles = theme => ({
    'my-class': {
        'background-color': 'red'
    }
})

function TestComp (props) {
    const { classes } = props

    return (
        <Grid container color="primary">
            <Grid item xs={6}>
                <Button variant="contained" color="primary">Well 1</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="secondary">Well 2</Button>
            </Grid>
        </Grid>   
    )
}

export default withStyles(styles)(TestComp)