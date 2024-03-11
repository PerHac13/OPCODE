import React from "react";
import "./pill.css";
const Pill = ({ content, selected, onClick }) => {
  const cssClass = selected === content ? "selected-pill" : "pill-container";
  return (
    <>
      <div onClick={onClick} className={cssClass}>{content}</div>
    </>
  );
};

export default Pill;
