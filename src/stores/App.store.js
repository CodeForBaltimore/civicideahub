import AppDispatcher from "../dispatcher/AppDispatcher.js"
import {EventEmitter} from "events"
import React from "react"
import assign from "object-assign"

import ApplicationConstants from "../constants/Application.constants.js"

const ActionTypes = ApplicationConstants.ActionTypes

let _store = {}
_store.userId = "1234"
_store.userDisplayName = "Boss"

const AppStore = assign({}, EventEmitter.prototype, {

    getUserId: function() {
      return _store.userId;
    },

    getUserDisplayName: function() {
      return _store.userDisplayName;
    },

    logoutUser: function() {
      _store.userId = "";
      _store.userDisplayName = "";
      //this.emit("userLoggedOut");
    },

    emitChange: function() {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }


})


AppDispatcher.register(function(action) {
  // var text;
  // Define what to do for certain actions
  console.log(action.data);
  switch(action.type) {

    case ActionTypes.ACTIONNAME:
      someAction(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  AppStore.emitChange();

  return true;

})

export default AppStore
