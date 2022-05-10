import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const whiteBg = "#fff";

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

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 80px; */
  background-color: #0b3142;
  width: 100vw;
  z-index: 1;
  /* padding: 0 24px; */
  max-width: 800px;

  @media screen and (max-width: 760px) {
    margin-left: 0;
    margin-right: 2em;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
  font-weight: 200;
  height: 56px;
  font-family: "Quicksand", sans-serif;
  /* padding-left: 0.4rem; */
  text-shadow: 3px 3px #0b3142;

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
  gap: 1rem;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: 0;
  padding-top: 0.15em;
  padding-bottom: 0.3em;
  cursor: pointer;
  font-size: 1.25rem;
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
    margin-top: 12rem;
  }
  @media screen and (max-height: 680px) {
    margin-top: 12rem;
  }
`;
