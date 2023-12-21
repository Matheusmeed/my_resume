import { Button, ButtonDiv } from './styles';
import { SiReact } from 'react-icons/si';
import { SiPreact } from 'react-icons/si';

interface IChangeSectionButtons {
  sections: {
    name: string;
    component: () => JSX.Element;
    isSelected: boolean;
  }[];
  handleSectionChange: (name: string) => void;
}

const ChangeSectionButtons = ({
  sections,
  handleSectionChange,
}: IChangeSectionButtons) => {
  return (
    <ButtonDiv>
      {sections.map((section) => {
        return section.isSelected ? (
          <Button isSelected={true} key={section.name}>
            <SiPreact size={30} color={'#087EA4'} />
          </Button>
        ) : (
          <Button
            isSelected={false}
            onClick={() => {
              handleSectionChange(section.name);
            }}
            key={section.name}
          >
            <SiReact size={20} color={'#087EA4'} className={'reactIcon'} />
          </Button>
        );
      })}
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
