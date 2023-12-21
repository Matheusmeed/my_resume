import { useState } from 'react';
import { AboutMe, Profile, Test } from './sections';
import ChangeSectionButtons from './shared/components/ChangeSectionButtons';

const App = () => {
  const [sections, setSections] = useState([
    { component: Profile(), isSelected: false },
    { component: AboutMe(), isSelected: true },
    { component: Test(), isSelected: false },
  ]);
  console.log(setSections);

  return (
    <div>
      {sections.map((section) => {
        return section.component;
      })}
      <ChangeSectionButtons sections={sections} />
    </div>
  );
};
export default App;
