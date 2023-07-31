import React, { Children } from "react";
import { useState } from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary";
  discription: string;
  onClick: (counter: number) => void;
}

const Button = ({
  children,
  color = "primary",
  discription,
  onClick,
}: Props) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <button
        className={[styles.button, styles["btn-" + color]].join(" ")}
        onClick={() => {
          setCounter(counter + 1);
          onClick(counter);
        }}
      >
        {children}
      </button>
      <p>Discription: {discription}</p>
    </>
  );
};

export default Button;
