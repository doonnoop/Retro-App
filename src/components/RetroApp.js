import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import RetroList from "./RetroList";

class RetroApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <RetroList list="wentWell" retros={this.props.wentWell} />
          <RetroList list="toImprove" retros={this.props.toImprove} />
          <RetroList list="actionItems" retros={this.props.actionItems} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wentWell: state.retros.wentWell,
    toImprove: state.retros.toImprove,
    actionItems: state.retros.actionItems,
  };
};

export default connect(mapStateToProps)(RetroApp);
