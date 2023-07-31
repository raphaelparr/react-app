import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return (
    <div onClick={handleClick}>
      {isClicked ? (
        <AiOutlineHeart className={styles.heart}></AiOutlineHeart>
      ) : (
        <AiFillHeart className={styles.heart}></AiFillHeart>
      )}
    </div>
  );
};

export default Like;
