import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const ModalContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #00000c;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const ModalWrapper = styled.div`
    color: #fff;
`;

export const ModalH1 = styled.h1`
  margin-top: 180px;
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  color: #00000c;
  justify-self: center;
  padding-bottom: 0.3em;
  margin-bottom: 1em;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    margin-top: 40px;
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-top: 0px;
  }
`;

export const ModalImg = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  max-height: 210px;
  max-width: 250px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const ModalP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ModalLink = styled(LinkS)`
      font-size: 1rem;
  color: #00000c;
  border-color: #2d93ad;
  outline: #2d93ad;
  text-decoration: none;
  &:hover {
    background: #2d93ad;
    color: #fff;
  }
  & a:hover {
    text-decoration: none;
    color: #fff;
  }
  & a {
    text-decoration: none;
  }
`;

export const ModalRoute = styled(LinkR)`

`;

export const ModalBtnWrap = styled.button`
 
`;