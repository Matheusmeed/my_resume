import styled from 'styled-components';

export const SectionScreenWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100vh;
  width: 100%;
`;
