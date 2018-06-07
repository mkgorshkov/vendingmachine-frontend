import React, { Component } from 'react';
import './products.css';
import axios from 'axios';

class Products extends Component {

    /*
        Added the definitions of the pricing here. We can pull the definitions from the database as a set of products
        related to each of the machines.
    */
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "1",
                    name: "Item A",
                    price: "0.65",
                    price_cents: "65"
                },
                {
                    id: "2",
                    name: "Item B",
                    price: "1.00",
                    price_cents: "100"
                },
                {
                    id: "3",
                    name: "Item C",
                    price: "1.50",
                    price_cents: "150"
                }
            ]
        };
    };


    buyItem(id, e){      
      axios.post('http://localhost:8080/vendingmachine/items/1/buy/'+id).then(function(response){
        document.getElementById('changeableConsoleText').textContent=response.data.Vending+ " Change returned: "+response.data.Returned;
      }).catch(function(error){
        console.log(error);
      });
    }

    render() {
        var products = this.state.data.map((prod) =>
            <li key={prod.id} className="product">
                <p className="product-name">{prod.name}</p>
                <p>${prod.price}</p>
                <p><a href="#" onClick={(e) => this.buyItem(prod.id, e)}>Click here to Purchase</a></p>
            </li>
        );
        return (
            <div className="products-container">
                <ul className="products">{products}</ul>
           </div>
        );
    }
}

export default Products;