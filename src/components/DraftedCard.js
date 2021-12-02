import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DraftedCard(props) {
    const {item} = props;
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    title: {item.title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    chapter: {item.chapter}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    section: {item.section}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    accomplishes: {item.accomplishes}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    terms: {item.terms}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    purpose: {item.purpose}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    provisions: {item.provisions}
                </Typography>
                <Typography variant="body2" component="p">
                    text:  {item.text}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    other: {item.other}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    contestId: {item.contestId}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
