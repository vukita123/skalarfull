import React, { Component } from "react";
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
const nodemailer = require('nodemailer');

const Record = (props) => (
  <NavLink className="navbar-brand" to={`/singlebook/${props.record._id}`}>
  <div class="cart_container">
        <Col class="cart_book_img">
          <div class="cart_img">  
            <img src={props.record.book_cover} alt="bookimg" />
          </div>
        </Col>
          
        <Col  class="cart_book_desc">
          <div class="cart_book_text" display="inline-block">
            <div class="cart_book_name">{props.record.book_name}</div>
            <div class="cart_book_author">{props.record.book_author}</div>
          </div>

          <div class="cart_book_price">{props.record.book_price}.00 din</div>

        </Col>
  </div>
  </NavLink>
);



export default class Cart extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      subject:'',
      message: '',
      records: [],
      total: []
    };
  }

  // This method will get the data from the database.
  componentDidMount() {

    for (const key in localStorage) {
                  // //console.log(`${key}: ${localStorage.getItem(key)}`);
                  console.log(JSON.parse(localStorage.getItem(key)))
                  
                  //this.getterf(key);

                  axios
                  .get("http://localhost:5000/record/" +key)
                  .then((response) => {
                    this.setState(prevState => ({ records: [...prevState.records, response.data] }));
                    this.setState(prevState => ({ total: [...prevState.total, response.data.book_price] }));
                    console.log(this.state.total);
                  })
                  .catch(function (error) {
                    console.log(error);
                    console.log("failed here");
                  });
    }

  }

  //testing localstorage


  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      console.log(currentrecord._id);
      return (
          <Record
            record={currentrecord}
            key={currentrecord._id}
            name = {currentrecord.book_name}
          />
      );
    });
  }

  totalList(){
    var numberArray = this.state.total.map(Number);
    var sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
      sum += numberArray[i];
    }
    return (" "+ sum.toFixed(2)+ " din");
  }

  // removeFromCart() {
  //   localStorage.clear();
  // }



  // SUBMIT FORM


  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:5000/record/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          console.log("worked");
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
          console.log("failed");
      }
    })
}

resetForm(){
    this.setState({name: '', email: '',subject:'', message: ''})
}




    onNameChange(event) {
      this.setState({name: event.target.value})
  }

  onEmailChange(event) {
      this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
      this.setState({subject: event.target.value})
  }

  onMsgChange(event) {
    this.setState({message: event.target.value})
}




  // This following section will display the table with the records of individuals.
  render() {
    return (
      <Container>
        <div>
          Vaša korpa:
        </div>

        <Row>
            {this.recordList()}
        </Row>
        <Row>
          <div class="books_total">
            Ukupno: 
            {this.totalList()}
          </div>
        </Row>
        {/* <NavLink className="navbar-brand" to={`./checkout`}>
          <div class="check_btn">
          <button class="button-23" onClick={this.removeFromCart}>Poruči</button>
          </div>
        </NavLink> */}


<div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                    method="POST">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name" type="text" 
                                       className="form-control" required value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)}/>
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                      required value={this.state.email} onChange=
                                      {this.onEmailChange.bind(this)}/>
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject"  id="subject" type="text"
                                      className="form-control" required value={this.state.subject}
                                      onChange={this.onSubjectChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message" 
                                       className="form-control" rows="1" 
                                       required value={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)}/>
                                </div>
                                <button type="submit" className="primary-btn submit">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


      </Container>
    );
  }
}
























// import React, { Component } from "react";
// import axios from 'axios';
// import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';




// export default class Cart extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           book_name : "",
//           book_author : "",
//           book_cover : "",
//           book_description : "",
//           book_price : "",
//           id : "",
//           add : "",
//           records: []
//         };
//         // this.componentDidMount = this.componentDidMount.bind(this);
        
//     }

  
//     componentDidMount(){
//         // console.log({...localStorage});
//         for (const key in localStorage) {
//             // //console.log(`${key}: ${localStorage.getItem(key)}`);
//             console.log(JSON.parse(localStorage.getItem(key)))
//             this.getterf(key);
//         }
//    }

//    getterf(id){
//     axios
//         .get("http://localhost:5000/record/" + id)
//         .then((response) => {
//           this.setState({
//             book_name: response.data.book_name,
//             book_author: response.data.book_author,
//             book_cover: response.data.book_cover,
//             book_price: response.data.book_price,
//             book_description: response.data.book_description,
//             id : response.data._id
//           });
//           console.log("success");
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//    }

//    removeFromCart(id) {
//        localStorage.removeItem(id);
//        this.componentDidMount();
//    }

    
//    render() {
//     return (
//       <Container>
//         <div width="100%" align-content="center">
//         <div>  <img src={this.state.book_cover} alt="bookimg" width="50%" />  </div>
//         <div class="bookitemtext" display="inline-block">
//             <div class="book_name">{this.state.book_name}</div>
//             <div class="book_author">{this.state.book_author}</div>
//         </div>
//         <div class="book_price">{this.state.book_price}</div>
//     </div><div> 
//             <button onClick={() => this.removeFromCart(this.state.id)}>ukloni</button>
//         </div>
//       </Container>
//     );
//   }
// }