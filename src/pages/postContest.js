import React, {useState} from "react"
import Layout from "../components/layout/layout"
import Grid from "@material-ui/core/Grid"
import LinearProgress from "@material-ui/core/LinearProgress"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"

import HeadlineForm from "../components/forms/headline.form"
import IssueDescriptionForm from "../components/forms/issue-description.form"
import LegislationForm from "../components/forms/legislation.form"
import LocationForm from "../components/forms/location.form"
import FundingForm from "../components/forms/funding.form"
import HeadlineDisclaimer from "../components/disclaimers/headline.disclaimer"
import IssueDescriptionDisclaimer from "../components/disclaimers/issue-description.disclaimer"
import LegislationDisclaimer from "../components/disclaimers/legislation.disclaimer"
import LocationDisclaimer from "../components/disclaimers/location.disclaimer"
import FundingDisclaimer from "../components/disclaimers/funding.disclaimer"

const PostContestPage = () => {
    const [value, setValue] = useState(0)
    const [progress, setProgress] = useState(20)
    const changeTab = (value, progress) => {
        setValue(value)
        setProgress(progress)
    }
    const changeTabView = (event, newValue) => {
        setProgress(newValue * 20)
        setValue(newValue)
    }
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <Layout pageTitle="Issue Posting">
            <Grid container spacing={0} classes={{root: "containerGrid"}}>
                <Grid item md={6} classes={{root: "disclaimerSection"}}>
                    <LinearProgress variant="determinate" value={progress} classes={{
                        bar1Determinate: "linearProgressBarPrimary",
                        root: "linearProgressBarRoot"
                    }}/>
                    <Tabs value={value} textColor="primary" classes={{root: "tabs"}} onChange={changeTabView}>
                        <Tab label="Headline" wrapped
                             classes={{root: "tab", textColorPrimary: "tabText"}}  {...a11yProps(0)} />
                        <Tab label="Issue Description" wrapped
                             classes={{root: "tab", textColorPrimary: "tabText"}}  {...a11yProps(1)} />
                        <Tab label="Legislation Needed" wrapped
                             classes={{root: "tab", textColorPrimary: "tabText"}}  {...a11yProps(2)}/>
                        <Tab label="Location" wrapped
                             classes={{root: "tab", textColorPrimary: "tabText"}}  {...a11yProps(3)}/>
                        <Tab label="Funding" wrapped
                             classes={{root: "tab", textColorPrimary: "tabText"}} {...a11yProps(4)}/>
                    </Tabs>
                    <HeadlineDisclaimer value={value} index={0}/>
                    <IssueDescriptionDisclaimer value={value} index={1}/>
                    <LegislationDisclaimer value={value} index={2}/>
                    <LocationDisclaimer value={value} index={3}/>
                    <FundingDisclaimer value={value} index={4}/>
                </Grid>
                <Grid item md={6}>
                    <HeadlineForm value={value} index={0} changeTab={changeTab}/>
                    <IssueDescriptionForm value={value} index={1} changeTab={changeTab}/>
                    <LegislationForm value={value} index={2} changeTab={changeTab}/>
                    <LocationForm value={value} index={3} changeTab={changeTab}/>
                    <FundingForm value={value} index={4} changeTab={changeTab}/>
                </Grid>
            </Grid>
        </Layout>

    )
}

export default PostContestPage