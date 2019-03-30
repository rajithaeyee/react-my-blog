import {takeEvery,put} from 'redux-saga/effects';
import * as actionTypes from './actions';
import axios from  'axios';

export function* getPosts(){
    yield takeEvery(actionTypes.GET_POSTS,function* (){
        const response = yield axios.get('http://localhost:3001/posts');
        yield put({type:actionTypes.GET_POSTS_ASYNC,value:response.data});
    });
}
