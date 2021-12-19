import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import UserInfoCard from "../UserInfoCard";
import BasicGrid from "../layout/BasicGrid";
import DraftedCard from "../DraftedCard";
import {Redirect} from "react-router-dom";
import SystemBackdrop from "../widgets/backdrop/SystemBackdrop";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const postedIssues = useSelector(state => state.user.getIn(['userInfo', 'postedIssues']));
    const fundedIssues = useSelector(state => state.user.getIn(['userInfo', 'fundedIssues']));
    const Legislation = useSelector(state => state.user.getIn(['userInfo', 'legislation']));
    const isAuth = useSelector(state => state.auth.isAuthenticated);


    // alert(JSON.stringify(postedIssues));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    if (!isAuth) {
        return <Redirect to='/'/>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Posted" {...a11yProps(0)} />
                    <Tab label="Funded" {...a11yProps(1)} />
                    <Tab label="Drafted for" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <BasicGrid>
                        {postedIssues.map((item) => <Grid item xs>
                                <UserInfoCard item={item}/>
                            </Grid>
                        )}
                    </BasicGrid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <BasicGrid>
                        {fundedIssues.map((item) => <Grid item xs>
                                <UserInfoCard item={item}/>
                            </Grid>
                        )}
                    </BasicGrid>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <BasicGrid>
                        {Legislation.map((item) => <Grid item xs>
                                <DraftedCard item={item}/>
                            </Grid>
                        )}
                    </BasicGrid>
                </TabPanel>
            </SwipeableViews>
        </div>

    );
}
