import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

type ModalProps = {
    showModal?: boolean
}

const Container = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.showModal ? 'visible' : 'hidden'};
  transition: all 0.3s;
  z-index: 99;
  transition: all ease 1s;
  animation: ${props => props.showModal ? 'fadeIn' : 'fadeOut'} 0.5s forwards;

  @-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0} 
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}
`;

const ModalWrapper = styled.div<ModalProps>`
  width: 100%;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
  padding: 20px 20px;
  margin: 0 20px;
  top: -10%;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  align-items: center;

  p .title-modal {
    /* margin-bottom: 0; */
    width: calc(100% - 100px);
  }
  button {
    text-align: center;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 10;
`;

export {
  Container, CloseModalButton, MdClose, ModalContent, ModalWrapper,
};