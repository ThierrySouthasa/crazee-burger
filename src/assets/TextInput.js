import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme';

const TextInput = ({ value, onChange, Icon, className, version, ...extraProps }) => {
  return (
    <TextInputStyled className={className} version={version}>
      <div className='icon'>{Icon && Icon}</div>
      <input value={value} onChange={onChange} type='text' {...extraProps} />
    </TextInputStyled>
  );
};

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input{
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
  };

  &::placeholder{
    background-color: ${theme.colors.white};
    color: ${theme.colors.greyMedium};
  }

  ${({ version }) => extraStyle[version]}

`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

    input{
      color: ${theme.colors.dark};

      &::placeholder {
        background: ${theme.colors.white};
  }
}
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

    input{
      background-color: ${theme.colors.background_white};
      color: ${theme.colors.dark};

      &:focus {
        outline: 0;
  }
}`
  ;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist
}

export default TextInput;