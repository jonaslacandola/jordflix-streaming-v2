import { cloneElement, createContext, ReactElement, useState } from "react";

type Modal = {
  window: string;
  open: Function;
  close: Function;
};

const ModalContext = createContext<Modal | null>(null);

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

function Window({ children }: Readonly<{ children: React.ReactNode }>) {}

function Open({ children }: Readonly<{ children: ReactElement }>) {
  return cloneElement(children, {});
}

Modal.Window = Window;
Modal.Open = Open;
