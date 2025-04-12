import React from "react";

interface ModalProps{
    isOpen: boolean;
    onClose: ()=> void;
    children: React.ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps) => {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-zinc-900/50 z-50 flex items-center justify-center">
             <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                >
                    ×
                </button>
                {children}
                <div className="mt-4 text-right">
                    <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                    Cancel
                    </button>
                </div>
                </div>
        </div>
      );
}
 
export default Modal;