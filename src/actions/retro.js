import { v4 as uuidv4 } from "uuid";
import {
  ADD_RETRO,
  DELETE_RETRO,
  VOTE_RETRO,
  EDIT_RETRO,
  listNameMapping,
} from "../config/config";

export const addRetro = ({
  list = "",
  content = "",
  author = "",
  votes = 0,
}) => ({
  type: `${ADD_RETRO}_${listNameMapping[list]}`,
  payload: {
    retro: {
      id: uuidv4(),
      content,
      author,
      votes,
    },
  },
});

export const deleteRetro = ({ id, list } = {}) => ({
  type: `${DELETE_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
  },
});

export const voteRetro = ({ id, list } = {}) => ({
  type: `${VOTE_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
  },
});

export const editRetro = ({ id, list, content } = {}) => ({
  type: `${EDIT_RETRO}_${listNameMapping[list]}`,
  payload: {
    id,
    content,
  },
});
