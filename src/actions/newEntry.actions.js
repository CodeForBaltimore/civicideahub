import AppDispatcher from "../dispatcher/AppDispatcher.js"

import AppConstants from "../constants/Application.constants.js"
const ActionTypes = AppConstants.ActionTypes

const NewEntryActions ={


  submitNewEntry: function(data) {
    console.log("submitNewEntry in actions stub", data);

    //TODO connect to rest service endpoint


    // AppDispatcher.dispatch({
    //   type: ActionTypes.ACTIONNAME,
    //   data: data
    // })
  }


}

export default NewEntryActions
