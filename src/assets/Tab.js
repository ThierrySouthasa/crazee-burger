import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';

const Tab = ({ Icon, onClick, className, label }) => {
    return (
        <TabStyled onClick={onClick} className={className}>
            <div className='icon'>{Icon}</div>
            {label && <span className='label'>{label}</span>}
        </TabStyled>
    );
};

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0 0;

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;

export default Tab;