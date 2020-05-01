const ADD_RETRO = "ADD_RETRO";
const DELETE_RETRO = "DELETE_RETRO";
const VOTE_RETRO = "VOTE_RETRO";

const retroReducerDefaultState = {
  wentWell: [],
  toImprove: [],
  actionItems: [],
};
const retroReducer = (state = retroReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_RETRO:
      switch (action.list) {
        case "wentWell":
          return Object.assign({}, state, {
            wentWell: [...state["wentWell"], action.retro],
          });
        case "toImprove":
          return Object.assign({}, state, {
            toImprove: [...state["toImprove"], action.retro],
          });
        case "actionItems":
          return Object.assign({}, state, {
            actionItems: [...state["actionItems"], action.retro],
          });
      }
    case DELETE_RETRO:
      switch (action.list) {
        case "wentWell":
          return Object.assign({}, state, {
            wentWell: state["wentWell"].filter(({ id }) => {
              return id !== action.id;
            }),
          });
        case "toImprove":
          return Object.assign({}, state, {
            toImprove: state["toImprove"].filter(({ id }) => id !== action.id),
          });
        case "actionItems":
          return Object.assign({}, state, {
            actionItems: state["actionItems"].filter(
              ({ id }) => id !== action.id
            ),
          });
      }
    case VOTE_RETRO:
      switch (action.list) {
        case "wentWell":
          const wentWell = state["wentWell"].map((retro) => {
            if (retro.id == action.id) {
              const newRetro = Object.assign({}, retro);
              newRetro.votes = retro.votes + 1;
              return newRetro;
            }
            return retro;
          });
          return Object.assign({}, state, {
            wentWell: wentWell,
          });
        case "toImprove":
          const toImprove = state["toImprove"].map((retro) => {
            if (retro.id == action.id) {
              const newRetro = Object.assign({}, retro);
              newRetro.votes = retro.votes + 1;
              return newRetro;
            }
            return retro;
          });
          return Object.assign({}, state, {
            toImprove: toImprove,
          });
        case "actionItems":
          const actionItems = state["actionItems"].map((retro) => {
            if (retro.id == action.id) {
              const newRetro = Object.assign({}, retro);
              newRetro.votes = retro.votes + 1;
              return newRetro;
            }
            return retro;
          });
          return Object.assign({}, state, {
            actionItems: actionItems,
          });
      }
    default:
      return state;
  }
};

export default retroReducer;
