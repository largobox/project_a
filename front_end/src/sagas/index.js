import { all } from 'redux-saga/effects'

import peopleSagas from './people'

export default function* rootSaga() {
    yield all([
        peopleSagas
    ])
}