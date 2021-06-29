import React,{useEffect,useState} from 'react'
import Layout from "../components/layout/layout"
import { useDispatch,useStore } from 'react-redux'
import { fetchContest } from '../actions/contestActions'
import { toast } from 'react-toastify'
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

const ContestEditor = (props) => {
    const dispatch = useDispatch()
    const store = useStore()
    const [headline,setHeadline] = useState("")
    const [description,setDescription] = useState("")
    const [legislation,setLegislation] = useState("")
    useEffect(() => {
        store.subscribe(() => {
                try{
                    const contest = store.getState().contest
                    setHeadline(contest.contest.title)
                    const data = contest.contest.description.split("\n")
                    setDescription(data[0])
                    setLegislation(data[1])    
                }
                catch(error){
                    toast('Loading...',{autoClose:10})
                }
        })
        dispatch(fetchContest(props.match.params.id))
    })
    return (
        <Layout pageTitle="Edit Contest">
            <Grid container direction="column" justify="center" spacing={10} alignItems="center">
            <Grid item md={6} >
                <div>
                    <Typography variant="h3">
                        Write a headline for your issue post
                    </Typography>
                    <TextField variant="outlined" value={headline} placeholder="Headline" label="Required" onChange={(event) => setHeadline(event.target.value)} classes={{root:"headlineTextInput"}} InputProps={{classes:{
                        root:"headlineTextInput",
                        focused:"headlineTextInput",
                        notchedOutline:"headlineTextInput"
                    }}}/>
                    <Typography variant="body1">
                        We'll match you with authors that will get your problem solved and turned into legislation right away!
                    </Typography>
                    <Typography variant="h4">
                        Example titles  
                    </Typography>
                    <Typography variant="subtitle1">
                        - Support children with autism
                    </Typography>
                    <Typography variant="subtitle1">
                        - Manage stray animals in cities
                    </Typography>
                    <Typography variant="subtitle1">
                        - Create instate tution for all veterans
                    </Typography>
                </div>
            </Grid>
            <Grid item md={6}>
            <div>
                <Typography variant="h3">
                            Describe the issue
                </Typography>
                <TextField 
                multiline
                rows={25}
                variant="outlined"
                label="Required"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Write description here "
                classes={{root:"headlineTextInput"}} 
                InputProps={{classes:{
                    root:"headlineTextInput",
                    focused:"headlineTextInput",
                    notchedOutline:"headlineTextInput"
                }}}
                />
            </div>
            </Grid>
            <Grid item md={6}>
            <div>
                <Typography variant="h3">
                            What legislation is needed?
                </Typography>
                <TextField 
                multiline
                rows={25}
                variant="outlined"
                value={legislation}
                label="Required"
                onChange={(event) => setLegislation(event.target.value)}
                placeholder="What do you want the legislation to accomplish..."
                classes={{root:"headlineTextInput"}} InputProps={{classes:{
                    root:"headlineTextInput",
                    focused:"headlineTextInput",
                    notchedOutline:"headlineTextInput"
                }}}
            />
            </div>
            </Grid>
            <Grid item md={6}>
                <div>
                    <Typography variant="h3">
                            Select the location for your bill
                    </Typography>
                </div>
            </Grid>
            </Grid>
        </Layout>
    )
}

export default ContestEditor