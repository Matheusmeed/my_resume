import styled from 'styled-components';

export const ProfileSectionDiv = styled.div`
  display: flex;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #d5e7ea, #abc3c8) 1;
  width: 98vw;
  height: 97vh;
`;

export const LeftSide = styled.div`
  padding: 30px 50px;
  width: 60%;
`;

export const RightSide = styled.div`
  width: 40%;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'Titillium Web', sans-serif;
  color: #063135;

  h2 {
    padding-left: 2px;
  }
`;
