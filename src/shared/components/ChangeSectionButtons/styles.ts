import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: fixed;
  right: 100px;
  bottom: 100px;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  overflow: visible;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: ${rotateAnimation} 0.5s linear;
    `};

  :hover {
    cursor: ${({ isSelected }) => (isSelected ? 'unset' : 'pointer')};

    * {
      color: ${({ isSelected }) => (isSelected ? 'unset' : '#57bdda')};
    }
  }
`;
