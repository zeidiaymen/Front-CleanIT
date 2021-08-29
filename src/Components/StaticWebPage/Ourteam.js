import React, { useState } from "react";
import "./our.css";
import khalil from "./PIC/khalil.png";
import samar from "./PIC/samar.png";
import arige from "./PIC/arige.png";
import "./comb.css";
import aymen from "./PIC/1.jpg";
import { SettingsEthernet, SettingsEthernetSharp } from "@material-ui/icons";
export default function Ourteam() {
  const [test, setTest] = useState(false);
  const [tests, setTests] = useState(false);
  const [testss, setTestss] = useState(false);
  const [testsss, setTestsss] = useState(false);

  const fnc = () => {
    setTest(true);
  };
  return (
    <section className="u-align-center u-clearfix u-section-1" id="sec-8804">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1
          class="u-text u-text-default u-text-1"
          Style="color : #0056B3;   letter-spacing:5px ; font-weight:bold "
        >
          Our Team
        </h1>
        <div class="u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div
              class="u-align-center u-container-style u-list-item u-repeater-item"
              onMouseEnter={() => setTest(true)}
              onMouseLeave={() => setTest(false)}
            >
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <img
                  alt=""
                  class="u-expanded-width u-image u-image-default u-image-2"
                  data-image-width="820"
                  data-image-height="841"
                  src={aymen}
                />
                <div hidden={!test} Style="padding:10px">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
                  <i class="fa fa-github"></i>{" "}
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <h5 class="u-text u-text-3">Aymen zeidi</h5>
                <p class="u-text u-text-4">Full stack developper</p>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div
                class="u-container-layout u-similar-container u-valign-top u-container-layout-2"
                onMouseEnter={() => setTests(true)}
                onMouseLeave={() => setTests(false)}
              >
                <img
                  alt=""
                  class="u-expanded-width u-image u-image-default u-image-2"
                  data-image-width="820"
                  data-image-height="841"
                  src={arige}
                />
                <div hidden={!tests} Style="padding:10px">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
                  <i class="fa fa-github"></i>{" "}
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <h5 class="u-text u-text-5">Arige flihi</h5>
                <p class="u-text u-text-6">Full stack developper</p>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div
                class="u-container-layout u-similar-container u-valign-top u-container-layout-3"
                onMouseEnter={() => setTestss(true)}
                onMouseLeave={() => setTestss(false)}
              >
                <img
                  alt=""
                  class="u-expanded-width u-image u-image-default u-image-3"
                  data-image-width="820"
                  data-image-height="737"
                  src={samar}
                />
                <div hidden={!testss} Style="padding:10px">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
                  <i class="fa fa-github"></i>{" "}
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <h5 class="u-text u-text-7">Samar bahloul</h5>
                <p class="u-text u-text-8">Mobile developper</p>
              </div>
            </div>
            <div class="u-align-center u-container-style u-list-item u-repeater-item">
              <div
                class="u-container-layout u-similar-container u-valign-top u-container-layout-4"
                onMouseEnter={() => setTestsss(true)}
                onMouseLeave={() => setTestsss(false)}
              >
                <img
                  alt=""
                  class="u-expanded-width u-image u-image-default u-image-4"
                  data-image-width="820"
                  data-image-height="611"
                  src={khalil}
                />
                <div hidden={!testsss} Style="padding:10px">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
                  <i class="fa fa-github"></i>{" "}
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <h5 class="u-text u-text-9">Khalil belahmer</h5>
                <p class="u-text u-text-10">Mobile developper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
