import styled from 'styled-components';

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

  :hover {
    cursor: ${({ isSelected }) => (isSelected ? 'unset' : 'pointer')};

    * {
      color: ${({ isSelected }) => (isSelected ? 'unset' : '#57bdda')};
    }
  }
`;
