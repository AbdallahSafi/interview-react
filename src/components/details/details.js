import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";

const Details = (props) => {
  const [data, setData] = useState({});
  const [statusData, setStatusData] = useState([]);

  let { id } = props.match.params;

  const onChangeInput = (e) => {
    console.log([e.target.name], e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    let res = await axios.put(`http://localhost:3000/employee/${id}`, data);
    console.log("res", res);
    props.history.push("/");
  };

  const handleDelete = async () => {
    let res = await axios.delete(`http://localhost:3000/employee/${id}`);
    console.log("res", res);
    props.history.push("/");
  };

  useEffect(() => {
      console.log('Iam here')
    async function fetchData() {
      let res = await axios.get(`http://localhost:3000/employee/${id}`);
      console.log(res);
      setData(res.data[0]);
    }
    fetchData();

    async function fetchStatusData() {
        let res = await axios.get(`http://localhost:3000/status`);
        console.log(res.data.results);
        setStatusData(res.data.results);
      }
      fetchStatusData();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col sm={6}>
            <Card className="w-100">
              <Card.Body>
                <Card.Title>Add ToDo</Card.Title>
                <Form >
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    defaultValue={data.name}
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    defaultValue={data.phone}

                      name="phone"
                      type="text"
                      placeholder="Enter phone number"
                      onChange={onChangeInput}
                    />
                  </Form.Group>
                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                    defaultValue={data.age}

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
                    value={data.status ? data.status._id : 0}
                    as="select"
                    className="mr-sm-2 mb-4"
                    id="inlineFormCustomSelect"
                    name="status"
                    custom
                    onChange={onChangeInput}
                  >
                    <option value="0">Choose one ...</option>
                    {statusData.map((e) => {
                      return (
                        <option key={e._id} value={e._id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Button className="mr-2" variant="primary" type="button" onClick={handleUpdate}>
                    Update
                  </Button>
                  <Button variant="secondary" type="button" onClick={handleDelete}>
                    Delete
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

export default Details;