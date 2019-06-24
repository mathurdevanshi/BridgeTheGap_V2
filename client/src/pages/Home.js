import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
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

  searchBooks = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    const newUser = {
      username: username.trim(),
      password: password.trim()
    }
    API.saveUser(newUser)
    .then((res) => {
      console.log(res);
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
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.onChange.bind(this)} name="username" placeholder="username (required)" />
              <Input onChange={this.onChange.bind(this)} name="password" placeholder="password" type="password"/>
              <FormBtn onClick={this.searchBooks} >Submit Book</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;

// key={book._id} for line 77