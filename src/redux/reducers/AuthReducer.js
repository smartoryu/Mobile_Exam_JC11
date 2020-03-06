import {
  REG_START,
  REG_FAILED,
  REG_SUCCESS,
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../../helpers/types';

const INITIAL_STATE = {
  user: null,
  register: false,

  loadingReg: false,
  loadingLog: false,

  errorReg: '',
  errorLog: '',
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case REG_START:
      return {...state, loadingReg: true, errorReg: ''};
    case REG_FAILED:
      return {...state, loadingReg: false, errorReg: payload};
    case REG_SUCCESS:
      return {...INITIAL_STATE, register: true};

    case LOGIN_START:
      return {...state, loadingLog: true, errorLog: ''};
    case LOGIN_FAILED:
      return {...INITIAL_STATE, loadingLog: false, errorLog: payload};
    case LOGIN_SUCCESS:
      return {...INITIAL_STATE, login: true, user: payload};

    case USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
