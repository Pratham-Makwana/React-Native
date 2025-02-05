import {put, takeEvery} from 'redux-saga/effects';
import {UserList, setUserData} from './constant';

function* userList() {
  const url = 'https://dummyjson.com/User';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: setUserData, data});
}

function* SagaData() {
  yield takeEvery(UserList, userList);
}

export default SagaData;
