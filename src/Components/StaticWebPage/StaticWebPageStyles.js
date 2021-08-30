import styled from "styled-components";
import { motion } from "framer-motion";
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 100%;
    margin-right: 20px;
  }
`;
export const Services = styled(motion.div)`

max-height 300px;


`;
export const Products = styled(motion.div)`
  height: 400px;
`;
export const Center = styled.div`
  align-items: center;
  justify-content: center;
`;

export const About = styled(motion.div)`
  margin-top: 100px;
`;
export const GridBt = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  height: auto;
  padding: 60px;
`;
export const Team = styled(motion.div)`
  box-shadow: (1, 2, 3, 5);
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  padding: 30px;
  @media screen and (max-width: 960px) {
    width: 400px;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 320) {
    padding: 0 0 px;
  }
`;
export const ImgCaroussel = styled.img`
  max-height: 400px;
  width: 100%;
  object-fit: fill;
  overflow: hidden;
`;
export const Heros = styled.div`
  background-image: url
    (
      "https://ded7t1cra1lh5.cloudfront.net/media/547879/ce6b0585f7f9cfcfac49adb343ac6bc6b02b3b33/original/hero-window-cleaning-001.jpg?1581103019"
    );
  max-height: 400px;
  width: 100%;
`;

export const NavLogo = styled.a`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 35px;
  letter-spacing: 6px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 720px) and {
    margin-right: 100%;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: white;
  display: flex;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  @media screen and (max-width: 960px) {
    font-size: 15px;
    width: 100%;
  }
`;
