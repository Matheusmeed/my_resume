import { useEffect, useRef, useState } from 'react';
import { AboutMe, Profile, Test } from './sections';
import ChangeSectionButtons from './shared/components/ChangeSectionButtons';
import { SectionsWrapper } from './styles';

const App = () => {
  const [sections, setSections] = useState([
    {
      name: 'profile',
      component: Profile,
      isSelected: true,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: 'about_me',
      component: AboutMe,
      isSelected: false,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: 'test',
      component: Test,
      isSelected: false,
      ref: useRef<HTMLDivElement>(null),
    },
  ]);

  const handleSectionChange = (
    name: string,
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    const updatedSections = sections.map((section) => ({
      ...section,
      isSelected: section.name === name,
    }));
    setSections(updatedSections);
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      const currentIndex = sections.findIndex((section) => section.isSelected);

      if (currentIndex > 0) {
        const previousSection = sections[currentIndex - 1];
        handleSectionChange(previousSection.name, previousSection.ref);
      }
    } else {
      const currentIndex = sections.findIndex((section) => section.isSelected);

      if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        handleSectionChange(nextSection.name, nextSection.ref);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <SectionsWrapper>
      {sections.map((section) => (
        <div ref={section.ref} key={section.name}>
          {section.component()}
        </div>
      ))}
      <ChangeSectionButtons
        sections={sections}
        handleSectionChange={handleSectionChange}
      />
    </SectionsWrapper>
  );
};
export default App;
