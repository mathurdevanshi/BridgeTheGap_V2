import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Dasboard extends Component {

  state = {
    authenticated: false
  };

  componentDidMount() {
    console.log("component is mounting");
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };


  render() {
    if (this.state.authenticated) {
      return (
        <Container fluid>
          <Row>
            <Col size="lg-12 md-6">
              <Jumbotron>
                <h1>Dashboard page</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return(
        <h1>You are not authenticated</h1>
      )
    }
  }
}

export default Dasboard;

