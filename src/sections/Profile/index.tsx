import { SectionScreenWrapper } from '../../shared/styles/styles';
import {
  ImageDiv,
  LeftSide,
  ProfileSectionDiv,
  RightSide,
  TitleDiv,
} from './styles';

const Profile = () => {
  return (
    <SectionScreenWrapper>
      <ProfileSectionDiv>
        <LeftSide>
          <TitleDiv>
            <div>
              <div>
                <h1>Matheus Medeiros da silva</h1>
              </div>
              <h2>Desenvolvedor Front-End</h2>
            </div>
          </TitleDiv>
        </LeftSide>
        <RightSide>
          <ImageDiv>
            <img src='/public/images/profile.png' alt='profile picture' />
          </ImageDiv>
        </RightSide>
      </ProfileSectionDiv>
    </SectionScreenWrapper>
  );
};

export default Profile;
