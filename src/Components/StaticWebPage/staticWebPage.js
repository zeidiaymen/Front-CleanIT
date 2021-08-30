import "./StaticWebPage.css";
import Main from "../chatBotOptimezed/ChatBotMain";
import React, { useState, Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import ChatBot from "react-chatbot-kit";
import { Lines } from "react-preloaders";
import img from "../utils/1.gif";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  GridBt,
  NavLinks,
  NavMenu,
  MobileIcon,
  Heros,
  ImgCaroussel,
  Services,
  About,
  Team,
  Grid,
} from "./StaticWebPageStyles";
import "../../App.css";
import US from "./about";
import OUR from "./Ourteam";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const History = useHistory();
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const [bool, setBool] = useState(true);
  useEffect(async () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text =
      "welcome to cleanit . if you need some help. please use the mic located in the corner,enjoy";

    await setTimeout(async () => {
      window.speechSynthesis.speak(speech);
      setBool(false);
      console.log(bool);
    }, 3000);
    window.onscroll = () => {
      if (window.scrollY > 440.79998779296875) {
        setScrollChange(true);
      }
      if (window.scrollY > 800.500048828125) setScrollChangeForTeam(true);
      if (window.scrollY > 1200.500048828125) setScrollChangeForProduct(true);
      if (window.scrollY > 1610.500048828125) setScrollFooter(true);
    };
  }, []);

  const FooterAnim = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };
  const [scrollChangeForTeam, setScrollChangeForTeam] = useState(false);
  const [scrollFooter, setScrollFooter] = useState(false);

  const [scrollChange, setScrollChange] = useState(false);
  const [scrollChangeForProduct, setScrollChangeForProduct] = useState(false);

  const scrollForProduct = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const scroll = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const scrollAbt = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Fragment>
      {bool == true ? (
        <center>
          <img Style="width:40%;height : 40% ; margin-top : 150px" src={img} />
        </center>
      ) : (
        <div>
          <Nav
            id="nav"
            className={colorChange ? "navbar colorChange" : "navbar"}
          >
            <NavContainer>
              <NavLogo href="/home">
                Clean
                <span Style="color:crimson;letter-spacing:0px;font-size:30px">
                  IT
                </span>
              </NavLogo>
              <MobileIcon></MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks href="#serv">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#about">About Us</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#Team">Team</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#footer">Contact</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="SignIn">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavContainer>
          </Nav>

          <br />
          <br />

          <div className="hero">
            <center>
              <br />
              <br />
              <br />
              <br /> <br />
              <br />
              <br />
              <br />
              <div Style=" background-color: rgba(201, 76, 76, 0.3);">
                <h1 Style="color:white; letter-spacing : 8px ;  align-item:center;text-align:center; margin-left:auto;margin-right:auto">
                  CleanIT like you never did
                </h1>
                <h2 Style="color:white; letter-spacing : 3px ;  ; align-item:center;text-align:center; margin-left:auto;margin-right:auto">
                  We want to hear from you{" "}
                  <span>
                    {" "}
                    <Main />
                  </span>
                </h2>
              </div>
            </center>

            <center>
              <div Style="display :grid;justify-content:center;margin-top:100px  ">
                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => History.push("/Register")}
                  >
                    Get started
                  </button>
                </div>
                <div></div>
              </div>
            </center>
          </div>

          <br />

          <div Style="position: fixed; bottom: 0; right: 0;  ">
            <motion.div whileHover={{ scale: 1.06 }}></motion.div>
          </div>

          <Services
            id="serv"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="container "
            Style="margin-top: 110px "
          >
            <br />
            <center>
              <br />
              <br />
            </center>
            <div
              className="Sv"
              Style="border-top:1px solid black;border-bottom:1px solid black;"
            >
              <motion.div
                className="container kamel"
                Style="margin-top: 110px  "
              >
                <center>
                  <Grid>
                    <div className="s" Style="padding:25px">
                      <img
                        src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/disponibilit%C3%A9.png"
                        Style="max-width:200px"
                      />
                      <h5 Style="font-weight:bold">Disponibility</h5>
                      <figcaption Style="max-width:200px; font-weight:bold;">
                        {" "}
                        flexible service , 7/7 , 24/24
                      </figcaption>
                    </div>

                    <div className="s" Style="max-width :250px;padding:25px">
                      <img
                        src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/prof.png"
                        Style="max-width:200px;"
                      />
                      <h5 Style="font-weight:bold">Professional team</h5>
                      <figcaption Style="max-width:200px ; font-weight:bold;">
                        {" "}
                        A complete job and qualified professionals
                      </figcaption>
                    </div>

                    <div className="s" Style="max-width :250px;padding:25px">
                      <img
                        src="https://www.cleaningservices.tn/wp-content/uploads/2017/11/garantie-1.jpg"
                        Style="max-width:200px; max-height : 150px"
                      />
                      <h5 Style="font-weight:bold;margin-top:-5px">
                        Garantee results
                      </h5>
                      <figcaption Style="max-width:200px ; font-weight:bold;">
                        {" "}
                        Interventions carried out according to the rules of the
                        trade
                      </figcaption>
                    </div>
                  </Grid>
                </center>
              </motion.div>
            </div>
          </Services>
          <br />
          <br />
          <br />
          <div>
            <center>
              <About
                variants={scrollAbt}
                initial="hidden"
                animate={scrollChange ? "show" : "hidden"}
                transition={{ duration: 2 }}
              >
                <GridBt>
                  <US id="#about" />
                </GridBt>
              </About>
            </center>
            <div />
            <br />
            <br />

            <div id="Doc">
              <center>
                <br />
                <br />
                <br />
                <br />

                <h1 Style="color:white; letter-spacing : 4px ;  background-color: rgba(201, 76, 76, 0.3);">
                  Importance of Cleaning and Sanitation in the Winery
                </h1>
              </center>
              <br />
              <br />
              <br />
              <br />
              <center>
                <a
                  name=""
                  id=""
                  class="btn btn-danger btn-lg"
                  href="https://www.extension.iastate.edu/wine/files/page/files/importanceofcleaningand.pdf"
                  role="button"
                >
                  Learn more
                </a>
              </center>
            </div>
            <br />
          </div>

          <Team
            id="Team"
            variants={scroll}
            initial="hidden"
            animate={scrollChangeForTeam ? "show" : "hidden"}
            transition={{ duration: 2 }}
          >
            <OUR className="team" />
          </Team>

          <center>
            <h1 Style="color : #0056B3;   letter-spacing:5px ; font-weight:bold ">
              {" "}
              Our packs{" "}
            </h1>
          </center>
          <br />
          <br />
          <div
            className="container"
            id="product"
            Style="display:grid ; grid-template-columns: 1fr 1fr ; gap: 6em;

        "
          >
            <div Style="border : 5px solid 	#DCDCDC; border-radius:10%; ">
              <center>
                <br />
                <img
                  Style="max-width:210px;max-height:220px ;  background-color: transparent;
              "
                  src="https://image.freepik.com/vecteurs-libre/acces-ouvert-aux-donnees-bancaires-services-financiers-developpement-applications-paiement-mobile-technologie-api-developpeurs-web-concevant-plateformes-bancaires-illustration-metaphore-concept-isole-vecteur_335657-2817.jpg"
                />
                <br />
                <br />
                <h5>Initial Cleaning</h5>

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  7/7 assistant
                </i>
                <br />
                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Access to web application
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Free Access to mobile application{" "}
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  {" "}
                  attractive price{" "}
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  {" "}
                  Free clean plan{" "}
                </i>
                <br />

                <i
                  class="fa fa-times-circle"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Free plans
                </i>
                <center>
                  <br />
                  <a
                    name=""
                    id=""
                    class="btn btn-danger"
                    href="/Signin"
                    role="button"
                    Style="margin-bottom:15px"
                  >
                    Reserv now
                  </a>
                </center>
              </center>
            </div>
            <div Style="border : 5px solid  	#DCDCDC;border-radius:10% ; ">
              <br />
              <center>
                <img
                  Style="max-width:200px;max-height:210px"
                  src="https://image.freepik.com/vecteurs-libre/achats-ligne_53876-26813.jpg"
                />
                <br />
                <br />
                <h5>Upkeep Cleaning</h5>
                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  7/7 assistant
                </i>
                <br />
                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Access to web application
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Free Access to mobile application{" "}
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  {" "}
                  attractive price{" "}
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  {" "}
                  Free clean plan{" "}
                </i>
                <br />

                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  Style="font-weight:bold"
                >
                  Free plans
                </i>
                <br />
                <br />
                <center>
                  <a
                    name=""
                    id=""
                    class="btn btn-outline btn-danger"
                    href="/Signin"
                    role="button"
                    Style="margin-bottom:15px"
                  >
                    Reserv now
                  </a>
                </center>
              </center>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <motion.footer
            id="footer"
            variants={FooterAnim}
            initial="hidden"
            animate={scrollFooter ? "show" : "hidden"}
            transition={{ duration: 2 }}
          >
            <br />
            <footer className="footer-distributed">
              <div className="footer-left">
                <NavLogo href="/home">
                  Clean
                  <span Style="color:crimson;letter-spacing:0px;font-size:30px">
                    IT
                  </span>
                </NavLogo>

                <br />
                <br />

                <p className="footer-company-name" Style="color:white">
                  ODC © 2021
                </p>
              </div>

              <div className="footer-center">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p>
                    <span>444444</span> Solana Beach, California
                  </p>
                </div>

                <div>
                  <i className="fa fa-phone"></i>
                  <p>+1.555.555.5555</p>
                </div>

                <div>
                  <i className="fa fa-envelope"></i>
                  <p>
                    <a href="mailto:support@company.com">Orange@Orange.com</a>
                  </p>
                </div>
              </div>

              <div className="footer-right">
                <p className="footer-company-about">
                  <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit.
                  Fusce euismod convallis velit, eu auctor lacus vehicula sit
                  amet.
                </p>

                <div className="footer-icons">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </footer>
          </motion.footer>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
