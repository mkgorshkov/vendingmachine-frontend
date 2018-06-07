import React, { Component } from 'react';
import './moneyops.css';
import axios from 'axios';

class MoneyOps extends Component {

    addMoney(cents, e){      
      axios.post('http://localhost:8080/vendingmachine/currency/1/insertChange/'+cents).then(function(response){
        document.getElementById('changeableConsoleText').textContent=response.data.Response;
      }).catch(function(error){
        console.log(error);
      });
    }

    getChangeValue(){
        axios.get('http://localhost:8080/vendingmachine/currency/1/currentlyInserted').then(function(response){
            document.getElementById('changeableConsoleText').textContent = "Current Change (cents): "+response.data['Inserted Money Value (Cents)'];
        }).catch(function(error){
        console.log(error);
      });
    }

    returnAllChange(){
      axios.get('http://localhost:8080/vendingmachine/currency/1/returnChange').then(function(response){
        document.getElementById('changeableConsoleText').textContent = "Change dispensed: "+response.data.Returned;
      }).catch(function(error){
        console.log(error);
      });
    }

    render() {
        return (
            <ul className="moneyops">
                <li className="coin" key='5'>
                    <p><a href="#" onClick={(e) => this.addMoney(5, e)}>Insert 5c Coin</a></p>
                </li>
                <li className="coin" key='10'>
                    <p><a href="#" onClick={(e) => this.addMoney(10, e)}>Insert 10c Coin</a></p>
                </li>
                <li className="coin" key='25'>
                    <p><a href="#" onClick={(e) => this.addMoney(25, e)}>Insert 25c Coin</a></p>
                </li>
                <li className="coin" key='100'>
                    <p><a href="#" onClick={(e) => this.addMoney(100, e)}>Insert $1 Coin</a></p>
                </li>
                <li className="service" key='getChangeValue'>
                    <p><a href="#" onClick={(e) => this.getChangeValue()}>See Inserted Change</a></p>
                </li>
                <li className="service" key='returnAll'>
                    <p><a href="#" onClick={(e) => this.returnAllChange()}>Return Change</a></p>
                </li>
            </ul>
        );
       

        // var products = this.state.data.map((currency) =>
        //     <li key={currency.id}>
        //         <h3>{currency.id}</h3>
        //         <h4>${currency.price}</h4>
        //         <h4>Click here to Purchase</h4>
        //     </li>
        // );
        // 
        // );
    }
}

export default MoneyOps;