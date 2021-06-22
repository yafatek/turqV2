import React,{useState} from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {useDispatch} from "react-redux"
const IssueDescriptionForm = (props) => {
    const [description,setDescription] = useState("")
    const dispatch = useDispatch()
    const changeTab = () => {
        dispatch({type:"SAVE_DESCRIPTION",description:description})
        props.changeTab(2,60)
    }
    const goBack = () => {
        props.changeTab(0,20)
    }
    return (
        <div hidden={props.value !== props.index} className="issueDescriptionForm">
            <TextField 
            multiline
            rows={25}
            variant="outlined"
            label="Required"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write description here "
            classes={{root:"headlineTextInput"}} InputProps={{classes:{
                root:"headlineTextInput",
                focused:"headlineTextInput",
                notchedOutline:"headlineTextInput"
            }}}
            />
            <Button onClick={changeTab} classes={{root:"nextButton"}} disabled={description === ""}>Next</Button>
            <Button onClick={goBack}>Back</Button>
        </div>
    )
}
export default IssueDescriptionForm