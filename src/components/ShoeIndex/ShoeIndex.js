import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <Header>
        <GridHeader>
          <Title>Running</Title>
          <SortFilterWrapper>
            <Select
              label='Sort'
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}>
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </SortFilterWrapper>
        </GridHeader>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
      </Header>
      <Main>
        <MainColumn>
          <Spacer size={32} />
          <ShoeGrid />
        </MainColumn>
        <LeftColumn>
          <Spacer size={42} />
          <ShoeSidebar />
        </LeftColumn>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 32px;
`;

const GridHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (${BREAKPOINTS.tablet}) {
    width: 100%;
  }
`;

const SortFilterWrapper = styled.div`
  @media (${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  @media (${BREAKPOINTS.tablet}) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    gap: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
