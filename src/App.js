import React, { Component } from 'react';
import './App.css';
import Products from './products.js';
import MoneyOps from './moneyops.js';
import ServiceOps from './serviceops.js';

class App extends Component {
  render() {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>Vending Machine</h2>
                        <div className="App-console">
                          <p id="changeableConsoleText">Please insert coins and make a selection.</p>
                        </div>
                    </div>
                    <Products />
                    <MoneyOps />
                    <br />
                    <ServiceOps />
                </div>
            );
        }
}

export default App;
