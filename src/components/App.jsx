import React from "react";
import CoreContent from '../components/corecontent.react.jsx';

import Header from "../components/header.react.jsx";
import Footer from '../components/footer.react.jsx';

import style from "../style/app.css";

import AppStore from "../stores/App.store.js"

import * as userData from "../actions/userData.actions.js";

class App extends React.Component{

  constructor(props){
    super(props)

    this.state={
      userDisplayName:AppStore.getUserDisplayName(),
      userId:AppStore.getUserId(),
    }
  }

  logoutUser(){
        console.log(userData);
        //userData.logOutUser();
  }

  updateUser(){
    this.setState({
      userDisplayName:AppStore.getUserDisplayName(),
      userId:AppStore.getUserId(),
    })
  }


  componentDidMount(){
    AppStore.addChangeListener(this.updateUser)
  }


  render(){
    return (
      <div className={style.base}>
        <Header
          logOut={this.logoutUser}
          userId={this.state.userId}
          userDisplayName={this.state.userDisplayName}
        />
        <CoreContent />
        <Footer />
      </div>
    );
  }
}


export default App;

   // <CoreContent />
