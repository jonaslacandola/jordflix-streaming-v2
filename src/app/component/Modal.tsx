"use client";
import {
  cloneElement,
  createContext,
  ReactElement,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Modal = {
  window: string;
  open: Function | any;
  close: Function | any;
};

const ModalContext = createContext<Modal>({
  window: "",
  open: null,
  close: null,
});

export default function Modal({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [window, setWindow] = useState<string>("");

  const open = (name: string) => setWindow(name);
  const close = () => setWindow("");

  return (
    <ModalContext.Provider value={{ window, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function Window({
  children,
  name,
}: Readonly<{ children: ReactElement; name: string }>) {
  const { window, close } = useContext(ModalContext);
  const windowRef = useRef<RefObject<HTMLDivElement>>();

  if (name === window)
    return createPortal(
      <div className="absolute h-screen w-full backdrop-blur-[2px] z-[1000]">
        {cloneElement(children, { ref: windowRef, onClose: close })}
      </div>,
      document.body
    );
}

export function Open({
  children,
  window,
}: Readonly<{ children: ReactElement; window: string }>) {
  const { open } = useContext(ModalContext);

  function handleOpen() {
    open(window);
  }

  return cloneElement(children, { onClick: handleOpen });
}
