import RetroListItem from '../components/RetroListItem';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRetro: (data) => {
      dispatch(deleteRetro(data));
    },
    voteRetro: (data) => {
      dispatch(voteRetro(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(RetroListItem);
