import React from 'react';
import styled from 'styled-components';

import { PAGE_HOME_TABS, SITE_NAME } from '../constants';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  background: linear-gradient(to right,rgba(255,196,14,0.8) 100%,rgba(255,196,14,0.8) 50%);
  transform: skew(0,-3deg);
  padding: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`

interface SiteHeaderProps {
  onClickSetTabView: (tab: string) => void;
}

function SiteHeader({ onClickSetTabView }: SiteHeaderProps) {
  return (
    <Wrapper>
      <Logo>
        {SITE_NAME}
      </Logo>
      <div>
        <button onClick={() => onClickSetTabView(PAGE_HOME_TABS.MOVIES)}>
          Movies
        </button>
        <button onClick={() => onClickSetTabView(PAGE_HOME_TABS.TV)}>
          Tv Shows
        </button>
      </div>
    </Wrapper>
  )
};

export default SiteHeader;