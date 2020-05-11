import React from "react";
import { connect } from "react-redux";
import RetroListItem from "./RetroListItem";
import AddRetro from "./AddRetro";
import { addRetro } from "../actions/retro";

class RetroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  openAddRetroModal = () => {
    this.setState({
      openModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    return (
      <div className="retro-list">
        <h3>{this.props.list}</h3>
        <div className="retro-list_con">
          <button className="add-button" onClick={this.openAddRetroModal}>
            +
          </button>
          {this.props.retros &&
            this.props.retros.map((retro) => {
              return (
                <RetroListItem
                  key={retro.id}
                  retro={retro}
                  list={this.props.list}
                />
              );
            })}
        </div>
        <AddRetro
          list={this.props.list}
          openModalFlag={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default RetroList;
