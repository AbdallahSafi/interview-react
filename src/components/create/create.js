import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";

const Create = (props) => {
  const [data, setData] = useState({});
  const [statusData, setStatusData] = useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/employee", data);
    console.log("res", res);
    props.history.push("/");
  };

  const onChangeInput = (e) => {
    console.log([e.target.name], e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`http://localhost:3000/status`);
      console.log(res.data.results);
      setStatusData(res.data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col sm={6}>
            <Card className="w-100">
              <Card.Body>
                <Card.Title>Add Employee</Card.Title>
                <Form onSubmit={handleForm}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      type="text"
                      placeholder="Enter phone number"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      placeholder="Enter age"
                      onChange={onChangeInput}
                    />
                  </Form.Group>

                  <Form.Label
                    className="mr-sm-2"
                    htmlFor="inlineFormCustomSelect"
                  >
                    Status
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2 mb-4"
                    id="inlineFormCustomSelect"
                    name="status"
                    custom
                    onChange={onChangeInput}
                  >
                    <option>Choose one ...</option>
                    {statusData.map((e) => {
                      return (
                        <option key={e._id} value={e._id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;
