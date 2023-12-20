import AboutMe from './sections/AboutMe';
import Profile from './sections/Profile';
import Test from './sections/TestSection';
import ScrollablePage from './shared/components/ScrollablePage';

const App = () => {
  return (
    <ScrollablePage>
      <Profile />
      <AboutMe />
      <Test />
    </ScrollablePage>
  );
};
export default App;
