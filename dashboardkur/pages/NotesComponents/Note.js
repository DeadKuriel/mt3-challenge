import React from "react";
import styles from "../../styles/Home.module.css";
import Dragabble from "react-draggable";

function Note({ priority, text, numberOfNewNote }) {
  return (
    <Dragabble>
      <div style={{ position: "absolute", left: "220px", top: "100px" }}>
        <div className={styles.note}>
          <div style={{ display: "flex", flex:1 }}>
            <div style={{ flex: 4 }}>Prioridad : {priority}</div>
            <div style={{ flex: 1 }}>#{numberOfNewNote}</div>
          </div>
          <div>
            <div style={{ marginTop: 15 }}>{text}</div>
          </div>
        </div>
      </div>
    </Dragabble>
  );
}

export default Note;
