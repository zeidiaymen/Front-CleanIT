import { SettingsCellSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";

const AdminServ = () => {
  var cap = false;
  History = useHistory();
  const user = localStorage.getItem("id");
  const [json, setJson] = useState({ us: [] });

  const [ps, setPs] = useState({ ks: [] });

  var tab = [];
  const [bool, setBool] = useState(false);

  useEffect(async () => {
    const data = await fetch("https://appcleanit.herokuapp.com/mont/get");
    const p = await data.json();
    console.log(p);
    setJson({ us: p });
    for (let i = 0; i < p.length; i++) {
      var x = await fetch("https://appcleanit.herokuapp.com/user/" + p[i].Client_id);
      var r = await x.json();
      console.log(r);
      tab.push(r.name);
    }
    console.log(tab);
    setPs({ ks: tab });
  }, []);
  const del = async (param) => {
    await queryServerApi(
      "mont/put/" + param,
      { state: "rejected" },
      "PUT",
      false
    );
  };
  const acc = async (param) => {
    await queryServerApi(
      "mont/put/" + param,
      { state: "approuved" },
      "PUT",
      false
    );
  };

  return (
    <center>
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
          <br />
          <h1 Style="letter-spacing : 3px">Monitoring Services</h1>
          <br />
          <br />
          <div Style="width : 60%;min-height : 400px;">
            <table class="table">
              <thead>
                <tr>
                  <th>Client</th>
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
                  .map((data, i) => {
                    console.log(i);

                    return (
                      <>
                        <tr key={i}>
                          <td>{ps.ks[i]}</td>
                          <td>{data.name}</td>
                          <td>
                            {" "}
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
                          </td>

                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            onClick={async () => {
                              acc(data._id);
                              setBool(true);
                              await setTimeout(async () => {
                                History.go(0);
                                setBool(false);
                                console.log(bool);
                              }, 1500);
                            }}
                          >
                            Confirm
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            onClick={async () => {
                              del(data._id);
                              setBool(true);

                              await setTimeout(async () => {
                                setBool(false);
                                console.log(bool);
                                History.go(0);
                              }, 1500);
                            }}
                          >
                            Refuse
                          </button>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </center>
  );
};
export default AdminServ;
