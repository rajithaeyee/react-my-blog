import * as actionTypes from './actions';

const initialState = {
    posts:[]
}

const reducer = (state = initialState, action) =>{
    
    switch(action.type){
        case actionTypes.GET_POSTS_ASYNC:
        return {
            ...state,
            posts: action.value
            
        }
        case actionTypes.ADD_POST:
        return {

        }
        default:
        return state;
    }
}

export default reducer;