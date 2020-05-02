import React from 'react';
import { connect } from 'react-redux';
import { deleteRetro, voteRetro } from '../actions/retro';
import voteImg from '../../public/images/vote.png';

export default class RetroListItem extends React.Component {
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
      <div className='retro-item'>
        <div className='retro-item__title'>{this.props.retro.content}</div>
        <span className='retro-item__catalog'>{this.props.retro.votes}</span>
        <div>
          <button onClick={this.handleVote} className='retro-item__vote'>
            <img src={voteImg} />
          </button>
          <button onClick={this.handleDelete}>MoveToList</button>
          <button className='retro-item__delete' onClick={this.handleDelete}>
            x
          </button>
        </div>
      </div>
    );
  }
}
