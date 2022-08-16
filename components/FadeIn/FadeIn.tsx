import { ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

type Props = {
  children: ReactNode;
};

const FadeIn = ({ children }: Props) => {
  const isLoaded = useLoaded();
  const springs = useSpring({
    opacity: isLoaded ? 1 : 0,
    config: {
      duration: 3000,
    },
  });

  return (
    <animated.div
      style={
        {
          WebkitMask: springs.opacity
            .to([0, 1], [150, 0])
            .to(val => `linear-gradient(90deg, #000 25%, rgba(0, 0, 0, 0)) ${val}% 0 / 400% no-repeat`),
        } as any
      }
    >
      {children}
    </animated.div>
  );
};

const useLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
};

export default FadeIn;
