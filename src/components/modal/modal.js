import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border border-gray-300 shadow-lg rounded-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-gray-300">
            <h3 className="text-lg font-semibold">Enter new section name</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-lg leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-gray-500 h-6 w-6 text-lg block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
