import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  hasCloseBtn?: boolean;
  children: React.ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  hasCloseBtn = true,
  children,
}: ModalProps) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    // Grabbing a reference to the modal in question
    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Open modal when `isOpen` changes to true
    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-linear-to-b from-[hsla(226,51%,8%,0.95)] to-[hsla(180,33%,1%,0.95)] border border-white/10 rounded-lg p-6 md:p-8 shadow-2xl max-w-2xl w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {hasCloseBtn && (
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded hover:bg-white/5"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>
      )}
      <div className="mt-2">{children}</div>
    </dialog>
  );
};
