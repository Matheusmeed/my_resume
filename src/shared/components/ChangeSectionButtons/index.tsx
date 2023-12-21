import { Button, ButtonDiv } from './styles';
import { FaRegCircle } from 'react-icons/fa6';
import { FaSquare } from 'react-icons/fa6';

const ChangeSectionButtons = () => {
  return (
    <ButtonDiv>
      <Button>
        <FaSquare size={25} color={'blue'} />
      </Button>
      <Button>
        <FaRegCircle size={20} />
      </Button>
      <Button>
        <FaRegCircle size={20} />
      </Button>
      <Button>
        <FaRegCircle size={20} />
      </Button>
    </ButtonDiv>
  );
};

export default ChangeSectionButtons;
