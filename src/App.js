import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  return (
    <div className='content'>
      <nav className='navBar'>
        <div className="logo-container">
          <img src={reactLogo} alt="react-logo" className='logo'/>
          <h3>ReactFacts</h3>
        </div>
        <h4>React Course- Project 1</h4>
      </nav>

      <main>
      <h1>Fun facts about React</h1>
        <ul className='facts-list'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including
          mobile apps</li>
        </ul>
      </main>
    </div>
  )
}

export default App