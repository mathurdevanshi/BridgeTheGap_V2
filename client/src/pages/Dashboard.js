import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Dasboard extends Component {

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


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12 md-6">
            <Jumbotron>
              <h1>Dashboard page</h1>
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

export default Dasboard;

// key={book._id} for line 77