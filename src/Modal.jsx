import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const isBrowser = typeof document !== "undefined";
  const elRef = useRef(isBrowser ? document.createElement("div") : null);

  useEffect(() => {
    if (!elRef.current) return;

    // Prefer an explicit modal root, fall back to document.body
    const modalRoot = (isBrowser && document.getElementById("modal")) || (isBrowser && document.body);
    if (!modalRoot) return;

    modalRoot.appendChild(elRef.current);

    return () => {
      if (modalRoot.contains(elRef.current)) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  if (!elRef.current) return null;

  return createPortal(children, elRef.current);
};

export default Modal;