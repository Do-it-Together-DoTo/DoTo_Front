import { useCallback, useState } from 'react';
import Modal from '@/components/common/Modal';

const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen
      ? ({ children }: { children: React.ReactNode }) => <Modal onClose={useBlur ? close : () => {}}>{children}</Modal>
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
