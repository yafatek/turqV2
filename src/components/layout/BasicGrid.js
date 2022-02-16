import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
    },
}));

export default function BasicGrid(props) {
    const classes = useStyles();
    const {children} = props;

    return (
        <div className={classes.root}>
            <Grid container>
                {children}
            </Grid>
        </div>
    );
}
