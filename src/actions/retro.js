import { v4 as uuidv4 } from "uuid";
const ADD_RETRO = "ADD_RETRO";
const DELETE_RETRO = "DELETE_RETRO";
const VOTE_RETRO = "VOTE_RETRO";

export const addRetro = ({
  list = "",
  content = "",
  author = "",
  votes = 0,
}) => ({
  type: ADD_RETRO,
  retro: {
    id: uuidv4(),
    content,
    author,
    votes,
  },
  list,
});

export const deleteRetro = ({ id, list } = {}) => ({
  type: DELETE_RETRO,
  id,
  list,
});

export const voteRetro = ({ id, list } = {}) => ({
  type: VOTE_RETRO,
  id,
  list,
});
