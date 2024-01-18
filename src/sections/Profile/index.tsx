import { SectionScreenWrapper } from '../../shared/styles/styles';
import { LeftSide, ProfileSectionDiv, RightSide, TitleDiv } from './styles';

const Profile = () => {
  return (
    <SectionScreenWrapper>
      <ProfileSectionDiv>
        <LeftSide>
          <TitleDiv>
            <h1>Matheus Medeiros da Silva</h1>
            <h2>Desenvolvedor Front-End</h2>
          </TitleDiv>
        </LeftSide>
        <RightSide></RightSide>
      </ProfileSectionDiv>
    </SectionScreenWrapper>
  );
};

export default Profile;
