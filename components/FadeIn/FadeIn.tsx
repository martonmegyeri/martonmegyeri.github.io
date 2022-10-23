import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const FadeIn = ({ children }: Props) => (
  <motion.div
    transition={{ duration: 3 }}
    initial={{
      opacity: 0,
      WebkitMask: 'linear-gradient(90deg, #000 25%, rgba(0, 0, 0, 0)) 150% 0 / 400% no-repeat',
    }}
    animate={{
      opacity: 1,
      WebkitMask: 'linear-gradient(90deg, #000 25%, rgba(0, 0, 0, 0)) 0% 0 / 400% no-repeat',
    }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
