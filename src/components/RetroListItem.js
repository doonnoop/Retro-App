import React from "react";
import { connect } from "react-redux";
import { deleteRetro, voteRetro, editRetro } from "../actions/retro";
import voteImg from "../../public/images/vote.png";

class RetroListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etitable: false,
      retroContent: props.retro.content,
    };
  }
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

  editRetro = () => {
    this.setState({
      etitable: true,
    });
  };

  handleRetroChange = (e) => {
    this.setState({
      retroContent: e.target.value,
    });
  };

  handleEdit = (e) => {
    if (e.keyCode === 13) {
      this.props.voteRetro({
        id: this.props.retro.id,
        list: this.props.list,
        content: this.state.retroContent,
      });
      this.setState({
        etitable: false,
      });
    }
  };

  render() {
    return (
      <div className="retro-item">
        {!this.state.etitable ? (
          <div className="retro-item__title" onClick={this.editRetro}>
            {this.state.retroContent}
          </div>
        ) : (
          <input
            value={this.state.retroContent}
            className="retro-item__title"
            onChange={this.handleRetroChange}
            autoFocus
            onKeyUp={this.handleEdit}
          />
        )}
        <span className="retro-item__catalog">{this.props.retro.votes}</span>
        <div>
          <button onClick={this.handleVote} className="retro-item__vote">
            <img src={voteImg} />
          </button>
          <button onClick={this.handleMove}>MoveToList</button>
          <button className="retro-item__delete" onClick={this.handleDelete}>
            x
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRetro: (data) => dispatch(deleteRetro(data)),
    voteRetro: (data) => dispatch(voteRetro(data)),
    editRetro: (data) => dispatch(editRetro(data)),
  };
};

export default connect(null, mapDispatchToProps)(RetroListItem);
