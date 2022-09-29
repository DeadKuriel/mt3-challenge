import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";
import { setNewNote } from "../redux/actions/notesActions";
import Head from "next/head";

import { Note, InitialNote, NotesContainer } from "./NotesComponents";
import styles from "../styles/Home.module.css";
import Dragabble from "react-draggable";

function Home(props) {
  const { name, notesState, setInfo, setNewNote } = props;
  const [newName, setName] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notes, setNotes] = useState([
    { priority: 0, text: "", id: 0, status: "" },
  ]);
  const numberOfNotes = Object.keys(notesState).length;
  const lastNote = numberOfNotes - 1;
  const numberOfNewNote = lastNote + 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Kur´s Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <nav className="navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Kur´s Dashboard
          </a>
        </nav>
      </Head>

      <main className={styles.main}>
        <InitialNote />
        <div>{name}</div>
        <button
          onClick={() => {
            setInfo("PRUEBA");
          }}
        >
          button
        </button>
        <button
          onClick={() => {
            setNewNote({ priority: "2", text: "text", numberOfNewNote });
          }}
        >
          Note
        </button>

        {isFormVisible && (
          <div className={styles.floatingform}>
            <h1>New pending</h1>
            <form>
              <div class="form-group">
                <select
                  class="form-select"
                  arial-label="Defailt select example"
                >
                  <option selected>Priority</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Text</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  console.log("pressed");
                  setInfo("PRUEBA");
                }}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/DeadKuriel/mt3-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {"Kur"}
        </a>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.main.name,
    notesState: state.notesState,
  };
};

const mapDispatchToProps = {
  setInfo,
  setNewNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
