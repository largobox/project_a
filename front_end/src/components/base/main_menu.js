import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import ShareIcon from '@material-ui/icons/Share'

const styles = theme => {
    console.log('Theme: ', theme)

    return {
        list: {
            width: '100%',
            maxWidth: 320
        },
        item: {
            backgroundColor: theme.palette.primary.main
        },
    }
}

function MainMenu (props) {
    const { classes } = props

    return (
        <List component = 'nav' className = {classes.list} disablePadding>
            <ListItem className = {classes.item} button>
                <ListItemIcon>
                    <SentimentSatisfiedIcon />
                </ListItemIcon>
                <ListItemText primary = 'Пациенты' />
            </ListItem>
            <ListItem className = {classes.item} button>
                <ListItemIcon>
                    <ShareIcon />
                </ListItemIcon>
                <ListItemText primary = 'Другая страница' />
            </ListItem>            
        </List>
    )
}

export default withStyles(styles)(MainMenu)