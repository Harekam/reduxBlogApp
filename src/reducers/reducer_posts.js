/**
 * Created by harekamsingh on 6/22/16.
 */
'use strict';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';
const INITIAL_STATE = {all: [], post: null};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case DELETE_POST:
            return {...state, post: action.payload.data};
        case FETCH_POST:
            return {...state, post: action.payload.data};
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}  