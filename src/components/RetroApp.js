import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import RetroList from "./RetroList";

class RetroApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="indecision">
          <Link to="/indecision" className="to-indecision">
            Indecision - What to do next?
          </Link>
        </div>
        <div className="retro">
          <div className="container">
            <RetroList list="Went Well" retros={this.props.wentWell} />
            <RetroList list="To Improve" retros={this.props.toImprove} />
            <RetroList list="Action Items" retros={this.props.actionItems} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wentWell: state.wentWell,
    toImprove: state.toImprove,
    actionItems: state.actionItems,
  };
};

export default connect(mapStateToProps)(RetroApp);
