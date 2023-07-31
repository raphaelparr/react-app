import React from "react";
import { useState } from "react";

interface Props {
  count: any;
  children: string;
}

const ExpandableText = ({ count, children }: Props) => {
  const [textDisplayed, setTextDisplayed] = useState("");
  console.log(1, children);
  //bsetTextDisplayed(children);
  console.log(2, children);

  const a = children;
  return (
    <>
      <div style={{ maxWidth: 500 }}>{a}</div>
    </>
  );
};

export default ExpandableText;
