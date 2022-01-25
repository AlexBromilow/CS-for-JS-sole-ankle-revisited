/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import Dialog, { DialogOverlay, DialogContent } from '@reach/dialog';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <div>
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content>
          <CloseButton onClick={onDismiss}>X</CloseButton>
          <Nav>
            <a href='/sale'>Sale</a>
            <a href='/new'>New&nbsp;Releases</a>
            <a href='/men'>Men</a>
            <a href='/women'>Women</a>
            <a href='/kids'>Kids</a>
            <a href='/collections'>Collections</a>
          </Nav>
          <Footer>
            <a href='/terms'>Terms and Conditions</a>
            <a href='/privacy'>Privacy Policy</a>
            <a href='/contact'>Contact Us</a>
          </Footer>
        </Content>
      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: none;

  @media (${BREAKPOINTS.tablet}) {
    display: revert;
  }
`;

const Content = styled(DialogContent)`
  display: flex;
  width: calc(100% - 5rem);
  flex-direction: column;
  background: hsla(0deg, 0%, 100%, 1);
  position: absolute;
  top: 0;
  right: 0;
  align-items: flex-end;
  height: 100%;
  justify-content: flex-end;
  padding: 2rem;
  padding-right: ${22 / 16}rem;
  font-family: Raleway;
`;

const CloseButton = styled(UnstyledButton)`
  height: 12px;
  width: 12px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  gap: ${22 / 16}rem;

  a {
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${14 / 16}rem;

  a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

export default MobileMenu;
