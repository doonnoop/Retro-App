import React from "react";
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
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="retro" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRetro: (data) => dispatch(addRetro(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddRetro);
