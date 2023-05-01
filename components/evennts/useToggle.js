import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };

  return [toggle, handleClick];
};

export default useToggle;