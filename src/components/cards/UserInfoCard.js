import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import {ButtonGroup, LinearProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '40%',
        maxHeight: 220,
        margin: '0 auto',
        padding: 3,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 30,
    },
    topContainerText: {
        paddingLeft: '2rem',
    },
    description: {
        paddingTop: '1rem',
    }
}));
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        backgroundColor: 'transparent !important'
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);


export default function UserInfoCard(props) {
    const {item} = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={<BorderLinearProgress value={40} size={40} variant="determinate"
                                             color={item.approved ? 'primary' : 'secondary'}/>}
            />
            <CardContent>
                <div className={classes.topContainer}>
                    <Typography variant="subtitle1" color="textPrimary"
                                component="p">
                        CURRENT FUNDING: $ &nbsp; -----
                    </Typography>
                    <Typography className={classes.topContainerText} variant="subtitle1" color="textPrimary"
                                component="p">
                        GOAL: $ &nbsp; -----
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1" color="textPrimary"
                                component="p">
                        Ends {moment(item.endDate, "YYYYDDMM").fromNow()}
                    </Typography>
                </div>
                <div className={classes.description}>
                    <Typography variant="h6" color="textPrimary" component="p">
                        {item.description}
                    </Typography>
                </div>
            </CardContent>

            <CardActions disableSpacing>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button color={'primary'}>Learn More</Button>
                    <Button color={'primary'}>{item.approved ? 'Publish' : 'Draft'}</Button>
                </ButtonGroup>
                <IconButton
                    className={classes.expand}
                    aria-label="share issue"
                >
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>

    );
}