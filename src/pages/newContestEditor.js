/* global google */
import React,{useEffect,useState,useRef} from 'react'
import Layout from "../components/layout/layout"
import { useDispatch,useStore } from 'react-redux'
import { fetchContest } from '../actions/contestActions'
import { toast } from 'react-toastify'
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { useHistory } from 'react-router'
import { updateContest } from '../actions/contestActions'

const ContestEditor = (props) => {
    const dispatch = useDispatch()
    const store = useStore()
    let autocompleteCity = null
    let autocomplete = null
    const [query,setQuery] = useState("")
    const [city,setCity] = useState("")
    const [headline,setHeadline] = useState("")
    const [description,setDescription] = useState("")
    const [legislation,setLegislation] = useState("")
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchContest(props.match.params.id))
        store.subscribe(() => {
                try{
                    const contest = store.getState().contest
                    setHeadline(contest.contest.title)
                    const data = contest.contest.description.split("\n\n")
                    setDescription(data[0])
                    setLegislation(data[1])
                    setQuery(data[2])    
                }
                catch(error){
                    toast('Loading...',{autoClose:10})
                }
        })
    },[dispatch, props.match.params.id, store])
    const handleChange = () => {
        const place = autocomplete.getPlace()
        setQuery(place.formatted_address)
    }
    
    const handleChangeCity = () => {
        const place = autocompleteCity.getPlace()
        setCity(place.formatted_address)
    }
    const goBack = () => {
        history.goBack()
    }
    const input = useRef(null)
    const cityInput = useRef(null)
    
    autocomplete = new google.maps.places.Autocomplete(input.current,{"types":["(regions)"],componentRestrictions:{country:"us"}})
    autocompleteCity = new google.maps.places.Autocomplete(cityInput.current,{"types":["(cities)"],componentRestrictions:{country:"us"}})
    
    autocomplete.addListener('place_changed',handleChange)
    autocompleteCity.addListener('place_changed',handleChangeCity)
    const data = {
        title:headline,
        description:description+"\n\n"+legislation+"\n\n"+query+city
    }
    const update = () => {
        dispatch(updateContest(props.match.params.id,data))
    }
    return (
        <Layout pageTitle="Edit Contest">
            <Grid container direction="column" justify="center" spacing={10} alignItems="center" style={{padding:"10px"}}>
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
                    <input ref={input} value={query} placeholder="State" className="stateInput" onChange={event => setQuery(event.target.value)}/>
                    <Typography variant="body1">
                            This state will be where the legislation is filed.If you want a a change at the city level, please select below.
                    </Typography>
                    <input ref={cityInput} value={city} placeholder="City (optional)" className="stateInput" onChange={event => setCity(event.target.value)}/>
                    <Typography variant="body1">
                    Adding a city or town here means that the author will create a city ordinance rather than a piece of state legislation.
                    </Typography>
                </div>
            </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" style={{padding:"20px"}}>
                <Grid item>
                    <Button onClick={goBack}>Cancel</Button>
                </Grid>
                <Grid item>
                    <Button classes={{root:'saveButton'}} onClick={update}>Save</Button>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default ContestEditor