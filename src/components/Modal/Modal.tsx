import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalText: string;
}
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const Modal: React.FC<Props> = ({ showModal, setShowModal, modalText }) => {
  return (
    <>
      {showModal && (
        <motion.div className={styles.modal} variants={backdrop} initial="hidden" animate="visible">
          <div
            className={styles.content}
            onClick={() => {
              console.log("joeojeoe");
              setShowModal(false);
            }}
          >
            <p>{modalText}</p>
            <button
              onClick={() => {
                console.log("joeojeoe");
                setShowModal(false);
              }}
            >
              Okay
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default Modal;
