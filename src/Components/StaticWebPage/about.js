import React from "react";
import aymen from "./PIC/1.jpg";

import "./about.css";

export default function about() {
  return (
    <section
      className="u-clearfix u-section-1 "
      Style="width:60%;margin-left:18%; "
      id="sec-00b2"
    >
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <img
                    class="u-image u-image-1"
                    data-image-width="1500"
                    data-image-height="1900"
                    Style="height:auto ;"
                    src="https://image.freepik.com/vecteurs-libre/test-nouveaux-gadgets-personnage-plat-feminin-appuyant-ecran-du-smartphone-femme-choisissant-tablette-pave-tactile-ecran-tactile-appareil-electronique_335657-2656.jpg"
                  />
                </div>
              </div>
              <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-middle u-container-layout-2">
                  <h1
                    class="u-text u-text-default u-text-1"
                    Style="color : #0056B3;   letter-spacing:5px ; font-weight:bold "
                  >
                    About us
                  </h1>
                  <p class="u-text u-text-2" Style="width:90%">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text. Sample text. Click
                    to select the text box. Click again or double click to start
                    editing the text. Sample text. Click to select the text box.
                    Click again or double click to start editing the text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
