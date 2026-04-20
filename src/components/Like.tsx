import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { RiHeartFill } from "react-icons/ri";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return <RiHeartFill color="yellowgreen" size="40px" onClick={toggle} />;
  return <GoHeart color="violet" size="30px" onClick={toggle} />;
};

export default Like;
