import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../utils/queryServerApi";
import "./serv.css";
const Monitoring = () => {
  var x = "";
  History = useHistory();
  console.log("ooo");
  const user = localStorage.getItem("id");
  const [json, setJson] = useState({ us: [] });
  useEffect(async () => {
    const data = await fetch(
      "https://appcleanit.herokuapp.com/mont/get/" + user
    );
    const p = await data.json();
    console.log(p);
    setJson({ us: p });
    console.log(json.us);
  }, []);
  const del = async (id) => {
    await axios.delete("https://appcleanit.herokuapp.com/mont/" + id);
    await axios.delete("https://appcleanit.herokuapp.com/Commands/" + id);
    History.go(0);
  };
  return (
    <center>
      <br />
      <h1 Style="letter-spacing : 3px">Status of your order</h1>
      <br />
      <br />
      <div className="kaka">
        <table class="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {json.us
              .sort((a, b) => {
                if (a.state < b.state) {
                  return -1;
                }
                if (a.state > b.state) {
                  return 1;
                }
                return 0;
              })
              .map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>
                      {new Date(data.date).getDay() +
                        "/" +
                        new Date(data.date).getMonth() +
                        "/" +
                        new Date(data.date).getFullYear()}
                    </td>

                    <td
                      Style={
                        data.state === "in progress"
                          ? "color:black; font-weight:bold"
                          : data.state === "rejected"
                          ? "color:red ; font-weight:bold"
                          : data.state === "approuved"
                          ? "color:green; font-weight:bold"
                          : console.log("")
                      }
                    >
                      {data.state}
                      {console.log(data.state)}
                    </td>
                    <i
                      Style="width:25px"
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => {
                        del(data._id);
                      }}
                    ></i>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </center>
  );
};
export default Monitoring;
