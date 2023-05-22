import { useState, useCallback } from "react";

const useHandleOpen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { isOpen, handleOpen };
};

export default useHandleOpen;
