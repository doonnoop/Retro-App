import React from "react";
import RetroListItem from "./RetroListItem";
import AddRetro from "./AddRetro";

export default class RetroList extends React.Component {
  render() {
    return (
      <div className="retro-list">
        {this.props.list}
        <AddRetro list={this.props.list} />
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
    );
  }
}
