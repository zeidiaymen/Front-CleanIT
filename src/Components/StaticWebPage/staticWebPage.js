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
              <NavLogo>CleanIT</NavLogo>
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
          <Main />
          <Heros className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              data-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ImgCaroussel
                    className="d-block w-100"
                    src="https://secureservercdn.net/104.238.69.231/54g.dd0.myftpupload.com/wp-content/uploads/2018/05/clean20it20logo.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <ImgCaroussel
                    className="d-block w-100"
                    src="https://secureservercdn.net/104.238.69.231/54g.dd0.myftpupload.com/wp-content/uploads/2018/05/clean20it20logo.png"
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </Heros>
          <br />

          <div Style="display :flex;justify-content:center;margin-top:100px ">
            <motion.div whileHover={{ scale: 1.1 }}>
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
                onClick={() => History.push("/Register")}
              >
                Get started
              </button>
            </motion.div>
          </div>
          <div Style="position: fixed; bottom: 0; right: 0;  ">
            <motion.div whileHover={{ scale: 1.06 }}></motion.div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <hr />
          <Services
            id="serv"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            whileTap={{ scale: 1.6 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 50, bottom: 50 }}
            className="container "
            Style="margin-top: 110px "
          >
            <br />
            <center>
              <h1 Style="color : #0056B3;   letter-spacing:5px ; font-weight:bold ">
                Our Services
              </h1>
              <br />
              <br />
            </center>
            <div Style="background-color:olive;border-radius:3%">
              <motion.div
                className="container kamel"
                Style="margin-top: 110px  "
              >
                <Grid Style=" background-color: olive;">
                  <div className="s" Style="padding:25px">
                    <img
                      src="https://azure.microsoft.com/svghandler/app-service-mobile?width=600&height=315"
                      Style="max-width:200px"
                    />
                    <figcaption Style="max-width:200px; font-weight:bold;">
                      {" "}
                      You can order your services via our mobile application
                    </figcaption>
                  </div>

                  <div className="s" Style="max-width :250px;padding:25px">
                    <img
                      src="data:image/png;base64,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"
                      Style="max-width:200px;  max-height:100px ;margin-left : 41px"
                    />
                    <figcaption Style="max-width:200px ; font-weight:bold;">
                      {" "}
                      We offer additional services to meet your needs
                    </figcaption>
                  </div>

                  <div className="s" Style="max-width :250px;padding:25px">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmknIgj8mZfXRcY9TU0hFNegjl5IPRYpE6g&usqp=CAU"
                      Style="max-width:200px;  max-height:100px ;margin-left : 41px"
                    />
                    <figcaption Style="max-width:200px ; font-weight:bold;">
                      {" "}
                      we give full refund if you cancel your order before 24h
                    </figcaption>
                  </div>
                  <div className="s" Style="max-width :250px;padding:25px">
                    <img
                      src="data:image/png;base64,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"
                      Style="max-width:200px;  max-height:100px ;margin-left : 41px"
                    />
                    <figcaption Style="max-width:200px ; font-weight:bold;">
                      {" "}
                      We work 24/7 so you can get service any time you want
                    </figcaption>
                  </div>
                </Grid>
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

            <div id="Doc" className="container">
              <center>
                <h1 Style="color:white; letter-spacing : 3px; padding-top : 130px">
                  Importance of Cleaning and Sanitation in the Winery
                </h1>
              </center>
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
            <OUR />
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
            Style="display:grid ; grid-template-columns: 1fr 1fr; gap: 6em;

        "
          >
            <div Style="border : 5px solid gold; border-radius:10%;  width:70% ; margin-left:35%">
              <center>
                <br />
                <img
                  Style="width:210px;height:220px ;  background-color: transparent;
              "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT956DPBMw6s2C2Pn7BrbV5R_DTkpADu42ZfVursP6HxkvEqk2Qg_4AFkfpq56bL463KzY&usqp=CAU"
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
            <div Style="border : 5px solid gold; border-radius:10% ; width:70%">
              <br />
              <center>
                <img
                  Style="width:200px;height:210px"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGR8ZGRgXGBkaHRsaGhoaHR4fHhodHSggIRsmIR8aITEhJSkrLi4uGh80OTQsOCgtLisBCgoKDg0OGxAQGzAmICYrLTgzLzYtLS8tLTMvLS8tLS8tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABREAABAwIDBAYDCQwIBwADAQABAgMRAAQSITEFBkFRBxMiYXGBMpGxFCNCUnKSocHRFTVDU1RigpOisrPhFhczc3TC0vAIJCU0g6PxY2TTJv/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/xAAyEQACAgEDAwIDBgYDAAAAAAABAgADEQQSMSFBURNhInGBMpGxwdHwBRQjoeHxM0Jy/9oADAMBAAIRAxEAPwDcaKKKIQoooohCiiiiEKK8JpG2uEOJCkKCknQgzS57QitIs3CVFQSoEpMKHI1D7P2qoJSV9pKgDiAzTOfaA1HeM+Y1NMG3tHEkpUSpQPctRVB5pz07u4EY31yAAr18+ZcKT1Bk05tQJdKDAQIGLkoic/zYKc+Hho32tfKDiQg+iJI4KKuB8h+0KinHFEkmJJJMaZn2Rl5U3c7vbyyHkBA8hWKzXOwKjz0PtLlpAIMltsbTStCQg5HtK5iNAe+c/wBHvrl3bUsRPbPZJ7vjfV41COLkfSYHKkVkwBzyHfHKqzqrCxPkYjipcASe2TtoIaUFZlOaO+eHkfo8KNgbW7aw4rJUqk8CNfo9lVsyAoRpr3ZxSIJTwOemRz4Zc+VC6mwbfaSalOfeW+x27juMOiCMKfHWfE0/uNsIS6hoZqUYPd/Os+YfKVYgYOoPeK5buldYFTmDPmDNWLrXC475z/iIaFJmpuOBIkmBXdZrtTbq3XASYSkyEjQR7TVm2zvShpMN9tyPJOXHv7q2prVJbPQDjyZQaGGJZaKRYclCVTqAZ8qUQoESMwa2BgZURO6KKKaRCiiiiEKKKKIQoooohCiiiiEKKKKITyk3iQkkagEj1V0rSq9YXz4bQVKS5KRiCuyqfhdpIjIzlh86otvSvGe8dULcR0ztpJRLierlMyTKMx8fh+kE1GW3ZShSSUKwJ7Q45D0hofPThFKWiVJbbSdUoSDxzAANJPPgHDoeHlEwOYFcWzUvZjyO81rWq5gBhCQDklIE+AptdXQSCo8MjOXEcI1zpl7rU4G1IA9PCqeQka8jXSdn5KxmQpeOVd0R9Eg1RiWzx29hSxBOFMnxzyEd0Gkklw9WCIEYlzrpEeog+ffXl7ta3aBUpQjjoE5AjNR4RlUVcb1Hq1utMLW2hJWVpQpScIEkhaoQrLkTVioTwJBIHMkjbuKBxLzUrtESYTnIy8B668VZqMq7UxAEZARJPjNZ3d9K6j6Daz4qCPoAVUzvJtO/tWPdCurUnsyA4skBWh9ECJIHnVp01gIBGM8RRYp4loVYEZSrCM9D2jPHkNT/ALikktKBSQ5CuZkBGuWf+8xVM3S3lvb5a0tBtIbSFKUtbgTmoADsoUcR8OBpbbm/D9k+be4RKgAqW3MaSFCdFoSak6WzO3vI9VcZlnUFhB0wlWvwirDPjr+93146tOI4kqRAySnMyAImZ1nPwpm1vD7yi4et1oaWAoOFEDCTkSpskJBOmKKe2u0GHkktu+lqZSsHOfTGYz9fGqjWw5EcMDxEer9GCCpXwRJOsDKOPCklgznkRIjlwNPnLSO0BhSE5FHalXerhMnXTKmq0lKEghPbOIKiVRoO8DUxx7VJGzHe0dvPOpDeLCgADCOMDieNXhO3WWGW+sWMWBPZGatBwrOnGZxqRJQmM1YQc8tMpznQU2cmr672rJI5lbVKwxNltXsaEqiMQBjlNL1Q7jfbChKGG5IASFL0yEZJGfrirvbzhTizMCfGuvTetnTvjrMb1leYtRRRWiVwoooohCiiiiEKKKKITyuAsZwRlrXLjyUkBSgCdASBUFtK0b68qKEnrE4gqBOJEJPa4SnBHyTVN9vpLnGY6LuOIkwxhLiUuOIKVqHZUSIV209lUp9FSRpwrtpGBMFU5qVJAHpKKuHjFDbaUyROcTKlK00iSfUKYX20IKYGJClYTHwT9RnnlXAdy5PjM2AYnt5egKSgx2wcJ4ZaT3H6KZWtopYQpzJbZM5xlmBPeMs+VLM2yWUS6qUpUVIVlOfAD1giqBvz0ghuWm81gZJnJPIrP+XXwqa62c7VEYsAMmWza+8TFsnIjMwJ0KjnCUjNRPISazTe7fm7mA040Dot1BTPyUERy1nwq4bDaaFkL1orfdU2VLWMIdkCS03MhpMyOzJMfCo2ZfM7TsHA4ypCVhxISpXWEKbSClxCsIJzMaapI4xWqpUQ5YZAOD/qVMSR0OJWuinaKbhx5L4S4+BjacWApSfjBMjsgRw51K3m8G0FuusWtniMlBeuFlYUk5dkqKECRw7UVQOje+6jadviyCl9Uqfz+yJ5drDPga0Lfs3tu8j3IyV48QxJQpZQUkTMZAdoGT31fcm2/oB1HTPAio2U6mZPabNULxFusdsPhpQ17QcCT9NblvZZ423Lc+iWggdxgifIhJ8qzTZOxbobUsnrtJCnbhKyTGfVqSozh7OYHDka0nee9H3QatpzdtnFAfnpWop9aUODxIo1eWZSp4BMKvhyDIbop2f1Nv2xC3VFa51hIKG0+vEr9Oqv0zME7SbCdVstx4kqT9VTl3tQt3dmyMgtZWc/ggKSnyJn5tPt4tmh/b1vjEts23Wr8G+sUP2ij10lTEWmxu4J/f3RnUbdo7GN9/14bBu0aEreWzbtp4lDKQYH/kKRTbfVhnZtgywhKTcxhDgyUkk4lEEZgd3MipnZrXW7YT1kRZ2/Wxyddg5jwViHgKoXS1tFT20VtCSGobA1lZAKsvE4f0RTUqWKr2HU/XiKxxk/SWfo4ub+5ZcdCkKShQQJ7KlmMSgIGHsgp1AnEM6ndkbdt7iS2tKXBIJThIE5ZpzjuUnLiJprfXI2XsUIBh1aOrRH4x2StU9wxEH81IqqdHm5a1gXb5U23HvcEpUokZHL4PHkfDWt0rdWs4GenvGVmBC8y+PWUYUwEnMlSlgJMfFOmnn6qbuLSvEpRSggAJSlEAx6oy45/RUTa70oauF2bywvCQAsiAokAxl6LgmMoBIMRMVYn2wQFYiW0g4cITIPAK0+dnoO8Vletk5lwYHiRwlC0kpORBggidD6jU/bbx3T77bWMIClAEIEZanMydJqIcSc+sDhcVGGeU8RqZ0A/nSSFusuSk4Fpy4EiR5jTjQjEd4MoM2UGuqzvcpTz9yVuOLUlsTBUYxHIZac/orQ8QrtUXeoucYmF02nE6ooorRK4UUUUQhXKlAZkxXVI3DKVpUhQlKgQR3GoMJF7cCCgOSklvMjIyg+mPVCo4lIpgLdtKsSW0A8FBIBz7wK46lKZQUoKkGCcIzHBXmPpkcK4uHwABMHQcOGQE5eVef1NnqP1GDN1a7V5iO0LxWE9X2lJAOHmnjlxBFJ26ENhbpPYVCikmc40HPge6KQsmytXWLGBxMpPKOccOciqN0m75dWOraPbPoj4o4rI9nf4UldZdgqx2IAyZKXd85fvrabUUNNCXVpiUDghA061XM5JEkyYFJ2V/YNXAsFNthxerfUhSJUAQlbqjiW4oEdogiTryyHd3eN+0e65pZk+mCclj87v1z/AJ1sNki32khu/ZSOtbBSRxQSNPDMkTMSSOZ3W0+j/wCcdvPvKVffxz+Uj7Is7O2km2QqLS9QFJSTk24SUxJOkgQfzgOZrnfW+e2c62vqQpgnAVAmUkZ4Y0GUkc4OkTWcb73Dy7pQeQpstgISlWoQJIM6GZKpGWeU1oey9uv7UsBaqt8Tik9W5cOehCSMK0pBxKeEcwAZJkHDTvSAFsfrnn9ZCueqj6SI35tbR9lu+aeS28rTDJLhGmQzCwYExI491s+791eIRgslBRSMZfcKG8cCT1bfbUJmJKco8pHdrcK1tE4lJxLAzUrNXr4DuFWN+5ShsqbEgfEg/TWWy9MBR1xxmWBTnPEpdxufe3KkLfui3gOJCWEhrAYI7KiSvQnMnjS/9XqC4h1y6fW6iAlxTyytMEkQoZjMk5czVlNwtxkrSIUdAQTxivEId6ohRPWd0ZfUeedVeu54OP7R9glbu+j1lxwPKuHVOjRxTzilZadpRJpFvci5acLzF2pSyjqz1obeBQSCUkEAwSBoZyq0MMuJbIJlfCNO7WuLfGlBLkSOHnz76PXfzDYJn/uHaNrfu3jrYeS8MLqWuycMJgpSoxKcKYEmRIymQ7uXNlrdN0+tjrUwSVF1DhKRAKmFR75HEDPI5nOrxZbQUpJKhAzyVmMvHOo/bG7lneIhaEzwV9ihmKtGoyfj6duniLsxxITZWy/uo8i8uURZtSLdlX4U8VrB/B5aHWOAkF1tnbqChT6TibSFYI0UASJSOOIiEniCCNarm9drtG2tRZ9ditSQlTpBLqGdClRT6TQyJKRMAg9nKnO39rW9qUpBBTCQwhtQWpTYADZGExBABk6mnevcBjqOwHj9TFU4JzK5u3uA5dOF+8UpsLJWW0AdaqcyTOTYz1VJ7uNW3aN21s59pku9h5OTayVKQNAFKOraswkqzBBEkZpmrfaos7I3V2kIynqkmSVH0W8XFU6nQZnQVgm3drO3b67h4ytZkxoBwSBwSBAHhWitX1BO/wCyIjEV8czdXmQRiSCrFCUEqgoOmEjjyGY046U3Tbk+9pQS4CZOKcs8uWvE8cu6qd0c704v+WfM5QJ+EkcPlJ1B5Duzu9za8EhPZGIrxRiSTlqfKBy8qw3VtW20y9GDDIjBp1aRCVqSDmQFET5CtE3HsyhnrFklTmeZkhI0156+dUF1sEYkIUECASc+1nxiBOWX20vs5p11xLaVKkmNTkOJ8qmmzY4OMwsXcuMzXRXVN7O3DaEoTokRS9d1TkdZzzPaKKKaRPKgdtWSQrrChKkmArEAcJ0Cs+HA+R51UdqdI3WuKZtkQgGC6omVQfggaA8ydDoKlmX0uoCiMR4hZK4+cTlXN1epUqUxmaaqmB3RzkmYCUjuAFRV6cag2oHCoSFDKFD6D3Gnl0+QJjTPloRpOU93dTTZiRBWD2FdqDwjXLT/AO1yRNUZb17ZTa2yio/BkxllAAAniT9Jr542nfrfdU6s5qPqHADuAyq69K23i66GQch2l/5R5DPzFZ9Xb0NOxNx5Mx3Pk4hU5urvM9YPh5k5HJaD6K08iPYdRUHVi3M3dVe3ARHYTBWe7gB3n7a12FQhLcSpQSek024Zb24thSLcoZbzLi8lqJ1aSR+CSZknMqnDhzJ0Oz2ci2awtI9FMAJHIZAAcKNl2bVs2ltOFMQkAfQAOVc7PtXUurK1Ap+CIJyJmAZyivPW27ug4HAm0LiJWzhuWlhaSmZA1A05znnTm1skoRgzUPzs/wDYp6EAZARXJFUZjxEiuCKWIrgiiERIrgiliK4Iokxs81IIPHlTMsdUg4ASfX351JEVwRU5hG1q9jRDicjwPDw+yqBvLuii0uE3zDQdbScSmx9Kkj4wz7Pqg1fL62UoDCqII9tKsuJA6tZBBGY4+MVbVaaz0kMoMwXf/e1V892ZSwjJtHtUe8+zlJqp1fulDdH3K6Xmx70s5xolR4j80+3xFUGu/QUKDZxMD53HMVYeUhSVpMKSZBHAitx3T2sm8tkmBiTnh7xGJHOCMxxzFYTFW3o72yWLkImEuEAdyx6PrzT5iqtXTvTI5Eel9rYmqqbAIKwpDas0hBBy8Cfp9lINrIzBg9xp9dMgyUIJKu2kpOg49mM4PGeVIPLKoWV41HXWREATkOHsriTcJbNzLJxXvri14RklJUYJ5xOgq51lmzrt4GEOKTHeYAH1Uv8A1iKt3MLzZca+MDDg749E+GUTqa6Gk1CqNhGPeZbq2J3TTKKrf9O9n/lKfUr7KK6PqL5mfaZiOwHbeBiQ5+iR9Zq42T9vwXcp8CPqqh7viSgHiR7apT+03ioy85qfhq+2ucunNpPWajZsE+hGXWfyh8eMmnLaWSCBcqg6gtqz+ivm1O0HRo6seC1fbVl3c33eYWkOqLrUwcWakjmFanwP0a1D/wAPYDKnMgagHmazcbj7NeUVrwKUrMkhwE+pYrlPRhss/AT+se/11UOk3ajiGLVbDy0BwrOJtZTiThbKcwcxmT51mytrXB1fdPi4r7aami1kB34+/wDWQ7qDjH4TeD0V7M+J/wC1z61VObu7r29kCLcASZMqKjOmpr50s95LxohTdy8kj89RHmkmD5iti6NN+DegsPwH0JxYgIDiRAJjQKEiQMjMgZGl1NFwTJbI+sK3QnjEu15ZpWpKlYpTphMcZ4U592gfBX6v51hfStta4a2i6ht95CcDZwocWkZtpnIGKqH9I7z8ruP1zn+qlT+HllDbuZJvAOMT6gVtVI1Q58z+dInbbXxXfmGvmb+kl7+V3H65z/VW871X629gl1K1hfudnthRCpWWhOKZnPWq7dH6ZUZ5OJK3A56ScO3mfiu/qzR93GOTvzDXzV/Sa9/K7n9c5/qr6C6JdrqudmtKWsrcbUttalEkkhWISTnOFSam/Rmpd2cwW4McSVG1mDwd+Ya6G0GTwd+ZXe9+0/c1jcvzBQ0rCT8cjCj9opr5j/pNe/llx+uc/wBVGn0nqgmD2hZ9Ni5aPB35tdhbZ4O/NrPtxtqvObAvnFuuKcR14C1LUVCGUKEKJkRNZ3uhvDdqv7NKrp9SVXDQKS64QQXEgggqzB5U66EknrxFN0+hsCDwd9QpuNlNY8YCwfKNZ5V8+b0bw3aby6Sm6fCQ+4AA64AAHFQAMWQr6C3XcKrG0UolSlW7RJJkklpJJJOpJ40t+lNahs8xkt3HENrbEauWiy6JQRGsH192oqsHon2aPgq83VVNb7uqRYXSkqKVBpRBSSCDzBGYNYbuZtq5Xf2qV3DykqeQClTqyCMQyIJzFNp6rGQlWxIsYAjImtf1W7LHwP8A2O/UqvE9HOy0EKCQCDIOJ45j/wAlZl0kbZuEbSuEofdQkFACUuKAHvaJgAxrJrzo7268b5tDrzi0uBSIWtSgDhKkkAnWQB5mrjTca92/tnv+sXeu7GPwmyKtmAAOuMCYhCuOtNHGLYfhF+SY+quXqybpD2w4LsttuLSEISCEqKRiPanI8iB5VjoqNrbZc7bBmafcLtwDC3/IpFVXbrjEGEuH5RH1GqRurtF1V00lbrigSRClqI9FUZE86tO2dDV7UGpgCYgfeJWsTfxT66KQoq6JiWTd30keI9orPnfSPia0Hd30keI9orPnfSPiat0nLRbuBNst7dCmwlTaFJIHZUhJGnIiss3x2Wm3u1tt5IMKQJmApIMTrkZGfKtFb3htUNhSn28gMkqCjp8UZ1mW8m1PdNwt6CAYCQeCUgJHnlJ7yaTRizcc5xJu24GJMbcuCvZdjOeFx5PkMEeoEDyqw9CSAXLmQDCURl3qqC3jsy1szZ4VqpTq/JeAj9mKcdGG8lvZrfL6lALSkJhJVoVTp41ZYC1LBPJ/GKvRxn99JfulDYDLtk6/gSHmQFJWAASnEApKiBmIJInQgREmcx6M3inadsRxUUnwUlQPtqx7/wDSE3csKtrZKsCyOsWsRISQoBImdQJJjSIzmkuhrd9blz7rUCGmZCT8ZxQIgcwASTyOHnVde6vTt6nvGbDONsjumL76O/Ia/hJq/dFO7lo/s5tx62ZcWVrBUtCSYCsszVB6Yvvo78hr+Emut1ukq4sbdNu20ypIJMrC57RngoCmsSx6FFfPT2igqHO6beNzNnfkVv8Aq0/ZUN0tpSjY7yEgJSOqSkDQAOIgDuAFUD+uu9/J7b1Of/0q9dNjkbLUPjOtj6SfqrEKrUtT1D385lm5Sp2zBLCy6xu4X+KbC/W803/nrV/+HzaP/dW5PxXUj1pWf4dVLo52d17O00RJ9xqIH5yVpWnzlArroYv+q2o0ng6lbZ804h+0lIro3/GjL4/3KU6EGaL077T6uwQyCJfdEjmhsYj+11dYlc7OKLZl45dat0DvS2Gs/nKUPKr90+7Qx3rTI0aan9JxRJ/ZCKj+kTZvufZ+yUQQSy4szricLbhnvGKPKo0w2VqPMH6kyw9HCv8A/PbTHLrj62EfZWcblffGy/xLP8VNaB0ar/6HtYckrPrZP2Vn+5X3xsv8Sz/FTT1/ab5/lIPAie9v/fXf+Id/iKr6U3R+99n/AIZn+Eivmve3/vrv/EO/xFV9Kbo/e+z/AMMz/CRVGt/4x++0er7RjDf773Xf9yr2VgW4n3xs/wC/b/eFb7v997rv+5V7KwLcT742f9+3+8KXRf8AG377SbftCLdIi52ldH8+PUkD6qaXDZsr0Rn1LiFjvAKVp+iK93xcxX92f/zuDyC1AVLdKdn1d9P4xptXqTg/yVrXoAvt+krbkn3mvvEag5c+6sLV/wA3erM9la1r/QSFK/dEVpI2v/0cPTmLfBPHEPegfHEJqk9H1niXcOEZNsKAP5zgw/u46x6VfTDse3SXWndtEhd2FxeW/e6kfOUB9dXnbOhqhbvn/mrf++R++Kvu2dDT6v7SxauDKnRRRSSZZN3fSR4j2is+e9I+JrQd3fSR4j2is+d9I+Jq3SctIu4Ek0bt3hIAtns+JbUB84iI75q07s7gLKwu6hKQZ6sEEq+URkB4Enwq6WXop8B7KkWay265yMAYlq0KOplL6YB7za/Lc/dbqnbq7qPX5cS0ttJbAJ6wqE4piMKTyq49MP8AY2vy3P3W656D/wC0uvko9qq0JYU024c/5lbKGtwf30lJ3j3efsnOqfSASMSVJMpUnSQfHKDBHKtk6Kd4/dVqWlJSlxiEkISEpKDOFQSAADkoEDlPGKjemixx2TboElp0CeSXEkHyxJQPOqn0L33V3/Vk5PNqTH5yYWPoSfXS2H+Y0248j8oL/TsxG/TF99HfkNfwk1K7j9GTd/aJuFXK2ypShhCAodkxqVConpi++jvyGv4Sa0Hon29aM7ObQ7csNrC1kpW6hJgqyyJmmsd1oUpz0iqoLnMaf1Hs/lrn6pP+upHp7X/09oc7lP0Nu/yq3jeyw/LbX9e3/qqidOl4hyxtlNrStC3sSVJIIICFCQRkday1WWvanqefEsZVVTiRP/D60C7dyJHVoB8CpX2VQ7E+4tpoCjHue6AUdMm3YM90A1of/D0ntXp7mh6y79lVTpisOq2o8eDoS6P0kgH9pKq2I2dQ6eQJUR8AM53qQb7brrYn3y5DEjkgpanwhM+FW/8A4h0Ae4YECHgPAdTVe6FbEv7UDqiT1SFuknOVK7AknjKyryq1f8QzfvVmrkpwesNn6qhji9E8CH/UmQPRg7/0rbKeTIPzm3h/lqlblffGy/xLP8VNW3owV/0/bI//AFgfUl77aqW5X3xsv8Sz/FTWhftN++0Q8Cc74Ji/uxyuHR/7FV9IboKnZ9n/AIZr6G0isI6WNnFjalyIgOKDqe8OAKJ+diHka07oh3naes0Wq3AH2ZThUQCpEkpKecA4TGYwidaz6obqgRLK+jSc6QFRs27/ALpX05Vgu4KJ2lZx+OQfUqT7K1Hpl3kaRam0QtKnXSMQSZwISQrONCSEiOU1ROiHZ5d2i2v4LKVOK+bgT+0pPqNLphspJPvJs6uAJWt4lzd3B5vOH1rVWhdNdl/27oGhU2foKfYus4f99uFR8Nw/tK/nW1dK1n1lk8QJLaw4PJUH9lSqstba9f79pCDKtM1O0z9xg1x90lP6GEOfvVYuj2yw2LjhGbqleaUJgftKc9VZoHDGGThmYnKecc627Y1j1Nqy1EFLYkfnKGJX7SlUuqIRMDuZNPxN8hMa2QqH2TycQf2hWg7bGRrNWV4VA8iD6jWmbwDNfifbRq+V+sKuDKhRRRVcmWTd30keI9oqjubOek+9Oan4CvsrQtgMsQMTivJP8quFq3bAAk3B8AI+kVWmo9InpmOa94Ea2Xop8B7KkGacNG1Anq3yOZgew08aetoJDK8szKzl4wa55M0TPeli2W41bBCFLhbk4Ukx2W+Vc9DNo425c421olKIxJInNWkiruvfPZrZKSpCSDBBcXIIyIIg1yekjZQ1cT6nlexFbQ7mn0tp+fXznxM5A37sxffPZ5uLC4aAJV1ZUkASSpshwADiThiO+sU3TZuLe9t3iy6EocTiJbVkgmFcPik1sg6T9lj8KP1b3+ip/Yu8TF231jBCk58CDlkcjBqK7XorKspwfpBlDtkGYv0t7PeXtN1SGnFDA3mlCiP7NPECqZ9yLj8Q7+rX9lfULt+gZFRT9GtdGD+Ec8lUyfxDaoXbwPMDRk5zPl37j3H5O9+rX9laDvxavK2VsptLTiiErKgEKJTGAZiJGp9Va+WEn8K/8+kjs9s/hbj5/wDKhtfuYHbx7+0BRjPWUToEsXG0XhcQpGItABSSn0Q7zHfXvTduy/cOWz1uw46oJU2vq0FRABCkTHDtLq8HZDR/C3H6yuk7Ga/GP/rP5VT/ADX9b1QPp9I3pfDtlS6EN3HrZq5cuGnGnFrSgJcSUnCgEyARMErifze6uenmzW5bW2BClkOnJKSowUd3hVzTshr8Y/8APpVGzGxo498+p/mf6vqGL6Xw7Zi3RzZPItdqpU04krtDhBQoSQFCBIzOdVzc/Zb6b+zJYdAFy0SShQAHWJ1MV9IJ2ej8Y98/+VLJsx+Md+f/ACq/+fGScc+8X0feVDpW3HO0Gkusx7paBCQYHWI1wSdCDJSTlmQdZHz5f7PdYWW3m1trGqVpKT6jw76+s/cwHw3PNVNHrpsLDSlyo6JOf+zS064oNpGRJanPWfLuydjv3S+rYaW4rjhEgTxUdEjvJAreNxt1Rs63UCQp5cKdUNOyDhQnuTJz4kngBVsv79DDZW4QltIJJOgAEkxVU/rQ2V+NHm07/oqbNRZeuEXp98FrVDkmYhsXZD/uhiWHQOtRJKFRGId1bztq1DzTrZ/CIUn5wIpEdJey1fhk+aXk+1uuTvzstX4Rv56h7QKi97LSDtIx8/0k1hRnr+ExnZO590t9pLls8ltS0halIUkBBIxEk6ZTWvPqkzzM1NhbKxKWVkcwommrqWJjqngeQqq/UG7Ge0euvZPndzZjwJ96cjngV9laHt45q8TV3u22Iz90J8QPsqpbdaYgw4vzT/Krn1Hq46YxEFezMo1FL4EfH+g0VbEm07T6OFNuF22WC2TPVryKZOiVDUDgCAY4k0ldykBEKCU/GBEnnB9nAedapVd3u2qlpvAI6xemnZHE/ZS6vTLjeDj2k02nO3EoqIzkE5QMJgzlHAz4d9OLJ/QLUIHZwkQcKtTEcMjrw9bJLkGQYIzBBzHnzpTrQlQMhZUO0FpkAnXU5+J9dcyazMy6TdjFm46wDJeSvlJGXrTHqNUmt83n2Sm6tltkgqSAMQz4SlXlofVxrCbq3U2tSFiFJMEd4rt6O7em08iYb0w2fMRq59G29Js7gJWqGlnOdEq0B8DofLlVMorS9YdSplasVORPqS5tkOBLgzTqIOh5UkxeJxdWARA5eOWXhVF3A21c2zDXutpQtnOy26rSJgJXxTPwVGJyrQlNCMbcEHjy7jXnrqijYM3q24RYGuwajrJbna6yAJMeHDjpTph9KvRIPgapxGjoGuwaRBrsGohFga7BpEGuwaJEWBrsGkCuBJ0pv7txoWWlAqEgcZPhyohFNq33VIxYScwMhI755ZTXCbdtcPlMHCCJyI4yY41zsxCw1D8dk8eEaZyZqob67wvrbdasGlOKbSStSQIbET4FcZhAk8YiJtrrLnAik4EqHS9vf1ivcrRyH9oRy4J+s+XfWV0o44SSSSSTJJzJJ4k86Tr0NNQrTaJidyxzCrHuPskv3KcpS3Cj4z2R5n6AaryUkmBmTW69Ge7fudoKWO16SvlHQTyTp6zxqrV3enX7mNSm5paH0pZaShQyiCeMq4x9c0vYMlKQCcUcTMkGIyP1azSAUVuSkyn0XEHWecHInwqSabgAAVwDN0RuWApMKITyJOn8qrtpuCu7XjW6lDQMHB2lKjl8EDvM+FXTZRQ25Ckp98OSoEhfInkeHflxFWQV0tHplI3k59pnutI+GVX+rvZ/4j9pX20VaqK6Xpr4mXcYUmttJ1APiBShrlSZEGmYZEBMu3kvkOvnAEhCchAAnmcv95UyZcJ7GIJSo5kjIQDxie7KtE2/1TDC3OrRIEJ7IzUchWZB3mc64V9RrbBPWb6mDL0j+yejIBEIBkzGIcs/oEZd1UrpH3Wxj3SyJMZgaqSP8yfZ4CbdOMAkoTgAgRBV6tTzPfwzNOWbhKknHgCVH0U5FMD0gIiMs+fqNLVaa23CM6hhgz53FaTuDuBjSi8vBhZ9Jts6uDgojgg8OeukYpF3dK1YvkXD6MdtOJSRmgK+CtQjtNcVJGmuaZA4346SpuA3bw40gw4uYDh0hB4IHBXE56RPUe97l20jnk/l85kVAhy0sVnvW3e3D1q22SG2ye0JbWlJCVtqRwTBEK5jvBqJ2NtW7s756zabcuGWoUAO0tDa0pUEx8OAoCPSMGNIrnZ3SVZNNqUlp5byvgYG04lD0cbgJJTPcT3VLtXarC1evbsA3VwesWkZcghuc4SMk8YAnOaylNowV56AHz5lucnmWSw2nb3ST1awFTCkmRhUOBBzSocjmO6l/cZaQQkRxzzHrqkbU/5yyN+0VtuJaU6hZjrAGlKC21qEBxvsqwkjLLIZipLY91tBphla3GHMaAooUrqlAkaZy2T3koFZnoxwe/BlgeWK1U4lslySruz8NB667s70qQVKGGOGft4iahn99G2YF2w4xJgFSDhJ7nEYmz5Glmd9tnkf26B/5ED21WabPEbcJLWN/wBYlSowxwOv+/CjZ94twKKkFMZAd/j6qi/6abOSMrhvycR9VIP79W6W1OttOuIAMrQ04tEDIkrCcH00ClzwpkbhJ7ZjLvbDipnuz015f/K8cft7RClKUlI1OYHrOgFULe/fe9ZYS6LcNocOFONQnQkEoRlBAPwuGlcbmbPZ2rZuLfKlXUrbxKWcLayJbWhsEJGRiSJlCs6uXTHbvbj74hs64HMN/d7rwsY7dlaWSSOtI0Hxgj0gk8FqAGWWoNddEW28dr1Sldpp45mZwvDECefbC5PeKkN1NqLu7VSVge6bc9W6jjlI9eR7siOE1G2+xUW7ynWBgS4ClaB6MpVIIHwVAggjTM6VYWVUaojB8yApLBgekielbcnAVX1smGyffmx8BR+Gn8xXEcD3HLLK23Zu9QZul2t1my+MTZVnAXIUk8wVBUeMchVWstymn7xRYUV2oV2cj2jJ7IPFA+N5ZkEjZRqCi4s8dD5/zKnqyfhnHRpuop1xLy05fgwefxz3Dh358BOxvgISGWzhXBwzkCQc+7hoeFFpat2jYBgTAJGg5CBwyg+Nd2dqpSvfBJQqULHxfHQjhnXMvvNrbjNCKFGBFbFj4RThUYxACASO76xTl1nENASCCAdCRwPcdD40qlOgHCldk2bRK0LQCoHECdSlR+pUjuBTS01m18A4MHbaMyQsLVhSUuIZbE5+gkEEag5ag5eIqTpC2tkNjChISJmBzNLV6BFwJgJyZ7RXlFPIntFFFEIg/bIXGJIVGkiapm/9wlCW2EAAqOJQSBoNB68/KrzSRZTOLCJ5xn66z30+ovTGfMsrfaczHVYkkYkKE6YhEx4jMU4LxkuhSQuckhH08o4Aaz66l96mHn7tQbaWsIAQCBlOpzOWpjyqEWhxl0oVCVoiYgwYB8ONcVkwTNytkR5brCgEEKXMlQCc0nWU/WIAqhb4bhTL1tGeeEZJV4fFV3HLw43RIKvRxl1R4EAEHwMyeP8A8pwzcYSUnCgJEKBJUFkcxzmRlEZ91NVc1ZyshkDDBmf9EO7PW3Srh5Bw20EIIzLp9AFJzhPpeOHvqzXG8hudovWyO0hsRjHx0kBY5FOcD5JOYOUjd7GS4oOsqWw9EJUklC45JXopP5pkd3Gq3urso7Ncd6xCnAuMK0jNMBXpI11IzTi0zitD2LbljzjoJUqlCAOI921t1dzdJ2Sy3GJSQ86VSS2lIcUhKQAEpgQdZ0y4yG967wuIRYraARkUuBJxgABIhSSnnqRrrUH0QtFy6vbxc4wClKdTLipVlr2QkD9I0jvRbbQRdO3Nm51jRIhCTJSEgDtNrAg5ScM661LIBYEGOg78EmQCSpJz1ndvtu8udo2dncsNsrYWpS0t6HE3kSMSgITyMdvSvOl2zDjSXhq0spPyVGPoUB84006K7hy52u689/adU4o5RBGFMRwiYq07faQ8bpg6JcCFfptIcB9ZVHyKm0mu1SBwBnHvz+MlPiQjzHXRbs3qLJpOinPfnO8uQEDyQEnxUaQ2E6Hmbq0Voh+8tiO50rWD5KmnW7m1wbr3MInq+sV84BI8gD6xUHuyR90NqpnR4PAdynTjP7QqrLNvY89D/eTgAgfSdWtqdpbCQE9p1uUczjbzAPersnwVVN6KNtm3vOrJ7DwAPykyUn1Yh+lU/uVvANnX11ZXJwNuOEpUdG3ASUk8kqSRJ4QnhJqbf3Ss27o3oxJlRX2nG0W6VKmVYzmUycQQOMCSMq0EhAyHhuo+srAJIPjmQe3NrfczbanwJZfAU6gcUr9I/LChjHeY4mrLv/it0I2haKQtteFLrRzQ+hYAbWM56wCEyntRh4JNU3erZj20bvG0CllKUoS4sFOONVJQRig8JiQBpMVdN3dyw0hvrlqUGgQgrMlIJk4E6IB4nXvIikdkVVJ5xgjz84wUknHEhE7EVtFxla7fqW209loqKlkqIJ6xUABIOiQAedaDaWzdq0SkAlIzgRA4AchE56ZV0XEoCmmhCgkqABzOv08Yrqzt1LUl45YkQpPDP6tcqxWWlunYdpcBiesWxcUqe0y4AQI9E5eoxB74qSUtLY7SgBzUQP5UEhpBI9FIJ55AUhe3aQmT2VJhSUrBQVFBCgBiAmYjLnVarn5SYoGWlOtrWhC0mWyVAKAxQUmeeIBP6dTrGzmkKC0ICVAEZToYkRMcB6hXP3NYVC+rbJyIUEgHmDIz76f13NPR6a4OD4mKx9xntFFFa5VCiiiiEKKKKIQoooohOIrPnd1Lh951xRDSVrJE5qicsh3RxrQ68NZ7qFsxngR0crxMZdbCFuJmQlZTJ44SRSrbgKcMADECVR2oyHPQaxGtXyw3PZSord99USTB9EEmdOPnVKasnHXVoaQVHEdNBmdToK5FlLpjI5m5bFbOO0EYhiUBjQnsgr0E5DL6Y8OVLsXIUEoJx5Z9ZkByhWugM6+FMVNwSDqCQfZSynAokrGIxA0SAeBgCCByyqiPiJ3Ww7d6HMJSoGAvPIx8F1MKGWeUZVyuwvQkhq6U4kpKffAl6ARHpZOfOWacJb9HCqTPonJKcxGZyOU5+FK9Ys4iQFZjEvlnw8RHlTixgMRdolP3M2FcbMuVvYQ8FNFuJU2RKkKn0VD4PPjXaXbpN3dvqtsbVzh7CXkpUlSIwnEpMGBiER8KrkjaBEE4wIGQJlRg55yACeEcKUTfDIHXVXZTAEDu11OtWnUsSSwBzE9MDiZ9sZF2zfuXptxCwQlHWJyHZCQSNYSInnTrZmzrxF8/dJbah9CkKbUpZyVhn0UjikcRV5TtBOUDUwnspzE5k5cvbXR2lkogKITA5SoggxEZAxQdQx7DjH0k7BKVtLcRy9uF3NyYUvDIbHVo7KUpHpqWdAJM1PbI3HtWIISkHmAVHP8APMxPcamkvOFY7OiZUfzjAAP6Q0rhphakoKlZ4sSoz1kgeIPtpGvsYYJ6QCKOBFesaZSooSJSQDxMmIz8J9VdOBbhcRokoGFXeZ18eP8AKlWbFIxZekZP0R6op6hOffz8aozHiNrZgYVH0gkJk6kCD9BkTyp+lI0AikWHAY1BOYBESOY5jvFO7HZpU0haFkKIkhUqScz5p8jA5VZXS9pIHIiM4XmN2A6ppKltylaQSWzigEZykwqeEJxVNbL7bDeMZlACgocQIMg9/OutlsqQ0lK4ChlkZGpiDA4Rwp7XZo0619R3HExvYWnKEAAACAMgBwFd0UVrlcKKKKIQoooohCiiiiEKKKKIQoooohPKb29shAhCQka5DiePjTmvKUqD1k5lOs91MTq3HDCCtRSkakSYk8BUFdbOUblbSEycRgDgJnyFadTdq1QlSlADErMniawPoVwAv1MvW89SZml5aqbWUHUGDXikRrxq83WwUuXHWq9GB2eZH1Uz3g2SVutlA9LsnkI4+EVjfSOoJ98fOXLcpwJVwpUhUmYiTnlEca6COzHCZ0HKNasO29jJbbQU5xko854+v6q5XsQpYx/D1I5J+0a1WdPYGIxwMxxYpAMhkiSTlpGg0MactKVbRw5ZjTUmfbzqU2ZsguNqVodEd5Gs93D18q92Rs0OKUFAhKdeBxHIDyzPkKhaLCVGOeIF1GfaMExqeGpP+/GlpgEnQCaf2uz1B8IUMk9ueCgnQ+Mxl3Gndxsj3xJRGAqBUn4sGTHcYiOE8tLF0djDPviIblBxIsgoJxApKRJSfaOY76e/c1xtCVCXOyMQ+EDGZHxh3a8p0qWvrBDqYUPAjIidc+R4intba9AoJDcdvIlBvPTEjbOzSq3aStMwhOuRCsIzB1B7xnTy2YDaAhMwkQJzPrpevK3KgEpJJntFFFPIhRRRRCFFFFEIUUUUQhRRRRCFFFFEIUUUUQhRRRRCeUUUUQhXhoopTCNtp/2Z8U/vClnfRPgaKKqP2j8o/YfONtjf2Dfya82d6T395/kRXtFIvCSTy0d8f991dUUVoESe0UUU0iFeUUUQntFFFEIUUUUQhRRRRCFFFFEJ/9k="
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
                <h3 Style="color:green">CleanIT</h3>

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
