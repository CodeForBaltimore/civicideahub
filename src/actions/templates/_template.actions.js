import AppDispatcher from "../dispatcher/AppDispatcher.js"

import <NAME>constants from "../constants/<>constants.js"
const ActionTypes = <NAME>constants.ActionTypes

const <NAME>Actions ={


  functionName: function(data) {
    AppDispatcher.dispatch({
      type: ActionTypes.ACTIONNAME,
      data: data
    })
  }


}

export default <NAME>Actions
