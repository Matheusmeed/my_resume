import { SectionScreenWrapper } from '../../shared/styles/styles';
import {
  DescriptionDiv,
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
              <h1>Matheus Medeiros da silva</h1>
              <h2>Desenvolvedor Front-End</h2>
            </div>
          </TitleDiv>
          <DescriptionDiv>
            <p>
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <p>
              Proven experience building successful products for clients across
              several countries.
            </p>
            <p>
              Proven experience building successful products for clients across
              several countries.
            </p>
          </DescriptionDiv>
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
