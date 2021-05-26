import React, {
  useRef, useEffect, useCallback, useLayoutEffect
} from 'react';

import {
  Container, CloseModalButton, ModalContent, ModalWrapper
} from './style';
import { useBlockScroll } from 'helper';

export const Modal = ({
  showModal, setShowModal, children
}) => {
  const [blockScroll, allowScroll] = useBlockScroll();
  const modalRef = useRef<any>();

  useEffect(() => {
    if (showModal) {
      blockScroll();
    } else {
      allowScroll();
    }
    window.onpopstate = e => {
      allowScroll();
    };

    return () => allowScroll();
  }, [showModal]);

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      { showModal ? (
        <Container ref={ modalRef } showModal={ showModal }>
          <ModalWrapper showModal={ showModal }>
            <ModalContent id='modal'>
              { children }
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={ () => setShowModal(prev => !prev) }
            />
          </ModalWrapper>
        </Container>
      ) : null }
    </>
  );
};

export default Modal;