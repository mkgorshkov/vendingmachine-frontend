import React, { Component } from 'react';
import './serviceops.css';
import axios from 'axios';

class MoneyOps extends Component {

    getAvailableChange(){
        axios.get('http://localhost:8080/vendingmachine/service/1/availableChange').then(function(response){
            var toReturn = "| ";
            for(var i = 0 ; i < response.data.length; i++){
                toReturn += response.data[i]['Currency Name'] + ": Current: "+response.data[i]['Number of Coins'] + " Max: " + response.data[i]['Max Number of Coins']+"  |  ";
            }
            document.getElementById('changeableConsoleText').textContent = toReturn;
        }).catch(function(error){
        console.log(error);
      });
    }

    getAvailableStock(){
      axios.get('http://localhost:8080/vendingmachine/service/1/availableStock').then(function(response){
        var toReturn = "| ";
            for(var i = 0 ; i < response.data.length; i++){
                toReturn += response.data[i]['Product Name'] + ": Current: "+response.data[i]['Current Number'] + " Max: " + response.data[i]['Max Number']+"  |  ";
            }
            document.getElementById('changeableConsoleText').textContent = toReturn;
      }).catch(function(error){
        console.log(error);
      });
    }

    restockItems(){
      axios.post('http://localhost:8080/vendingmachine/service/1/restockProducts').then(function(response){
        document.getElementById('changeableConsoleText').textContent = response.data['Replenished Inventory'];
      }).catch(function(error){
        console.log(error);
      });
    }

    restockChange(){
      axios.post('http://localhost:8080/vendingmachine/service/1/restockChange').then(function(response){
        document.getElementById('changeableConsoleText').textContent = response.data['Replenished Register'];
      }).catch(function(error){
        console.log(error);
      });
    }

    render() {
        return (
            <ul className="serviceops">
                <li className="service_private" key='showAllChange'>
                    <p><a href="#" onClick={(e) => this.getAvailableChange()}>Show Available Change</a></p>
                </li>
                 <li className="service_private" key='showAllChange'>
                    <p><a href="#" onClick={(e) => this.getAvailableStock()}>Show Available Stock</a></p>
                </li>
                <li className="service_private" key='restockItems'>
                    <p><a href="#" onClick={(e) => this.restockItems()}>Restock All Items</a></p>
                </li>
                <li className="service_private" key='restockChange'>
                    <p><a href="#" onClick={(e) => this.restockChange()}>Restock All Change</a></p>
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