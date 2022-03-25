import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const whiteBg = "#fff";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "transparent")};
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

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 800px;
  margin-top: 5em;
  position: sticky;

  @media screen and (max-width: 760px) {
    margin-left: 0;
    margin-right: 2em;
  }
`;

export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-weight: 200;
  height: 57px;
  font-family: "Quicksand", sans-serif;

  &:hover {
    font-family: "Quicksand", sans-serif;
    font-size: 2.4rem;
    color: #fff;
    background-color: #0b3142;
    width: 175px;
    border-radius: 50px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 2.5rem;

    svg:hover {
      color: #fff !important;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0.9em;
  margin-top: 1em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #00000c;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 1.3em;
  margin-right: 0.1em;
  padding-top: 0;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-top: 0.15em;
  padding-bottom: 0.3em;
  cursor: pointer;
  font-size: 1.48rem;
  font-weight: 100;
  border: 0.07rem solid #8b8c89;
  border-radius: 50px;

  &.active {
    border-bottom: 3px solid #fff;
    color: #fff;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;

  white-space: nowrap;
  /* padding: 10px 22px; */
  color: #00000c;
  font-size: 1.5 rem;

  border: 0.5 solid grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #00000c;
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
    margin-top: 19rem;
  }
  @media screen and (max-height: 680px) {
    margin-top: 12rem;
  }
`;
