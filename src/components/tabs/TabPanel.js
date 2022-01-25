import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import BasicGrid from "../layout/BasicGrid";
import {Link, Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import DragWidget from "../widgets/DragWidget";
import {POST_CONTEST_PAGE_URL} from "../../constants";
import {changeIsDrafted} from "../../redux/actions/AppActions";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            // role="tabpanel"
            // hidden={value !== index}
            // id={index}
            // aria-labelledby={`full-width-tab-${index}`}

        >
            {value === index && (
                <Box p={3}>
                    {children}
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
        // id: `full-width-tab-${index}`,
        // 'aria-controls': `full-width-tabpanel-${index}`,
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
    const dispatch = useDispatch();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const postedIssues = useSelector(state => state.user.getIn(['userInfo', 'postedIssues']));
    const fundedIssues = useSelector(state => state.user.getIn(['userInfo', 'fundedIssues']));
    const Legislation = useSelector(state => state.user.getIn(['userInfo', 'legislation']));
    const isAuth = useSelector(state => state.auth.isAuthenticated);

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
            <Box component={'div'}>
                <Link to={POST_CONTEST_PAGE_URL}>
                    <Button variant={'outlined'} color={'primary'}
                            onClick={() => dispatch(changeIsDrafted(true))}
                            style={{
                                margin: '1rem'
                            }}>
                        Draft Issue
                    </Button>
                </Link>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Posted"  />
                        <Tab label="Funded" {...a11yProps(1)} />
                        <Tab label="Drafted for" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0}>
                        <BasicGrid>
                            <Grid item xs>
                                <DragWidget items={postedIssues}/>
                            </Grid>
                        </BasicGrid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <BasicGrid>
                            <Grid item xs>
                                <DragWidget items={fundedIssues}/>
                            </Grid>
                        </BasicGrid>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <BasicGrid>
                            <Grid item xs>
                                <DragWidget items={Legislation}/>
                            </Grid>
                        </BasicGrid>
                    </TabPanel>
                </SwipeableViews>
            </Box>

        </div>

    );
}
