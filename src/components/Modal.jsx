import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-4 text-right text-gray-700 hover:text-black"
          onClick={onClose}
        >
          Fechar ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
