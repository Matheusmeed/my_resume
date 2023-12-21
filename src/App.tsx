import AboutMe from './sections/AboutMe';
import Profile from './sections/Profile';
import Test from './sections/TestSection';
import ChangeSectionButtons from './shared/components/ChangeSectionButtons';
import ScrollablePage from './shared/components/ScrollablePage';

const App = () => {
  return (
    <ScrollablePage>
      <Profile />
      <AboutMe />
      <Test />
      <ChangeSectionButtons />
    </ScrollablePage>
  );
};
export default App;
