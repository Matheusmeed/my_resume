import { Button, ButtonDiv, StyledSiPreact, StyledSiReact } from './styles';

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
            <StyledSiPreact />
          </Button>
        ) : (
          <Button
            isSelected={false}
            onClick={() => {
              handleSectionChange(section.name);
            }}
            key={section.name}
          >
            <StyledSiReact />
          </Button>
        );
      })}
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
