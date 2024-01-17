import { useEffect, useState } from 'react';
import {
  Button,
  ButtonDiv,
  StyledFaDiamond,
  StyledFaRegSquare,
} from './styles';

interface IChangeSectionButtons {
  sections: {
    name: string;
    component: () => JSX.Element;
    isSelected: boolean;
    ref: React.RefObject<HTMLDivElement>;
  }[];
  handleSectionChange: (
    name: string,
    sectionRef: React.RefObject<HTMLDivElement>
  ) => void;
}

const ChangeSectionButtons = ({
  sections,
  handleSectionChange,
}: IChangeSectionButtons) => {
  const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {
    sections.map((section) => {
      if (section.isSelected) {
        setCurrentPage(section.name);
      }
    });
  }, [sections]);

  return (
    <ButtonDiv>
      {sections.map((section) => {
        return section.isSelected ? (
          <Button isSelected={true} key={section.name}>
            <StyledFaRegSquare
              color={currentPage === 'about_me' ? 'white' : ''}
            />
          </Button>
        ) : (
          <Button
            hoverColor={currentPage === 'about_me' ? 'red' : ''}
            isSelected={false}
            onClick={() => {
              handleSectionChange(section.name, section.ref);
            }}
            key={section.name}
          >
            <StyledFaDiamond
              color={currentPage === 'about_me' ? 'white' : ''}
            />
          </Button>
        );
      })}
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
