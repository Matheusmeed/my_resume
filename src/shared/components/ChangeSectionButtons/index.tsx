import { Button, ButtonDiv } from './styles';
import { SiReact } from 'react-icons/si';
import { SiPreact } from 'react-icons/si';

interface IChangeSectionButtons {
  sections: { component: JSX.Element; isSelected: boolean }[];
}

const ChangeSectionButtons = ({ sections }: IChangeSectionButtons) => {
  return (
    <ButtonDiv>
      {sections.map((section) => {
        return section.isSelected ? (
          <Button isSelected={true}>
            <SiPreact size={30} color={'#087EA4'} />
          </Button>
        ) : (
          <Button isSelected={false}>
            <SiReact size={20} color={'#087EA4'} className={'reactIcon'} />
          </Button>
        );
      })}
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
