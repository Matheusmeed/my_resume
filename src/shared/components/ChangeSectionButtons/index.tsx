import { Button, ButtonDiv, StyledSiPreact, StyledSiReact } from './styles';

interface IChangeSectionButtons {
  sections: {
    name: string;
    component: () => JSX.Element;
    isSelected: boolean;
    ref: React.RefObject<HTMLDivElement>;
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
              section.ref.current?.scrollIntoView({
                behavior: 'smooth',
              });
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
