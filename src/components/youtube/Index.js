import React from "react";

const EmbedModal = () => {
  return (
    <ModalWrapper>
    <ModalContent>
            <ModalH1>{}</ModalH1>
            <iframe
              width="640"
              height="360"
              src="https://${}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >

            </iframe>
              <ModalP>
              
            </ModalP>
          </ModalContent>
     
    </ModalWrapper>
  );
};

export default EmbedModal;
