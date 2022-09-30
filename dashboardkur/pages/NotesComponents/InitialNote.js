import { React } from "react";
import styles from "../../styles/Home.module.css";
import { connect } from "react-redux";
import { changeStatusForm } from "../../redux/actions/main";

function InitialNote(props) {
  const { changeStatusForm } = props;
  return (
    <div style={{ position: "absolute", left: "40px", top: "100px" }}>
      <button
        type="button"
        className={styles.initialcard}
        onClick={() => {
          changeStatusForm(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98%"
          height="98%"
          stroke-width="2"
          stroke="#000"
        >
          <line x1="0" y1="0" x2="100%" y2="100%" />
          <line x1="100%" y1="0" x2="0" y2="100%" />
        </svg>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    statusForm: state.main.formVisible,
  };
};

const mapDispatchToProps = {
  changeStatusForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialNote);
