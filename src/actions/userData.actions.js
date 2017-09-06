import AppDispatcher from "../dispatcher/AppDispatcher.js"

import AppConstants from "../constants/Application.constants.js"
const ActionTypes = AppConstants.ActionTypes

const UserDataActions ={

  logOutUser: function() {
  	console.log("Inside User data actions");

    AppDispatcher.dispatch({
      type: "LOGOUT_USER"  //TODO:  Use ActionTypes instead here
    })
    
  }

}

export default UserDataActions
