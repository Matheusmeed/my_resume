import styled from 'styled-components';

export const ProfileSectionDiv = styled.div`
  display: flex;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #a8ffe973, #abc3c8) 1;
  width: 98vw;
  height: 97vh;
`;

export const LeftSide = styled.div`
  padding: 30px 50px;
  width: 60%;
`;

export const RightSide = styled.div`
  width: 40%;
  position: relative;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'Boogaloo', sans-serif;

  color: transparent;
  background: linear-gradient(to right, #7effdbf2, #ffffffc4);
  -webkit-background-clip: text;
  background-clip: text;

  h1 {
    font-size: 5.5em;
    line-height: 0.85em;
  }

  h2 {
    padding-left: 3px;
    font-size: 2.5em;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 45%;
  left: 30%;
  overflow: hidden;
  border-radius: 10px 0 0 150px;
  border: 2px solid #ffffff87;
  background: linear-gradient(to right, #84ffdd3d, #84ffdd0a);

  img {
    width: 340px;
  }
`;
