import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

// const whiteBg = '#fff';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'transparent' : 'transparent')};
  height: 80px;
  margin-top: -80px;
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
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 800px;
  margin-top: 5em;
  position: sticky;
`;

export const NavLogo = styled(LinkR)`
  color: #00000C;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: .5em;
  font-weight: bold;
  text-decoration: none;
  font-weight: 200;
  font-family: 'Quicksand', sans-serif;

    &:hover {
      font-family: 'Quicksand', sans-serif;
      font-size: 2.4rem;
      color: ${({ whiteBg }) => (whiteBg ? '#00000c' : '#fff')};
      
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
    margin-right: 1em;
    margin-top: -.7em;
    font-size: 2.5rem;
  }

`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: .9em;
  margin-top: 1em;
 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;


export const NavLinks = styled(LinkS)`
  color: #00000C;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 1.3em;
  margin-right: .1em;
  padding-top: 0;
  padding-left: .7em;
  padding-right: .7em;
  padding-top: .15em;
  padding-bottom: .3em;
  cursor: pointer;
  font-size: 1.48rem;
  font-weight: 100;
  border: .07rem solid #2f2f2f;
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
  color: #00000C;
  font-size: 1.5 rem;
  
  border: .5 solid grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #00000C;
  }
`;

export const Hr = styled.hr`
  position: absolute;
  justify-self: center;
  align-self: center;
  margin-top: 325px;
  color: #00000C;
  width: 12em;
  text-decoration: solid;
  z-index: 10;
`;