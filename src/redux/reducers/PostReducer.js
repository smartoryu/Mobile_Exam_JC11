import {HOME_REFRESHING, GET_POST_LIST} from '../../helpers/types';

const INITIAL_STATE = {
  Refresh: false,
  PostList: [],
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case HOME_REFRESHING:
      return {...state, Refresh: true};
    case GET_POST_LIST:
      return {...state, PostList: payload, Refresh: false};
    default:
      return state;
  }
};
