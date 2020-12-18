import React from 'react'
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import Register from './components/RegisterForm/Register';
import Login from './components/LoginForm/Login';
import Timers from './components/Timers/Timers'


class App extends React.Component {

  componentDidMount(){
    const db = firebase.database()
    console.log(db);
  }


  render(){
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      <Timers />
    </div>
  );

}
}

export default App;
