import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: var(--color-gray300);
    }
  }
`;

const CrumbLink = styled.a`
  color: var(--color-gray700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray900);
  }
`;

const Wrapper = styled.nav`
  flex-basis: 248px;
  display: flex;
  font-size: 0.875rem;

  @media (${BREAKPOINTS.tablet}) {
    flex-basis: 0;
  }
`;
export default Breadcrumbs;
