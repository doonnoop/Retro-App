import {
  ADD_RETRO,
  DELETE_RETRO,
  VOTE_RETRO,
  EDIT_RETRO,
} from "../config/config";

const retroReducerDefaultState = {
  wentWell: [],
  toImprove: [],
  actionItems: [],
};

const retroListReducer = (listName) => (state = [], action) => {
  switch (action.type) {
    case `${ADD_RETRO}_${listName}`:
      return [...state, action.payload.retro];
    case `${DELETE_RETRO}_${listName}`:
      return state.filter(({ id }) => id !== action.payload.id);
    case `${VOTE_RETRO}_${listName}`:
      return state.map((retro) => {
        if (retro.id == action.payload.id) {
          const newRetro = Object.assign({}, retro);
          newRetro.votes = retro.votes + 1;
          return newRetro;
        }
        return retro;
      });
    case `${EDIT_RETRO}_${listName}`:
      return state.map((retro) => {
        if (retro.id == action.payload.id) {
          const newRetro = Object.assign({}, retro);
          newRetro.content = action.payload.content;
          return newRetro;
        }
        return retro;
      });
    default:
      return state;
  }
};
// const retroReducer = (state = retroReducerDefaultState, action) => {
//   switch (action.type) {
//     case ADD_RETRO:
//       switch (action.payload.list) {
//         case "wentWell":
//           return Object.assign({}, state, {
//             wentWell: [...state["wentWell"], action.payload.retro],
//           });
//         case "toImprove":
//           return Object.assign({}, state, {
//             toImprove: [...state["toImprove"], action.payload.retro],
//           });
//         case "actionItems":
//           return Object.assign({}, state, {
//             actionItems: [...state["actionItems"], action.payload.retro],
//           });
//       }
//     case DELETE_RETRO:
//       switch (action.payload.list) {
//         case "wentWell":
//           return Object.assign({}, state, {
//             wentWell: state["wentWell"].filter(({ id }) => {
//               return id !== action.payload.id;
//             }),
//           });
//         case "toImprove":
//           return Object.assign({}, state, {
//             toImprove: state["toImprove"].filter(
//               ({ id }) => id !== action.payload.id
//             ),
//           });
//         case "actionItems":
//           return Object.assign({}, state, {
//             actionItems: state["actionItems"].filter(
//               ({ id }) => id !== action.payload.id
//             ),
//           });
//       }
//     case VOTE_RETRO:
//       switch (action.payload.list) {
//         case "wentWell":
//           const wentWell = state["wentWell"].map((retro) => {
//             if (retro.id == action.payload.id) {
//               const newRetro = Object.assign({}, retro);
//               newRetro.votes = retro.votes + 1;
//               return newRetro;
//             }
//             return retro;
//           });
//           return Object.assign({}, state, {
//             wentWell: wentWell,
//           });
//         case "toImprove":
//           const toImprove = state["toImprove"].map((retro) => {
//             if (retro.id == action.payload.id) {
//               const newRetro = Object.assign({}, retro);
//               newRetro.votes = retro.votes + 1;
//               return newRetro;
//             }
//             return retro;
//           });
//           return Object.assign({}, state, {
//             toImprove: toImprove,
//           });
//         case "actionItems":
//           const actionItems = state["actionItems"].map((retro) => {
//             if (retro.id == action.payload.id) {
//               const newRetro = Object.assign({}, retro);
//               newRetro.votes = retro.votes + 1;
//               return newRetro;
//             }
//             return retro;
//           });
//           return Object.assign({}, state, {
//             actionItems: actionItems,
//           });
//       }
//     default:
//       return state;
//   }
// };

export default retroListReducer;
