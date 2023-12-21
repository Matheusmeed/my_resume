import { useState } from 'react';
import { AboutMe, Profile, Test } from './sections';
import ChangeSectionButtons from './shared/components/ChangeSectionButtons';

const App = () => {
  const [sections, setSections] = useState([
    { name: 'profile', component: Profile, isSelected: true },
    { name: 'about_me', component: AboutMe, isSelected: false },
    { name: 'test', component: Test, isSelected: false },
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
      {sections.map((section) => {
        return <section.component key={section.name} />;
      })}
      <ChangeSectionButtons
        sections={sections}
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};
export default App;
