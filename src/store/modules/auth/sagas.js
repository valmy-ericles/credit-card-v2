import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { Types, Actions } from './actions';

export function* login({ payload }) {
  const { email, password } = payload
  
  yield delay(2000)

  try {
    //const result = yield call(api.post, 'api/projeto/login', { email, password });

    const token = 'xxx'

    yield put(Actions.loginSuccess(token))   
  } catch(err) {
    yield put(Actions.loginFailed(err))
  }
}

export function* signup({ payload }) {
  const { name, email, cpf, phone, password } = payload
  
  yield delay(2000)

  try {
    //const result = yield call(api.post, 'api/projeto/signup', { name, email, cpf, phone, password });

    const token = 'xxx'

    yield put(Actions.signUpSuccess(token))   
  } catch(err) {
    yield put(Actions.signUpFailed(err))
  }
}

export function* logout() {

  yield delay(2000)

  try {
    //yield call(api.delete, 'api/projeto/logout')

    yield put(Actions.logoutSuccess())

  } catch(err) {
    yield put(Actions.logoutFailed(err))
  }
}

export function* deleteAccount() {

  yield delay(2000)

  try {
    //yield call(api.delete, 'api/projeto/logout')

    yield put(Actions.deleteAccountSuccess())

  } catch(err) {
    yield put(Actions.deleteAccountFailed(err))
  }
}

export default all([
  takeLatest(Types.LOGIN_REQUEST, login),
  takeLatest(Types.LOGOUT_REQUEST, logout),
  takeLatest(Types.DELETE_ACCOUNT_REQUEST, deleteAccount),
  takeLatest(Types.SIGNUP_REQUEST, signup),
])