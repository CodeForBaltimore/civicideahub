import React from "react";
import CoreContent from '../components/corecontent.react.jsx';
import Login from "../components/login.react.jsx";

import Header from "../components/header.react.jsx";
import Footer from '../components/footer.react.jsx';

import style from "../style/app.css";

import AppStore from "../stores/App.store.js"



class App extends React.Component{

  constructor(props){
    super(props)

    this.state={
      userDisplayName:AppStore.getUserDisplayName(),
      userId:AppStore.getUserId(),
    }

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
          userId={this.state.userId}
          userDisplayName={this.state.userDisplayName}
        />
        <CoreContent />
        <Login />
        <Footer />
      </div>
    );
  }
}


export default App;
