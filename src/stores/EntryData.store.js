import AppDispatcher from "../dispatcher/AppDispatcher.js"
import {EventEmitter} from "events"
import React from "react"
import assign from "object-assign"

import ApplicationConstants from "../constants/Application.constants.js"

const ActionTypes = ApplicationConstants.ActionTypes

let _store = {}
_store.entries = []

_store.entries = [
      {
          ideaTitle: "Nick's good idea",
          userName: "NickShater",
          ideaDescription: "Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck",
          ideaSolution: "More people like me",
          createdAt: '2012-04-23T18:25:43.511Z',
          likeCount:42,
          coderCount:0,
          _id: 1
      },
      {
          ideaTitle: "Sean's bad idea",
          userName: "SeanA",
          ideaDescription: "Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "Ruin the meetup",
          createdAt: '2011-04-23T18:25:43.511Z',
          likeCount:3,
          coderCount:500,
          _id: 2
      },
      {
          ideaTitle: "Kaladas mediocre idea",
          userName: "Kalada O",
          ideaDescription: "I'm bored with making these. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "You know the drill",
          createdAt: '2017-04-25T18:25:43.511Z',
          likeCount:3000,
          coderCount:6,
          _id: 3
      },
      {
          ideaTitle: "Dicky idea also",
          userName: "dickyg",
          ideaDescription: "placeholder. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "done",
          createdAt: '2017-04-27T18:25:43.511Z',
          likeCount:0,
          coderCount:0,
          _id: 4
      },
          {
          ideaTitle: "Nick's good idea",
          userName: "NickShater",
          ideaDescription: "Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck.Pretty sweet idea to make baltimore not suck",
          ideaSolution: "More people like me",
          createdAt: '2012-04-27T19:25:43.511Z',
          likeCount:0,
          coderCount:0,
          _id: 5
      },
      {
          ideaTitle: "Sean's bad idea",
          userName: "SeanA",
          ideaDescription: "Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "Ruin the meetup",
          createdAt: '2012-04-23T18:23:43.511Z',
          likeCount:0,
          coderCount:0,
          _id: 6
      },
      {
          ideaTitle: "Kaladas mediocre idea",
          userName: "Kalada O",
          ideaDescription: "I'm bored with making these. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "You know the drill",
          createdAt: '2012-04-30T18:25:43.511Z',
          likeCount:0,
          coderCount:0,
          _id: 7
      },
      {
          ideaTitle: "Dicky idea also",
          userName: "dickyg",
          ideaDescription: "placeholder. Less hack nights. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck. Pretty sweet idea to make baltimore not suck",
          ideaSolution: "done",
          createdAt: '2012-04-23T18:25:42.511Z',
          likeCount:0,
          coderCount:0,
          _id: 8
      }
    ]


function loadEntries(data) {

  _store.entries = data

}


const EntryDataStore = assign({}, EventEmitter.prototype, {

    getEntries: function() {
      return _store.entries;
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

    case ActionTypes.LOAD_ENTRIES:
      loadEntries(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  EntryDataStore.emitChange();

  return true;

})

export default EntryDataStore
