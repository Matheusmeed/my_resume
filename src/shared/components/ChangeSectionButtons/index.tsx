import { Button, ButtonDiv } from './styles';
// import { FaRegCircle } from 'react-icons/fa6';
// import { FaSquare } from 'react-icons/fa6';
import { SiReact } from 'react-icons/si';
import { SiPreact } from 'react-icons/si';

const ChangeSectionButtons = () => {
  return (
    <ButtonDiv>
      <Button isSelected={true}>
        <SiPreact size={30} color={'#087EA4'} />
      </Button>
      <Button isSelected={false}>
        <SiReact size={20} color={'#087EA4'} className={'reactIcon'} />
      </Button>
      <Button isSelected={false}>
        <SiReact size={20} color={'#087EA4'} className={'reactIcon'} />
      </Button>
      <Button isSelected={false}>
        <SiReact size={20} color={'#087EA4'} className={'reactIcon'} />
      </Button>
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
