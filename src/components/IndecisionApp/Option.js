import React from "react";

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.textOption}
      </p>
      <button
        className="button button--link"
        onClick={() => {
          props.handleDeleteOption(props.textOption);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
