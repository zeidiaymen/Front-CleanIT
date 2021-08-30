import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../utils/queryServerApi";

export default function Profile() {
  const [user, setUser] = useState("");
  const id = localStorage.getItem("id");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [img, setImg] = useState("");
  const [test, setTest] = useState();
  const [password, setOldPass] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const handlePassword = (e) => {
    if (e.target.value === user.password) {
      setTest(true);
    } else {
      setTest(false);
    }
  };
  useEffect(async () => {
    const data = await fetch("http://localhost:3000/user/" + id);
    const p = await data.json();
    setUser(p);
  }, []);
  const History = useHistory();
  const sub = async () => {
    if (img === "") {
      let imgs = user.img;
      console.log(imgs);
      await queryServerApi(
        "user/updat/" + id,

        { name: name, email: email, password: password, address: address },

        "PUT",
        false
      );
      console.log("done");
    }
    if (img !== "") {
      console.log("bel taswira");
      await queryServerApi(
        "user/update/" + id,
        {
          name: name,
          email: email,
          img: img,
          password: password,
          address: address,
        },
        "PUT",
        true
      );
    }
    History.go(0);
  };
  const imgs = "http://localhost:3000/user/Uploads/" + user.img;
  return (
    <Container Style="min-height : 650px">
      <br />
      <br />
      <Row>
        <Col>
          <br />
          <br />
          <br />
          <img
            Style="height : 400px ; width : 400px; border-radius:15%"
            src={imgs}
            alt="profils pic"
          />
        </Col>
        <Col>
          <h1 Style="letter-spacing : 3px">User Profile</h1>
          <Form className="form">
            <Form.Group controlId="formCategory1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formCategory2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={user.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formCategory3">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                type="password"
                defaultValue=""
                onChange={handlePassword}
              />
            </Form.Group>
            {test ? (
              <Form.Group controlId="formCategory3">
                <Form.Label>New password</Form.Label>
                <Form.Control
                  type="password"
                  defaultValue={user.email}
                  onChange={(e) => setOldPass(e.target.value)}
                />
              </Form.Group>
            ) : (
              console.log("wrong")
            )}{" "}
            {test === false ? (
              <div class="alert alert-danger" role="alert">
                <strong>wrong password</strong>
              </div>
            ) : (
              console.log("")
            )}
            <Form.Group controlId="formCategory3">
              <Form.Label>Adress</Form.Label>
              <Form.Control
                type="text"
                defaultValue={user.address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formCategory4">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                name="profileImage"
                onChange={(e) => {
                  setImg(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={sub}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
