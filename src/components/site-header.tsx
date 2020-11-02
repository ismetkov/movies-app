import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { PAGE_HOME_TABS, SITE_NAME } from '../constants';

import { StoreState } from '../reducers';

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
`;

interface ButtonProps {
  isSelected: boolean;
}

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 10px;
  margin: 0 10px;
  border-bottom: ${(props: ButtonProps) => props.isSelected ? '1px solid var(--yellow)' : null};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

interface SiteHeaderProps {
  onClickSetTabView: (tab: string) => void;
}

function SiteHeader({ onClickSetTabView }: SiteHeaderProps) {
  const currentTab = useSelector((state: StoreState) => state.main.tabView);

  return (
    <Wrapper>
      <Logo>
        {SITE_NAME}
      </Logo>
      <div>
        <Button isSelected={currentTab === PAGE_HOME_TABS.MOVIES} onClick={() => onClickSetTabView(PAGE_HOME_TABS.MOVIES)}>
          Movies
        </Button>
        <Button isSelected={currentTab === PAGE_HOME_TABS.TV} onClick={() => onClickSetTabView(PAGE_HOME_TABS.TV)}>
          Tv Shows
        </Button>
      </div>
    </Wrapper>
  )
};

export default SiteHeader;