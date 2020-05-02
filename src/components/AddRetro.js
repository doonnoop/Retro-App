import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addRetro } from "../actions/retro";

class AddRetro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption = (e) => {
    e.preventDefault();
    const content = e.target.elements.retro.value.trim();
    if (!content) {
      this.setState({ error: "Enter valid value to add item" });
    } else {
      this.props.addRetro({ content, list: this.props.list });
      this.setState({ error: undefined });
      e.target.elements.retro.value = "";
      this.props.handleCloseModal();
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.openModalFlag}
        onRequestClose={this.props.handleCloseModal}
        ariaHideApp={false}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        <div>
          {this.state.error && (
            <p className="add-retro-error">{this.state.error}</p>
          )}
          <form className="add-retro" onSubmit={this.handleAddOption}>
            <input className="add-retro__input" type="text" name="retro" />
            <button className="button">Add Option</button>
          </form>
        </div>
        <button className="button" onClick={this.props.handleCloseModal}>
          Okay
        </button>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRetro: (data) => dispatch(addRetro(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddRetro);
