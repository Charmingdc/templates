type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalWrapper = ({ children, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-background/10 backdrop-blur-sm z-20 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-[80%] flex items-center justify-center -mt-[5vh]"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
