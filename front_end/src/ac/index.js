import {
    FETCH_PEOPLE
} from '../constants'

export function fetchPeople () {
    return {
        type: FETCH_PEOPLE,
        url: '/people'
    }
}