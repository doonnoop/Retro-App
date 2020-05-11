import {
  ADD_RETRO,
  DELETE_RETRO,
  VOTE_RETRO,
  EDIT_RETRO,
  SET_EXPENSES,
  listNameMapping,
} from "../config/config";
import database from "../firebase/firebase";

// ADD_RETRO
export const addRetro = (retro) => ({
  type: `${ADD_RETRO}_${listNameMapping[retro.list]}`,
  payload: {
    retro,
  },
});

export const startAddRetro = (retroData = {}) => {
  return (dispatch) => {
    const { list = "", content = "", author = "", votes = 0 } = retroData;
    const retro = { list, content, author, votes };
    return database
      .ref("retros")
      .push(retro)
      .then((ref) => {
        dispatch(
          addRetro({
            id: ref.key,
            ...retro,
          })
        );
      });
  };
};

// DELETE_RETRO
export const deleteRetro = ({ id, list } = {}) => ({
  type: `${DELETE_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
  },
});

export const startDeleteRetro = ({ id, list } = {}) => {
  return (dispatch) => {
    return database
      .ref(`retros/${id}`)
      .remove()
      .then(() => {
        dispatch(
          deleteRetro({
            id,
            list,
          })
        );
      });
  };
};

// VOTE_RETRO
export const voteRetro = ({ id, list, update } = {}) => ({
  type: `${VOTE_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
    update,
  },
});

// EDIT_RETRO
export const editRetro = ({ id, list, update } = {}) => ({
  type: `${EDIT_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
    update,
  },
});

export const startEditRetro = ({ id, list, content } = {}) => {
  return (dispatch) => {
    const update = { content };
    return database
      .ref(`retros/${id}`)
      .update(update)
      .then(() => {
        dispatch(editRetro({ id, list, update }));
      });
  };
};

export const startVoteRetro = ({ id, list, votes } = {}) => {
  return (dispatch) => {
    const update = { votes };
    return database
      .ref(`retros/${id}`)
      .update(update)
      .then(() => {
        dispatch(editRetro({ id, list, update }));
      });
  };
};

// SET_EXPENSES
export const setRetros = (retros, list) => ({
  type: `${SET_EXPENSES}_${listNameMapping[list]}`,
  payload: {
    retros,
  },
});

export const startSetRetros = (list) => {
  return (dispatch) => {
    return database
      .ref("retros")
      .once("value")
      .then((snapshot) => {
        const wentWell = [];
        const toImprove = [];
        const actionItems = [];
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val().list == "Went Well") {
            wentWell.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          } else if (childSnapshot.val().list == "To Improve") {
            toImprove.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          } else if (childSnapshot.val().list == "Action Items") {
            actionItems.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          }
        });
        dispatch(setRetros(wentWell, "Went Well"));
        dispatch(setRetros(toImprove, "To Improve"));
        dispatch(setRetros(actionItems, "Action Items"));
      });
  };
};
