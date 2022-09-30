import React from "react";
import styles from "../../styles/Home.module.css";
import Dragabble from "react-draggable";

function Note({ priority, text, numberOfNewNote }) {
  return (
    <Dragabble>
      <div style={{ position: "absolute", left: "220px", top: "100px" }}>
        <div className={styles.note}>
          <div>Prioridad : {priority}</div>
          <div>{text}</div>
        </div>
      </div>
    </Dragabble>
  );
}

export default Note;
