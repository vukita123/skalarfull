import React, { Component } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';




export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          book_name : "",
          book_author : "",
          book_cover : "",
          book_description : "",
          book_price : "",
          id : "",
          add : "",
          records: []
        };
        // this.componentDidMount = this.componentDidMount.bind(this);
        
    }

  
    componentDidMount(){
        // console.log({...localStorage});
        for (const key in localStorage) {
            // //console.log(`${key}: ${localStorage.getItem(key)}`);
            console.log(JSON.parse(localStorage.getItem(key)))
            this.getterf(key);
        }
   }

   getterf(id){
    axios
        .get("http://localhost:5000/record/" + id)
        .then((response) => {
          this.setState({
            book_name: response.data.book_name,
            book_author: response.data.book_author,
            book_cover: response.data.book_cover,
            book_price: response.data.book_price,
            book_description: response.data.book_description,
            id : response.data._id
          });
          console.log("success");
        })
        .catch(function (error) {
          console.log(error);
        });
   }

   removeFromCart(id) {
       localStorage.removeItem(id);
       this.componentDidMount();
   }

    
   render() {
    return (
      <Container>
        <div width="100%" align-content="center">
        <div>  <img src={this.state.book_cover} alt="bookimg" width="50%" />  </div>
        <div class="bookitemtext" display="inline-block">
            <div class="book_name">{this.state.book_name}</div>
            <div class="book_author">{this.state.book_author}</div>
        </div>
        <div class="book_price">{this.state.book_price}</div>
    </div><div> 
            <button onClick={() => this.removeFromCart(this.state.id)}>ukloni</button>
        </div>
      </Container>
    );
  }
}