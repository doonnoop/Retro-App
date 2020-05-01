import React from "react";
import { connect } from "react-redux";
import { deleteRetro, voteRetro } from "../actions/retro";

class RetroListItem extends React.Component {
  handleDelete = () => {
    this.props.deleteRetro({
      id: this.props.retro.id,
      list: this.props.list,
    });
  };

  handleVote = () => {
    this.props.voteRetro({
      id: this.props.retro.id,
      list: this.props.list,
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.retro.content}</p>
        <p>votes: {this.props.retro.votes}</p>
        <div>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleVote}>Vote</button>
          <button onClick={this.handleDelete}>MoveToList</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRetro: (data) => {
      dispatch(deleteRetro(data));
    },
    voteRetro: (data) => {
      dispatch(voteRetro(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(RetroListItem);
