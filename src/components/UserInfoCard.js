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

export default function UserInfoCard(props) {
    const {item} = props;
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    title: {item.title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    criteria: {item.rules}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    approved: {item.approved}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    rules: {item.rules}
                </Typography>
                <Typography variant="body2" component="p">
                    {item.description}
                </Typography>
                <Typography variant="subtitle2" component="h3">
                    end date: {moment(item.endDate, "YYYYDDMM").fromNow()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
