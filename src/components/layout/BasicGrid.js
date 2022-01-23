import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function BasicGrid(props) {
    const classes = useStyles();
    const {children} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {children}
            </Grid>
        </div>
    );
}
