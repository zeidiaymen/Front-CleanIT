import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { Modal, Button } from "react-bootstrap";
import {
  SettingsOutlined,
  SettingsSystemDaydreamOutlined,
} from "@material-ui/icons";

export default function CadminClaim() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({ us: [] });
  const [bool, setBool] = useState(false);
  useEffect(async () => {
    const data = await fetch("https://appcleanit.herokuapp.com/claim/get");
    const p = await data.json();
    setData({ us: p });
  }, []);
  const [email, setEmail] = useState("");
  const History = useHistory();
  const sub = async (e) => {
    setEmail(e.name);

    setShow(true);
    await queryServerApi(
      "claim/update/" + e._id,
      { status: "treated" },
      "PUT",
      false
    );
  };
  var i = 0;
  var incr = () => {
    i += 1;
  };
  const [html, setHtml] = useState("");
  const operation = async (e) => {
    console.log(email);
    console.log(e.name);
    await queryServerApi("user/mail", { to: email, html: html }, "POST", false);
  };
  return (
    <>
      {bool ? (
        <div class="container e">
          <div class="row text-center">
            <div class="centered">
              <div class="blob-1"></div>
              <div class="blob-2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <center>
            <br />
            <h1 Style="letter-spacing:3px">Monitoring Claims</h1>
          </center>
          {data.us.map((data) => {
            incr();
            return (
              <>
                <div
                  Style="width:900px;min-height: 400px ;border : 5px solid black; margin-top:50px;"
                  className="container"
                >
                  <br />

                  <center>
                    {data.status === "in progress" ? (
                      <h2 Style="color:red ; letter-spacing:3px">
                        {" "}
                        Claim N {i} is not treated
                      </h2>
                    ) : (
                      <h2 Style="color:green;letter-spacing:3px">
                        {" "}
                        Claim N {i} is treated
                      </h2>
                    )}
                  </center>
                  <table class="table">
                    <thead>
                      <br />
                      <tr>
                        <th Style="letter-spacing:3px; width:190px;">Email</th>
                        <td>{data.name} </td>
                      </tr>
                      <tr>
                        <th Style="letter-spacing:3px">Object</th>
                        <td>{data.object}</td>
                      </tr>
                      <tr>
                        <th Style="letter-spacing:3px">Body</th>
                        <td
                          Style={
                            data.status !== "treated"
                              ? "border:1px solid crimson;background-color:#DCDCDC"
                              : "border:1px solid green;background-color:#DCDCDC"
                          }
                        >
                          {data.body}
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <br />
                  <br />
                  <center>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => sub(data)}
                    >
                      {" "}
                      Treat{" "}
                    </button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header>
                        <center>
                          {" "}
                          <Modal.Title>RE CLAIM</Modal.Title>{" "}
                        </center>
                      </Modal.Header>
                      <Modal.Body>
                        <div class="form-group">
                          <label for="">Messag</label>
                          <textarea
                            class="form-control"
                            name=""
                            id=""
                            rows="3"
                            onChange={(e) => {
                              setHtml(e.target.value);
                            }}
                          ></textarea>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          onClick={async () => {
                            operation(data);
                            console.log(data);
                            setBool(true);
                            setTimeout(async () => {
                              setBool(false);
                              console.log(bool);
                            }, 3000);
                            setShow(false);
                          }}
                        >
                          Send
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </center>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
