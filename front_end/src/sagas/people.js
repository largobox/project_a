import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api'
import {
    FETCH_PEOPLE,
    SUCCESS,
    FAIL
} from '../constants'

function* fetchPeople(action) {
    try {
        const users = yield call(Api.fetchPeople, action)
        yield put({ type: FETCH_PEOPLE + SUCCESS, payload: users })
    } catch (e) {
        // yield put({ type: FETCH_PEOPLE + FAIL, message: e.message })
    }
}

export default takeLatest(FETCH_PEOPLE, fetchPeople)