import {
    FETCH_PEOPLE,
    SUCCESS,
    FAIL
} from '../constants'

export default (state = [], action) => 
{
    const { type, payload } = action

    switch (type) {
        case FETCH_PEOPLE + SUCCESS:
            return payload
        default:
            return state
    }
}