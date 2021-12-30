import React, {Component}from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Books from "./components/books";
import Singlebook from "./components/singlebook";
import Cart from "./components/cart"

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <Route exact path="/">
            <Books />
        </Route>
        <Route path="/singlebook/:id" component={Singlebook}/> 
        <Route path="/cart" component={Cart}/>   
      </div>
    );
  };
}