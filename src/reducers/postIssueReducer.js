import {POST_ISSUE,SAVE_DESCRIPTION,SAVE_FUNDING,SAVE_LOCATION,SAVE_LEGISLATION,SAVE_HEADLINE} from "../actions/postIssueActions"


const initialState = {
    title:"",
    endDate:"2021-20-12",
    prize:0,
    rules:"rules",
    criteria:"criteria",
    description:"",
    headline:"",
    legislation: "",
    location: "",
    approved:"approved",
}

export default (state = initialState, action) => {
    switch (action.type) {
      case SAVE_DESCRIPTION:
        return Object.assign({}, state, {
          description: action.description
        })
      case SAVE_FUNDING:
        return Object.assign({}, state, {
          prize:action.funding
        })
      case SAVE_LOCATION:
        return Object.assign({}, state, {
          location: action.location
        })
      case SAVE_LEGISLATION:
        return Object.assign({}, state, {
          legislation: action.legislation
        })
      case SAVE_HEADLINE:
        return Object.assign({}, state, {
          title:action.headline
        })
      case POST_ISSUE:
        return state
      default:
        return state
    }
  }
