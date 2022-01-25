import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={1} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' strokeWidth={1} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray300);
  overflow: auto;

  @media (${BREAKPOINTS.tablet}) {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray900);
    gap: 1rem;
  }

  @media (${BREAKPOINTS.mobile}) {
    padding: 0 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7vw - 3rem, 4rem);
  margin: 0px 48px;

  @media (${BREAKPOINTS.tablet}) {
    display: none;
  }

  @media (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  margin-right: auto;

  @media (${BREAKPOINTS.tablet}) {
    display: none;
  }

  @media (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  margin-right: auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray900);
  font-weight: ${WEIGHTS.medium};
  min-width: max-content;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (${BREAKPOINTS.tablet}) {
    display: flex;
    gap: 2rem;
  }

  @media (${BREAKPOINTS.mobile}) {
    display: flex;
    gap: 1rem;
  }
`;

export default Header;
