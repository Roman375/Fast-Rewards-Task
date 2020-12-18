import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCpVucfDRMItzkkAFOjG6_Sz3n7sbhMV8E',
  authDomain: 'fast-rewards-task.firebaseapp.com',
  databaseURL: 'https://fast-rewards-task-default-rtdb.firebaseio.com',
  projectId: 'fast-rewards-task',
  storageBucket: 'fast-rewards-task.appspot.com',
  messagingSenderId: '481693446353',
  appId: '1:481693446353:web:acc4e7482c69af3c9855f0',
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
