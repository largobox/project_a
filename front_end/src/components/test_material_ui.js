import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, Link } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link as RouterLink } from 'react-router-dom'

const styles = theme => ({
    'my-class': {
        'background-color': 'red'
    }
})

function TestComp (props) {
    const { classes } = props

    return (
        <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="primary">Well 1</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="secondary">Well 2</Button>
            </Grid>
        </Grid>   
    )
}

export default withStyles(styles)(TestComp)