import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../utils/queryServerApi";
import "./claims.css";

export default function Claim() {
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [body, setBody] = useState("");
  const Client_id = localStorage.getItem("id");
  const [claims, setClaims] = useState({ us: [] });
  useEffect(async () => {
    const data = await fetch(
      "http://localhost:3000/claim/get/" + Client_id
    );
    var x = await data.json();
    setClaims({ us: x });
  }, []);

  const History = useHistory();

  const sub = async () => {
    await queryServerApi(
      "claim/add",
      { name: name, object: object, body: body, Client_id: Client_id },
      "POST",
      false
    );
    setDisp("Claim");
    History.go(0);
  };
  const [disp, setDisp] = useState("Drop");
  var handleChange = () => {
    if (disp == "Drop") setDisp("Claim");
    else setDisp("Drop");
  };
  return (
    <>
      <br />
      <center>
        <BootstrapSwitchButton
          checked={false}
          offlabel="Drop claim"
          offstyle="danger"
          onlabel="Consult claim "
          onstyle="primary"
          style="w-25 mx-3"
          onChange={handleChange}
        />
      </center>
      <br />

      <div>
        {" "}
        <div Style="max-height :400px">
          <br />
          <br />
          {disp == "Drop" ? (
            <center>
              <h1 Style="letter-spacing : 3px">Drop your claim</h1>

              <div class="contact-clean">
                <form>
                  <div class="form-group">
                    <input
                      class="form-control"
                      onChange={(e) => {
                        setName(e.target.value);
                        console.log(e);
                      }}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      onChange={(e) => setObject(e.target.value)}
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      onChange={(e) => {
                        setBody(e.target.value);
                        console.log(e);
                      }}
                      name="message"
                      placeholder="Message"
                      rows="14"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" type="button" onClick={sub}>
                      send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </center>
          ) : (
            console.log("claim")
          )}
        </div>
        <div Style="min-height : 400px;">
          {disp == "Claim" ? (
            <center>
              <h1 Style="letter-spacing : 3px"> Consult your claims </h1>
              <br />
              <br />
              <table
                className="table table-striped container"
                Style="width:60% ;"
              >
                <thead>
                  <tr>
                    <th>Claims</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {claims.us.map((data) => (
                    <tr>
                      <td>{data.object}</td>
                      <td
                        Style={
                          data.status === "in progress"
                            ? "color:crimson"
                            : "color:green;"
                        }
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          ) : (
            console.log("Drop")
          )}
        </div>
      </div>
    </>
  );
}
