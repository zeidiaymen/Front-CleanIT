import React, { useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
export default function Members() {
  const [list, setList] = useState({ us: [] });
  useEffect(async () => {
    const data = await fetch("https://appcleanit.herokuapp.com/user/all");
    const p = await data.json();
    setList({ us: p });
    setA({ us: p });
  }, []);
  const [a, setA] = useState({ us: [] });

  const search = (e) => {
    if (e !== "") {
      const b = list.us.filter((a) => {
        return (
          a.name.includes(e) ||
          a.last_name.includes(e) ||
          a.phonr_number.includes(e)
        );
      });
      setA({ us: [] });
      setA({ us: b });
    } else {
      setA({ us: list.us });
    }
  };
  const src = "https://appcleanit.herokuapp.com/user/Uploads/";
  return (
    <>
      <br />
      <center>
        <h1 Style="letter-spacing:3px">Members List</h1>
      </center>

      <div Style="margin-top : 100px">
        <div class="input-group rounded container   ">
          <input
            Style="max-width:250px"
            type="search"
            class=" float-right form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onKeyUp={(data) => search(data.target.value)}
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fa fa-search"></i>
          </span>
        </div>
        <br />

        <center>
          {
            <table className="table   table-striped container">
              <thead>
                <tr>
                  <th>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </th>
                  <th>Name</th>
                  <th>Last name</th>

                  <th>Email</th>

                  <th>Address</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              {a.us.map((d) => {
                return d.role === "user" ? (
                  <tbody>
                    <tr>
                      <td scope="row">
                        {" "}
                        <img
                          src={src + d.img}
                          Style="width:35px; height : 35px; border-radius:100%"
                        />{" "}
                      </td>
                      <td>{d.name}</td>
                      <td>{d.last_name}</td>
                      <td scope="row">{d.email}</td>
                      <td>{d.address}</td>
                      <td>{d.phonr_number}</td>
                    </tr>
                  </tbody>
                ) : (
                  console.log("admin")
                );
              })}
            </table>
          }
        </center>
      </div>
    </>
  );
}
