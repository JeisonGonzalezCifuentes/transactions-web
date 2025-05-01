import React from 'react';
import { motion } from 'framer-motion'; // Importa motion para la animación
import Button from '../ui/Button';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'radial-gradient(circle at center, #4d9c7b 0,2%, #000000 100%)',
      }}
    >
      <motion.div
        className="bg-[#292b2a] p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] flex flex-col"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-#03ff94 text-2xl font-semibold">Detalle de cuenta</h2>
          <button
            onClick={onClose}
            className="text-#03ff94 font-bold text-3xl transition-transform transform hover:rotate-45 hover:text-[#ffffff] focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Scrollable content */}
        <div className="text-white overflow-y-auto pr-2 mb-4 flex-1">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-4">
          <Button onClick={onClose}>Volver</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
