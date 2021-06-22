import React,{useState} from 'react'
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { useDispatch } from 'react-redux'
const LegislationForm = (props) => {
    const dispatch = useDispatch()
    const [legislation,setLegislation] = useState("")
    const changeTab = () => {
        dispatch({type:"SAVE_LEGISLATION",legislation:legislation})
        props.changeTab(3,80)
    }
    const goBack = () => {
        props.changeTab(1,40)
    }
    return(
        <div hidden={props.value !== props.index} className="legislationForm">
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
            <Button onClick={changeTab} classes={{root:"nextButton"}} disabled={legislation === ""}>Next</Button>
            <Button onClick={goBack}>Back</Button>
        </div>
    )
}

export default LegislationForm