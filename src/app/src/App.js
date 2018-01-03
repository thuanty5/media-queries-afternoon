import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='topContainer' >
          <header className="App-header">
            
              <div className='logo' >
                <p> Start Bootstrap </p>
              </div>

              <div className='navbar'>
                <p>Services</p>
                <p>Portfolio</p>
                <p>About</p>
                <p>Team</p>
                <p>Contact</p>
              </div>
              <div className='hamburgerMenu' >
                <button>MENU<img src='https://cdn4.iconfinder.com/data/icons/flat-black/128/menu.png' /></button>
              </div>
          </header>

          <div className='billboardContainer'>

            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
