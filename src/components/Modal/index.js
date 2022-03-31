import React from 'react';
import {
  ModalContainer,
  Icon,
  CloseIcon,
  ModalWrapper,
  ModalP,
  ModalH1,
  ModalImg,
  ModalLink,
  ModalRoute,
} from './ModalElements';

const Modal = ({ isOpen, toggle }) => {
  return (
    <ModalContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <ModalWrapper>
        <ModalH1></ModalH1>
        <ModalImg src="" alt=""></ModalImg>
        <ModalP></ModalP>
        <ModalLink
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            className="btn btn-outline-success btn-sm"
        >
            <a href=''></a>
        </ModalLink>
        <YouTubeVideo
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            className="btn btn-outline-success btn-sm"
        >
            <iframe 
                width="945" 
                height="532" 
                src="https://www.youtube.com/embed/iMODZqD6Kc4" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            >
            </iframe> 
        </YouTubeVideo>

        <ModalBtnWrap>
          <ModalRoute to='/'>Home</ModalRoute>
        </ModalBtnWrap>

      </ModalWrapper>
    </ModalContainer>
  );
};

export default Sidebar;