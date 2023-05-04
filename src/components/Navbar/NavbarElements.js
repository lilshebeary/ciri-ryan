import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: #0b3142;
  height: 110px;
  margin-top: -110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 4.5em;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b3142;
  width: 100vw;
  z-index: 1;
  /* padding: 0 24px; */
  max-width: 800px;

  @media screen and (max-width: 760px) {
    padding: 0 2rem;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  font-size: 3.4rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-weight: 200;
  height: 3em;
  font-family: 'Roboto', sans-serif;
  font-family: 'Sorts Mill Goudy', serif;
  text-shadow: 3px 3px #0b3142;

  &:hover {
   color: #3D8DAE;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    cursor: pointer;
    font-size: 2.5rem;
    color: #f0f9ff;

    svg:hover {
      color: #fff !important;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
font-family: 'Roboto', sans-serif;
font-family: 'Sorts Mill Goudy', serif;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: 0;
  padding: .2em 1em;
  cursor: pointer;
  font-size: 1.55rem;
  font-weight: 200;
  border-radius: 50px;

  &.active {
    border: 0.07rem solid #8b8c89;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;

  white-space: nowrap;
  color: #00000c;
  font-size: 1.5 rem;

  border: 0.5 solid grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #3D8DAE;
  }
`;

export const Hr = styled.hr`
  position: absolute;
  justify-self: center;
  align-self: center;
  margin-top: 19rem;
  color: #00000c;
  width: 12em;
  text-decoration: solid;
  z-index: 10;

  @media screen and (max-width: 480px) {
    margin-top: 12rem;
  }
  @media screen and (max-height: 680px) {
    margin-top: 12rem;
  }
`;
