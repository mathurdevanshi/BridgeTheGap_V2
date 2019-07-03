import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {

  state = {
    username: "",
    password: "",
  };

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  resisgerUser = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    const newUser = {
      username: username.trim(),
      password: password.trim()
    }

    API.registerUser(newUser)
    .then((res) => {
      console.log(res.data.token);
      let token = res.data.token;
      localStorage.setItem("jwt", JSON.stringify(token))

      let retrievedToken = localStorage.getItem("jwt");
      console.log(JSON.parse(retrievedToken));
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-6">
            <Jumbotron>
              <h1>Register page</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.onChange.bind(this)} name="username" placeholder="username (required)" />
              <Input onChange={this.onChange.bind(this)} name="password" placeholder="password" type="password"/>
              <FormBtn onClick={this.resisgerUser} >Submit Book</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;

// key={book._id} for line 77