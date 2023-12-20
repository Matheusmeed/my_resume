import { ReactNode, useEffect, useRef, useState } from 'react';
import { ScrollablePageWrapper } from './styles';

interface IScrollablePage {
  children: ReactNode;
}

const ScrollablePage = ({ children }: IScrollablePage) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isScrolling && pageRef.current) {
        setScrolling(true);

        const direction = event.deltaY > 0 ? 1 : -1;
        const newPosition =
          pageRef.current.scrollTop + direction * window.innerHeight;

        pageRef.current.scrollTo({
          top: newPosition,
          behavior: 'smooth',
        });

        setTimeout(() => {
          setScrolling(false);
        }, 500);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  return (
    <ScrollablePageWrapper ref={pageRef}>{children}</ScrollablePageWrapper>
  );
};

export default ScrollablePage;
