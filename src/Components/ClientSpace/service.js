import React, { useState, useEffect } from "react";
import "./serv.css"
import { queryServerApi } from "../utils/queryServerApi";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../../App.css";
import img from "../utils/1.gif";
import { isBrowser } from "react-device-detect";

export default function Service() {
  const [bool, setBool] = useState(true);

  useEffect(async () => {
    await setTimeout(async () => {
      setBool(false);
      console.log(bool);
    }, 1500);
  }, []);

  const dateValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    10
  );

  const disableWeekends = (current) => {
    return current.day() !== 0 && current.day() !== 6;
  };
  const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  const [name, setName] = useState("Initial cleaning");

  const [frequency, setFrequency] = useState("Weekly");
  const [date, setDate] = useState(new Date());
  const [extra, setExtras] = useState([]);

  const Client = localStorage.getItem("name");
  var Client_id = localStorage.getItem("id");
  const sub = async () => {
    await queryServerApi(
      "serv/post",
      {
        Client_id: Client_id,
        name: name,
        frequency: frequency,
        extra,
        date: date,
      },
      "POST",
      false
    );
    await queryServerApi(
      "Commands/post",
      { name: name, Client: Client },
      "POST",
      false
    );
    await queryServerApi(
      "mont/add",
      { Client_id: Client_id, name: name, date: date },
      "POST",
      false
    );
  };

  return (
    <div>
      {bool == true ? (
        <center>
          <img className="pre" src={img} />
        </center>
      ) : (
        <div>
          <br />
          <center>
            <h1 Style="letter-spacing : 3px">Selected Cleaning</h1>
            <br />
            <br />
          </center>
          <center>
            {isBrowser ? (
              <div className="container">
                <div
                  Style="display : grid ;   grid-template-columns:1fr 1fr ;
"
                >
                  <div>
                    <img src="data:image/jpeg;base64,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" />

                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name=""
                          id=""
                          value="Initial cleaning"
                          onChange={(e) => {
                            setName(e.target.value);
                            console.log(e.target.value);
                          }}
                          checked={name === "Initial cleaning"}
                        />
                        Initial cleaning
                      </label>
                    </div>
                  </div>
                  <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLi5MMWPx2rxbAxLdrGEzOKLnfEwseT739mQ&usqp=CAU" />
                    <div class="form-check">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name=""
                            id=""
                            value="Upkeep cleaning"
                            onChange={(e) => setName(e.target.value)}
                            checked={name === "Upkeep cleaning"}
                          />
                          Upkeep cleaning
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <img src="data:image/jpeg;base64,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" />

                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name=""
                        id=""
                        value="Initial cleaning"
                        onChange={(e) => {
                          setName(e.target.value);
                          console.log(e.target.value);
                        }}
                        checked={name === "Initial cleaning"}
                      />
                      Initial cleaning
                    </label>
                  </div>
                </div>
                <div>
                  <br />
                  <br />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLi5MMWPx2rxbAxLdrGEzOKLnfEwseT739mQ&usqp=CAU" />
                  <div class="form-check">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name=""
                          id=""
                          value="Upkeep cleaning"
                          onChange={(e) => setName(e.target.value)}
                          checked={name === "Upkeep cleaning"}
                        />
                        Upkeep cleaning
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </center>
          <br />
          <br />
          <center>
            {" "}
            {name === "Upkeep cleaning" ? (
              <div>
                <h1 Style="letter-spacing : 3px">Selected Frequency</h1>
                <br />
                <br />
                <div
                  className="Frequency"
                  Style="display : grid ;   grid-template-columns:auto auto auto  ;"
                >
                  <div class="form-check ">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name=""
                        id=""
                        value="Weekly"
                        onChange={(e) => setFrequency(e.target.value)}
                        checked={frequency === "Weekly"}
                      />
                      Weekly
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name=""
                        id=""
                        value="Bi-weekly"
                        onChange={(e) => setFrequency(e.target.value)}
                        checked={frequency === "Bi-weekly"}
                      />
                      Bi-weekly
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name=""
                        id=""
                        value="Monthly"
                        onChange={(e) => setFrequency(e.target.value)}
                        checked={frequency === "Monthly"}
                      />
                      Monthly
                    </label>
                  </div>
                </div>{" "}
              </div>
            ) : (
              console.log("no")
            )}
          </center>

          <center>
            <br />
            <br />
            <h1 Style="letter-spacing : 3px">Selected Extras</h1>
            <br />
            <br />
            {isBrowser ? (
              <div Style="display : grid ; grid-template-columns:1fr 1fr 1fr 1fr">
                <div>
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="data:image/jpeg;base64,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"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => setExtras([...extra, "Inside fridge"])}
                      />
                      Inside fridge
                    </label>
                  </div>
                </div>

                <div>
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavwx-INPxvdX1-Np8QkjtDDZ3GRLWToV_KQ&usqp=CAU"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => {
                          setExtras([...extra, "Organizing"]);
                          console.log(extra);
                        }}
                      />
                      Organizing
                    </label>
                  </div>
                </div>
                <div>
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="data:image/jpeg;base64,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"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        onChange={() => setExtras([...extra, "Small blinds"])}
                        value="checkedValue"
                      />
                      Small blinds{" "}
                    </label>
                  </div>
                </div>
                <div>
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGg9N1o95kt6uV0WizfgFe6XyGqlZR461FmQ&usqp=CAU"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => setExtras([...extra, "Patio"])}
                      />
                      Patio{" "}
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <div>
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFhUVFRkaFxgWFxYXFhcWFxYWFxUWGBkYHSggGBolGxYXITEhJiorLi4uFx8zODUtNygtLisBCgoKDg0OGxAQGyslICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANMA7gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQHAgj/xABMEAACAAMEBAcKDAYCAQUBAAABAgADEQQSITEFBkFREyJhcYGRshQjMjNSU2JyobEHFUJDgpKTosHC0dIWNHPT4fBUlGREY4Oz8SX/xAAaAQACAwEBAAAAAAAAAAAAAAAABAIDBQEG/8QANBEAAgECBAIIBgICAwEAAAAAAAECAxEEEiExQVEFMmFxgZGh8BMUIrHB0VLhM9JikvEj/9oADAMBAAIRAxEAPwD3GEI0z56opd2CqoqWYgKBvJOAEAG6EUfSXwn2CUbqcLO5Zai70GYVrziojt0PrvZbWkzgSVmS5bPcmi6aKDjgSGAOdDhyVERzxva5LJK17FrhEFqjrAlusyz1F1q3ZiVrcmAAla7RQgg7iMonY6ndXONNOzEIQjpwgdLAcIcK4D8Y7uDXzDLzXB2GrHFpTxp5hE7ABHcT/wB8fbn31EOGQf8AqCORuDHaWsSMIAOJL5xSajDfdr7VcRlJk0lhxOKR5WNQD+MZnIA6MMCWumm0XWND0gH/APYI1GmndQ9SCOAffffQ+9Ge++h96ISXpaz0Be8zEYkqxx203DkEbPjWyeSfqGKvj0v5LzL/AJWt/B+RL999D70O++h96Ij41snkn6hjtsHAzkExE4pLDEUPFYqfapiUakZ9VpkJ0Z09Zpo6u++h96HffQ+9GO4pfkCHcUvyBFhWZ776H3od99D70Y7il+QIdxS/IEAGe++h96Md99D70O4pfkCPk2NdgunYVwI/3dlAB8zJk0XfA4xp8rDAn8ITOEGLTEUb7hHtL0jAcssljmSpPOUNY+lQNMYnG6AF5KipI5TX2COAaeHT/kV5F4M+wKTCqHbPPROA9gAMSMI6BH8GvmXb1rp7bRCWxRU8WnGOGGGJwwwi1xVtI+E3rt7zABPaQtaSZbzZjXURSzHcBybTybY8F1v1qnW+YSxKSQe9ytg3M9MGflxpkNpPoHwz2tls0qUCQJs2rU2hFJCn6RU/Rjx+4IWrT1yjNGOmYxyGNlnnshvKaG6y19F1ZGHSrEdMayacpjB5cTFJaWTVvXO0WGW8qQsohnvsZiuxqVVQBdcACi7jmYm7L8LVsB75Ks7jcBMlnrLt7ogtHamWmdJ4ZboJxRGJUsvlA5DPCueeGFYa22KbJa7NRlO5hSvMcmHKIkpvZM44Ldo9k0D8JtknkJOBs7na5BlE7uEGX0gByxeFIOIj8tYbMP8Ad0Xr4PddmsrrZ7Q1bOxopJ8SSaAg7Je8bMxtrbCrwl7/AB5FM6XGPv8AJ6hpbxh5hHb3TMoWuoQGu5kVo10tkaAGuGORjh0qe+H1RlzR08C1CvfgCSSO8HEm8chvMMFB993sFVygutkQw3FqmoAAIBp0ZVw+3t5FKy3xxHg1NSFpSudWGHLGh7PVAhM66BTwUOFKbF3Rmat4qS82qmo70c+Wi8kcOm9p9WQEFWDioNDgUehBGzA9Rj6f57m/II5qkzUJYmpAoZbLkswjE4bTHSfnv9+QIDhBJkOYR9RGLoxqeOm/Xmfvj6+LG89N+vM/fEfiy/i/OP8AsWfBp/zj5T/0JCIux6xWiUGRLOWVZs6jUc179MxwFI+/ixvPTfrzP3xKaCWkkCpNHmiprU0nTMTWFMZXqRgmrrX/AIvh2N/gsp06cXwl3Zl90iMn63WpVZu5aUUnFZlMBXHDKLxFd01/Lz/6MzsNHUdCt5+Z7f1iOCrVKilfXbl+iNe11lViYhEN8St5+Z7f1jbYrI0qZQzGcMjeEThdK5Y+lDt5cV6lGptt+kpcpWZiCVpxQRexIAwJ5a80fdlt0uYFKsKsAbtReFRXEA4GI+boWVOmTHe9evUwNMAqgRmRoiXImS2l3qsxU1NcODdveogvK/YMNUcnHN3K222/qdcrxcjnXsGPrhrrvgSSVAA2m7XbkKAx8yvFyOdewY1za8MxqRSmUtnzXHEZZRIpNq28k3RLaorUVTClK1xwzFN8YW3MwJWWSFFTVgCcK3QBXjU2GmY6NSYMzB5tWpWklqYCgpVYzKlFa3WncZix4iZnM8ZYDh9C1zCpcKl0GnhE4VoWrQYA1wpjQxD2ytWrnfatMq1MSUuzELcHD3d3eBmanMViNtmZrWt453a5nOmFeaOoDv1o1el26TwMwlaEMjjNHAIrQ5ihII2g7DQx4vrhqs2j2lq85ZhmBiLqlaBboqak0qTlyGP0HHiXwwzC2kFWposiWABvLzD7agdAimtGNrl1GTvYotd2e0xddS9U+EIn2gcXApLOb7ncbE3DbzeFnQmpTcGZtoYSjTiggd7GFZj1wDAVIU4A0LVxWLtZNBWeWUKSZQcVZTRDOOBDPePHYmpq2NamsKN32G4xs7ux3xyaSWstgZQnVoODNyjVIGN/AAVqTuBoCcI64S0qQN5A6zSKUMvYodu1ODsKyVlXzS9ImNNRGO15c1FNzZVDtxFMYgtK6l2qTUqvCrvl4mnKh43VXni06J1xFstDWZEEm8WMmZVnZhKq5WYpoKtLVjxSKUpjnFrlMKAVJoAKmlTTaabYunmhuL01Gpdq5D6kaXM+zIswnhJPemrmblLla7bpUGu0GLppHTlnkMEnTAhIqKq1CK0wNCOjlG+IGcuNaYnM7TTKIqVosW+22qXa5ky7ZyglhWCgXl49MN4EW0685fSt/wD3fyOSwcbOblZJXel+KWiuuMlu9Fz2L7YbYk1A8s1U5G6wqN4qAacsccvWCzswUM1SaAcFOGPLVMIgNU5zpLtkoTGK2ec0uVUglZa4KAaY5RKPZwsoTgW4SgOe0kA+8xytiZw6qWicnfkuWu+gvLC5ZuLlxSWj1urrjp27k1ac5fr/AJHjW/z3N+QQc14Inaw/+t4w3z3N+QQ4LkPLs70HEbIbOSPrgH82/VG+1q6hVko7NdBNZzqqg5YXxXI4RGzZGkDkCvNMH5nMRc7cy2FDOr5orva/v1OvgJnm36o+9GyXRLrI9b8w5bGmuw9hEcMuTpAZgtzzB+VxHfLmuisZ8uYtFZqpOZr10FiAL9QaDCKa0I1lad1bUk6Tp6qUX3NfmzMaSlO8maio9WluowpiykD2mJjur0H+qYrn8R2fzdq62/uQ/iOz+btXW39yKqDoUU1GW/N/0SlQrS3j9v2WPur0H+qY0vO74rXHoFYeDtJQjsmODRFulWguFWetwKTfdxW9epSjnyDEr3Gu9/tJn7ocjJSV1sLyi4uz3NMifQtVHxYkcXZQfpGLROJaWQj8VyTxdlx197CN/ca73+0mfuh3Gu9/tJn7o6ROeT4uRzr2DGm32xZQmsxQVKgX3VFJK5Xmwyr1Ruk+Lkc69gx8zfGP9HsxCpLLFslFXZqsOlZZkNMvS7ssG9cmI6qAMOMKAYRG6saaWa7y6y7zEuLkxXz8KoGIGWPLG3S1pApKp4as9dne2lqR08IOqIoz+DIYZni4GlL/ABK9F6vRGZUxUlXpxXZ6u3Zw931G4UU6cm/dtSO/jNBpI7ZZAs+DLeqH8K6T5ZO2tDvwiw6Q8JvXb3mPI67sObZzR6u8zhFD+VRvrCv4w/h5uV/e450xhIYfJl5Nf9bfssekZpWUzLmBhyVwr0RTJejZRnd0Mt6aFChjjdALGo3NxjjnF6dQQQcQcDzREtoMAkox5AceisRxFOcmnESw1WnGLUiFtARhdYAjl3jIjceWPP8AWbQds+Mpc6zS5jBjJ4B0DFJXBIiFHYYSwpVia0BVq41MegT7Oa0OBBjbKqBSpxzhenUyDdakpxVnqbJtLzUyqac1cI4NF2py01XPHlTSAQKAo1JkojmVwpO9GhpHSIk3bysQ1cRTMbDUxCLpsIXMmUA0xrzFmLFmoFGHMqgCtAABEEmxmnhqtS2Vad67jusGq1lkWh7VKEzhGv0RiplyjMqHMvC9kWABOAYjdSQlyjWOpeXON1ls5mNdGW07hHXKU2UQy0ou2iNaptI5v92R1WjV2zuxd7LKZ2NSzMSScqnDkEfWkEAmUGQVQIktIaQl2db81rq1pWhOJqdg5DD+WMIfVay3vbzMx1Jynmje7+3I4LLoaXLUrLkIit4QR2UHZiFGMbfiweZT7V/2x32S0rNRZiGqsAQaEVBywMc1o0hcmKnBsb13jAcUVNMTyQSdNJN28ue3AgnUbervx15HxwLK8uqgC/smu/yH2MAI3t89zfkEbbTnL9f8jxqb57m/IIsImk+GlZhTvQpS5jiK1vA+jTpjbh/yG65P7IBQGlkgUZLuO8UZR1X46+CXyR1CADkw/wCQ3XJ/ZHDpNwEY8KXpKmk+AaC6K4Ita1p7YmeCXyR1CI3SiAhwAOLJmE4bWFF9geOS6r7iUOsii/GMryj9R/2w+MZXlH6j/tjfwa+SOoRng18kdQjAze7m1bsJnUmervPKmouyhkRjWdvEW6KrqeoEyfQAcSV2p8WqNrDf4omRiP8ALIQhCLyk4JXi5HOvYMap70mPgx8HJWbZ6IMbJXi5HOvYMcelrUslZs5g5u3AAhmYk0AFJdTtzoYjKGdZQc1BZnwOHSkp3mS2VJhAlzQTccULPZyoxG5G6o4LVY5pC0lzMHQ+A2QcEnLdHwuuS7ZM0fTnDtJFnss6W8lZ4d7jKHwctgRXCmcL1ejV8SM5N3Vrarg7naPSMZxcYeN01v32PJP4atf/AB5n1T+kX+WhEtAQQQqgg4EEChBiesc5JtbjzMKVqCM608JccoibbgWFa8ds+cxfTo/DbQ5i+kZY3LJqOl7Zb8bdr5FphCETEjituj1mY5Nv388Q06xzEzU03jEf4izQimpQjN32ZfTxEoaboplps6TFKOKg/wC1G4xyWXQ0mWwYAkg4XjWh2UAGcWfSFqlkmUwNNrClQc4i7RYml0dSGWoIYchwqOeEZLLfK7pb9nvyH6ONTTjmy9l9Gdlm0Y7eFxRy59X6xM2eQqCij9TzxqsVqExQcjtG4/pHPbdMSpTXGvVpXAVz6YdgqVOOZPTmIuVWvLKlfsRy6U8aeYRnWG0Yqg9Y+0D8YjdIaWR2LJWtMKjaN+MR0+3u7lmpUkVoDzYYwpjcQnTy03qxnC4OpmzTja3MtehLRelUOaYdGYP+7ooWmNIGZPacpybiHcF8Ajqr0mJmTbwqTVqQXlso9Y5HkzMViZLKmhjOxFecqEIvhv4aL09TUwGGVOpObW+3du/Wx6ZZrWJySJg+U1eY3HDDoII6I3N89zfkEQWp/iE5JzU5O9195PXE63z3N+QRu0JupSjN7tIwMRTVOrKC4NnPJ0cCo73IyHzfJzxs+LR5uR9n/mNzWhZcsMxwCjpwFAOWKpbtbHvSylxZUy9R8DiFvrUni0Kq/UN8dnVhDcXlNRO19JWNWKtwKlSQb0l1GBpmRQiJZbApAIlyKHHxcVTRWmuEnGexE1acGpAIW4SGLIaXX5xUbKxeLNOV1DKagjCIUKrm3fytZ/d+hZKUHpHx92Rx/Fo83I+z/wAw+LR5uR9n/mJKICbrZZVtaWK8TMdSQVoUGDG6zA4NRSereIYIXR3fFo83I+z/AMw+LR5uR9n/AJiQEarU4VGLEBQpJJyAAxJgO3OT4uXzcj7MfrD4uXzcj7MfrFD+A4yxZ7QEREImqSqmYeKZahWPCOxGIYZ/JjV8DryjOtxlqgLOjAq0w30vTqNx3Ybfk0zjlybg1fsPQ5I73I+j2DERrFJDtdatL1aVIxCgA4c564lpXi5HOvYMV7XG0MjrdNKk1wB+Sm+LqEXKoku37MUxjSoyb20+6IfSlhRZM1lqCstyMciFJEfejtOiTIazohJBIrWiLVUooGZ4pB2DHPOIzSOkJhlTQTUGVMBwGRUxps6kvMAFTwlabacGmPNgeoxoxo/Vao+T+5hKooO9JW0a27Yr33lk0LrEJbnhV4rAVK1qKVxI2jHZjzxJW88ZvXb3mKfNs7gYqccMtpyEW+17fWPvML42EYtSjxv6WNPo2pNqUZcLW8b3LVCEIRNIQhCACq6QSkxx6RPXj+MZsVvWUSZjASyONXLk/SOrTsukwN5S+0f4Iipazk3F3XseemH5oxbOGI05/wB/ZlmEoKtXjTbtd/hv8E8NY7DJJKO7HcqtTm41AeuIHTeipEybwwacVnKJgpabSBxswAJlFxB4owGWyK3SLNZ5JWRLvHo3BqsByZ16TF1aajBRWmvA9BPA0MK45b3k2tdeF+S2tbxI34jlb5//AGrV/dh8Ryt8/wD7Vq/uxPPZbyqUGYxx5t/THHbCsrBmF6lbopgo8KY5NAksAEljhhQVJAK6U27K4OdOKu7Lw/ojfiOVvn/9q1f3Ytep+r8hUdyhcs1O+vMnUCjZwrNdxJyzpENF00PYZYkyyyKWK1JKgnjcbOnLDGEWaprrYW6QeSlpo2+4jtWioS6CP5mZQcnBnZuiab57m/II+p0pVMugA4+wAfIePlvnub8gjQpwyQUeRk16vxakp2tcqGvukllizI04SwWWovIrMG4lReBNFJBJGQJrFQEmQTMkhZsxq8JJcB3IFQ1UM08ECkw44gEOta1Meha2WBpkhWVVbiXXDFlFxhiaqCcPxrsihWqbMBWXabRKlMlDLm3MXIXjG+z3VahIZCvGBNMPBSrJ/Efv7K/PiKS63v8ACuS1hnWhzWaiy7uYreLkqMVINFWpy4xwizaC0gkpZnCOFTikEnCpqKdOHVFa0TKNwOzM7MMWLOQbpIBVWChAc6BRntzNr0PohHlNwyBg5BAO5a0bkrU9EQoJ/F+k5RUfiq+3G3Lsuef60admWqdMVxMMlWKy5YHe2VcOEcA98LYkXsALuANSYpJyjASnHMgEdumJYl26cgF0GoQbxLmTcBzBl641xfKTb1Pd4SjGlTSp6eCv3vtat+NDq0TrLNs7BlE66PCUjiEbRSufKP8AEW/XDWCRM0dNaUwcESr6g0Yypk2WsxeSqMV5L0UZz7j7ovGtugLPJ0XaBLQIVkjHNjwZVlUk7yoHTFlJvUzOl6dOMoTlfM76pLWzV83F6PvvxtZFMGsUib3SbHZhZP8A+faBM4O4L/HkhG4oFGUNMofTiV1Q09ZJ1us62WxrZiFmq5W7x5Zl3rrXQK8aWhqdx3xVNSLEsxbeWe7dsE4dBKknoKD60dnwRyg2klJNLkmYw5TxUu9Uwn6MWq5kSglm7D2WV4uRzr2DERrDLRnAYA0OFfVWJeV4uRzr2DGyXLBeZUA+DmPRi2MnF3QlVgpxcX71uUPS1hliRNIXESnObbEPLERZ5hDzGBIPCAVBINODQ0BGyrHD0jvj1V9HyWzlSzzop/COd9CWc5ykx3Cnuhuni7P6lfx/oz59HX6sreHdyfYedTbZMIxmMaYirE0IyIxwPLFtte31j7zEjM1asx+b6nb9Yj7YtCRuYjHnMRxNeNVLKrWv62L8Jhp0XLNK97c+F+feWmEIQqOCNFrmFUYjOmHKxwUdZEb40WlVKm/S7mamlKY1rsoRWsAERpe9dUOBUHBgOKwIxFPktgMNuzaBWdYJRaVQAkhwaAVOTDIc8WLSlsCSzxmMvDxg2Xhip8MipHGNRyxHxlYz6aql70J06joVY1bbPztuvX1KtZNBzWpeFwbbxINNtAMQeekXKbaqrcVFVd1Ax6SYirZpKXLwY1byVxPTu6Ytdm0Si4txjy5dX6xGmq1Xq6du3ruM4zE4nEKM6istcujXK9nu+F+BBS/ZEOdEu0wS0F2XeDE3eKDh3xqktaJwpUFqICQTeZQIuNvsblyVWooKYgZbMTHUiuK3ZaLX0qHpCrj1w3DC5UtfQrjX+jK+HE1cHKOUiv8A8VO2BHQJr7JRHrMoH3b0ZuTdrqOZDXrLH3RjuYnwpjnpC9gAw2klsUuTluzCy3Zgz0AXEBSTiQRUkgbCcKbYzJdb8ypGY2jyRGRYZe1b3rkv2iYqmtNlThxQAd7XAYDwn3RZTpubsiqpNQV2WVFKi6sxLowF4VIG6oYV6uuIi1asyHLN3lS3hUlijbMQWxHJFZ7lXd7Ydyru9sWywWZWdhd4mL3RbbNoVENS6NTyhh1BvfEpffzkr6p/fHn3cq/6YktXksoM0Wjg8Ct2/T0q0r0RW8IqUdPQnTrRk7JWO/S+q8u0TOFM1UY+FdGDYUBILZ0ji/gaV/yPur+6Ji7o3/x+tYXdG/8Aj9axS6UHwNKHSOIhFRjPRd36I2xamykcOZoe6ahWUXajKtGxHJEtp/RptdnmWd5yKswAEqvGFGDYVamyODSosPAvwXA36cW7Sta7IrqWZSBzRdSw6knl0FcTjqk5J1Hd8Dp0Z8G8qQJwW1E8NZ5klqquCzLtWFDmLsb9Xfg+lWOeJ6WlmIVloQgwYUJB2GODuVd3th3Ku72xb8m+ZQ8c3z9+Bf5pQcGoIoGAArkArAR9zUYNfShqACDUA0rQggGhx3GuG6Kfq9ZV7oTCvhZ4jwGi49xS9ihfVqnZpFVSm6bsydOopq6McNMGcuvqMp7V2Mm10zRx9Et2KxjuWngzHHSG7YMODmbJin1kqfusPdFZYZNtl7XC+txT1NSK/bXBLGtQXahHOYn700fJQ8zkewr+MRVpsE1iSEzYnNdpPLABPwhCABESwZnKkXnDVBYd7RfkuBtbZjjUHECJaEAFT11USrKQKlpkxAzHFmpV8Tu4uWQrhFEFumBbomOF3Bj1c3JFq+Ee01aXKByBcj1jdU/daKZCdazkes6LoxWFjmV7ty177fgw+XX7o9vVqgHfHiUex6KmXpEpvKloetBE6D1Yt06rwpvtfql+jshCEMnnBCEIAEVPWrx6/wBNe08WyKnrV49f6a9p4ZwvX8CjEdQhoQhD5niEIQAIQhBc4IQhAdEIQgAkdXv5hPpdloukUvV7+YT6XZaLpCGK667v2PYXqeIhCELDIhCEACEIQAIQjk0ja+ClvM8hGbnoMB0mA6k27Lc8z1vtfC2uZuU3B9DA/evdcQ0fTMTiTUnEneTmY+Yz27nvKdNU4KC4JLyEerapTr1kknct36rFfwjymPR/g+m1sxXyZrDouq3vYxbRf1GX01G+GT5SX5/otMIQhs8sIQhAAip61ePX+mvaeLZFT1q8ev8ATXtPDOF6/gUYjqENCEIfM8QhCABCEIAEIQgAQhCACR1e/mE+l2Wi6RS9Xv5hPpdloukIYrrru/Y9hep4iEIQsMiEIQAIQhAAiq/CBbblnEsHGa33V4x9twdMWqKvrMqu6qUDXQcSoPhbMeQDriMldWG8DZYiMmr218tvWx5vCLiLApwElTzSwfwgdEjzH3D+kUfAfM9P89Dl9inRd/g1neOT1GHTeB9wjlOjZfmh1RN6q2VUdyqXarnSmRy/3dEoUmpJ3FOkMTCphpRs+HLmu0tEIQi88wIQhAAip61ePX+mvaeLZFO1tlVnjEjva5es8MYZ2n4FGI6hFwjVwHpN1w4D0m64eu+QhZczbCNXAek3XElq7YpU0zROJ4t27xyud6uRFchEZ1Miu0ThTzOyZxQi0fEdk3n7Vv3Q+I7JvP2rfuin5uPJlvy0uaKvCJ3S+ibMkl3Qm8oqO+MceauMVpJNQDebEb4tp1c+yK50sm7OiEauA9JuuHAek3XE7vkV2XMltXv5hPpdloukUfV2TS0yzeJ8LsNF4hHE3z68v2PYbqeIhCELjAhCEACEIQAc1ttIlqTtyA3mK4SWNcSSekkx0aQtPCPUeCMB+J6f0jt0RY/nG+j+sIzbrTstvepoU0qFPNLf3odWjrHwa4+Ec/0jsjMIcjFRVkISk5NtlXtQ74/rN7zE3orxS/S7RiH0gKTH5/eAYmNE+LX6XaMKUF/9ZeP3H8Q70YvtX2Z2whCHTPEIQgARU9avHr/TXtPFsip61ePX+mvaeGcL1/AoxHUIaEIQ+Z4j5MsHMDqEfUIAPjgl8kdQhwS+SOoR9wgA+OCXyR1CPoCMwgAQhCACR1e/mE+l2Wi6RS9Xv5hPpdloukIYrrru/Y9hep4iEIQsMiEIQAIiNK23NFPrH8IpthM9rS6z5s29LqSt9hUgilADguIOG8b4nYSq121lRq/IqlJXlfRPs1+51aOsnCNj4Iz5dwiwgRH6F8X9I/hEjF9CKUL8xLEzcqjXIQhCLhcr2l1pNPKAfZT8Ik9DnvQ5z7zEdpo995lHvJ/GOrQs8XbhzBJHKDCdNpVn4j1RN4ePgSsIQhwREIQgARU9avHr/TXtPFsip61ePX+mvaeGcL1/AoxHUIaEIQ+Z4hCEACEIQAIQhAAhCEAEjq9/MJ9LstF0il6vfzCfS7LRdIQxXXXd+x7C9TxEIQhYZEIQgAgtYNFF6TpQHDSxhsExczLPPsOwxV7fp5FACgsxGRwunarbbw3R6LFB190OARaEFATRwN+NG6cjy03wtXpJ/UjW6NqxnONGrr/H72fZy7dNnpv1R1jLzDKmBVvYpSoF7Di4k4ke6LvHh6ttHszB3iLvq3rezMsm0Y1IVZgzqcAHH5h074KVRJZWNdI9GNv4tFd6/K/K8S8xw6V0glnlNNfJdgzJOSjlJjuiO0xotLTLMt6gVBBGYIyIrznrhh3toYVLJnXxOrfW29iv2e2meonMAC4yGIFCQB7I06StnBS2cZil31jl+vRHTZ9UZkvxdqIFcjLDD2tDSOrE+alwzpRANa3GU1AIx45G3dCDoTbu0bUauFU1aay32tLReK/LKxZNarXLNeEv8ji8PZQjoIi1aH10lTCEmjg2ORrVD0/J6cOWK9adSbUvg8G/qtQ/eAHtjnlapWxjQy7vKXSnsJPUDFqdSPMcrU+j68buUV2ppPy4+V+09TBjMR2hLI0mSkp2vlRSvSSAOQAgDkESMNo8xNJSaTur78+3xEU7W2cBPAPm17TxcYpWt1mmNaAVluw4JRVUZhW8+FQM4toytK5RWV42InuheWHdC8sau4J3mZv2b/pFgsGqoeWrs7qzCpUqBQ7scYZde24qqN9iE7oXlh3QvLFj/g5POt1CH8HJ51uoRz5le0S+XZXO6F5Yd0LyxY/4OTzrdQh/ByedbqEHzK9oPl2VzuheWHdC8sWP+Dk863UIfwcnnW6hB8yvaD5dlc7oXlh3SvLE9aNUVVGZZjsQpIFBiQMB0xA/FNo8zM+qY6q9+RF0LcCT1cng2lAPS7DReIo2ruj5yWmWzS3VReqSpAFUYCLzC9eWaVxmhHLGwhCEUlwhCEACNM6SrqUdQysKEEVBHLCEANtao8+1u0VJkk8Gl3pY+8mMakWGXMmVdbxQgrUmgIpQ0rQ9MZhCaX1npFVqPASk5O9t76no8IQhw82IQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAf/9k="
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => setExtras([...extra, "Inside fridge"])}
                      />
                      Inside fridge
                    </label>
                  </div>
                </div>
                <div>
                  <br />
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavwx-INPxvdX1-Np8QkjtDDZ3GRLWToV_KQ&usqp=CAU"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => {
                          setExtras([...extra, "Organizing"]);
                          console.log(extra);
                        }}
                      />
                      Organizing
                    </label>
                  </div>
                </div>
                <div>
                  <br />

                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="data:image/jpeg;base64,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"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        onChange={() => setExtras([...extra, "Small blinds"])}
                        value="checkedValue"
                      />
                      Small blinds{" "}
                    </label>
                  </div>
                </div>
                <div>
                  <br />
                  <img
                    Style="height : 100px ; width : 100px; border-radius:50%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGg9N1o95kt6uV0WizfgFe6XyGqlZR461FmQ&usqp=CAU"
                  />
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                        onChange={() => setExtras([...extra, "Patio"])}
                      />
                      Patio{" "}
                    </label>
                  </div>
                </div>
              </div>
            )}
          </center>
          <center>
            <br />
            <br />

            <h1 Style="letter-spacing : 3px">Selected Date</h1>
            <br />
            <br />
            <div className="ss">
              <CalendarComponent
                className="pt"
                value={dateValue}
                min={new Date()}
                isMultiSelection={false}
                onChange={(e) => setDate(e.nativeEvent.text)}
              ></CalendarComponent>
            </div>
          </center>
          <center>
            <br />
            <br />
            <button
              type="button"
              class="btn btn-primary "
              onClick={async () => {
                sub();
                setBool(true);
                await setTimeout(async () => {
                  setBool(false);
                  console.log(bool);
                }, 1500);
              }}
            >
              Book
            </button>
            <br />
            <br />
          </center>
        </div>
      )}
    </div>
  );
}
