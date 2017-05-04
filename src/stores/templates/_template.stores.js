import AppDispatcher from "../dispatcher/AppDispatcher.js"
import {EventEmitter} from "events"
import React from "react"
import assign from "object-assign"

import <NAME>constants from "../constants/<>constants.js"

const ActionTypes = <NAME>constants.ActionTypes

let _store = {}

const <NAME>Store = assign({}, EventEmitter.prototype, {

    getSOMETHING: function() {
      return _store.something;
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
  ExampleStore.emitChange();

  return true;

})
