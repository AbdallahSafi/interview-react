import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  //   const [status, ]
  useEffect(() => {
    const fetch = async () => {
      let res = await axios.get("http://localhost:3000/employee");
      console.log("res", res.data.results);
      setData(res.data.results);
    };
    fetch();
  }, []);
  return (
    <>
      <Container className="mt-4 d-flex flex-wrap justify-content-center">
        {data.map((e) => {
          return (
            <Card key={e._id} className="w-25 m-2">
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>Phone: {e.phone}</Card.Text>
                <Card.Text>age: {e.age}</Card.Text>
                <Card.Text>Status: {e.status.name}</Card.Text>
                <Link to={`/details/${e._id}`}>
                  <Button>Details</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
