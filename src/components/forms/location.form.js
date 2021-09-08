/* global google */
import React,{useRef,useState} from "react"
import Button from "@material-ui/core/Button"
import  Typography  from "@material-ui/core/Typography"
import { useDispatch } from "react-redux"

export const LocationForm = (props) => {
    const dispatch = useDispatch()
    let autocompleteCity = null
    let autocomplete = null
    const [query,setQuery] = useState(localStorage.getItem("postIssue") ? JSON.parse(localStorage.getItem('postIssue')).location.split(",").slice(0,2) : "")
    const [city,setCity] = useState(localStorage.getItem("postIssue") ? JSON.parse(localStorage.getItem('postIssue')).location.split(",").slice(2,5) : "")
    
    const changeTab = () => {
        dispatch({type:"SAVE_LOCATION",location:query+","+city})
        props.changeTab(4,100)
    }
    const goBack = () => {
        props.changeTab(2,60)
    }
    
    
    const handleChange = () => {
        const place = autocomplete.getPlace()
        setQuery(place.formatted_address)
    }
    
    const handleChangeCity = () => {
        const place = autocompleteCity.getPlace()
        setCity(place.formatted_address)
    }
    
    const input = useRef(null)
    const cityInput = useRef(null)
    
    autocomplete = new google.maps.places.Autocomplete(input.current,{"types":["(regions)"],componentRestrictions:{country:"us"}})
    autocompleteCity = new google.maps.places.Autocomplete(cityInput.current,{"types":["(cities)"],componentRestrictions:{country:"us"}})
    
    autocomplete.addListener('place_changed',handleChange)
    autocompleteCity.addListener('place_changed',handleChangeCity)
    
    return (
        <div hidden={props.value !== props.index} className="locationForm" >
            <input ref={input} value={query} placeholder="State" className="stateInput" onChange={event => setQuery(event.target.value)}/>
            <Typography variant="body1">
                    This state will be where the legislation is filed.If you want a a change at the city level, please select below.
            </Typography>
            <input ref={cityInput} value={city} placeholder="City (optional)" className="stateInput" onChange={event => setCity(event.target.value)}/>
            <Typography variant="body1">
            Adding a city or town here means that the author will create a city ordinance rather than a piece of state legislation.
            </Typography>
            <Button onClick={changeTab} className="nextButton" disabled={query === ""}>Next</Button>
            <Button onClick={goBack}>Back</Button>
        </div>
    )
}

export default LocationForm