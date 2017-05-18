import AppDispatcher from "../dispatcher/AppDispatcher.js"

import AppConstants from "../constants/Application.constants.js"
const ActionTypes = AppConstants.ActionTypes

const EntryDataActions ={


  submitLike: function(data) {

    console.log("submitLike in actions stub", data);

    // AppDispatcher.dispatch({
    //   type: ActionTypes.ACTIONNAME,
    //   data: data
    // })
  },

  submitCoderLike: function(data) {

    console.log("submitCoderLike in actions stub", data);

    // AppDispatcher.dispatch({
    //   type: ActionTypes.ACTIONNAME,
    //   data: data
    // })
  }


}

export default EntryDataActions
