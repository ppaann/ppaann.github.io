import React from "react";
import styles from "./NoteArea.module.css";

const NoteArea = (props) => {
  const textWithLineBreaks = props.content.replace(/\\n/g, "\n\n");
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.content}>{textWithLineBreaks}</div>
    </div>
  );
};

export default NoteArea;
