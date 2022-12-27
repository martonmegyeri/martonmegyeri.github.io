import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  id: string;
  children: ReactNode;
};

export default function Portal({ id, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById(id) as Element) : null;
}
