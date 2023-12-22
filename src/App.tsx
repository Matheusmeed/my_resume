import { useRef, useState } from 'react';
import { AboutMe, Profile, Test } from './sections';
import ChangeSectionButtons from './shared/components/ChangeSectionButtons';

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

  const handleSectionChange = (name: string) => {
    const updatedSections = sections.map((section) => ({
      ...section,
      isSelected: section.name === name,
    }));
    setSections(updatedSections);
  };

  return (
    <div>
      {sections.map((section) => (
        <div ref={section.ref} key={section.name}>
          {section.component()}
        </div>
      ))}
      <ChangeSectionButtons
        sections={sections}
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};
export default App;
