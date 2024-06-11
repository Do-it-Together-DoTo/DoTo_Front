import { ModalPortal } from '@/components/common/ModalPortal';

const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <ModalPortal>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-hidden text-center bg-black bg-opacity-30"
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
