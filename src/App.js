import React from 'react'
import '../src/App.css'
import profile from './assets/avatar.jpeg'

function App() {
  return (<div>
    <h1>Hello from first component :))</h1>
    <img src={profile} alt="" />
  </div>)
}
export default App