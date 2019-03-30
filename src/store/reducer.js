import * as actionTypes from './actions';

const initialState = {
    posts:['a','b']
}

const reducer = (state = initialState, action) =>{
    
    switch(action.type){
        case actionTypes.GET_POSTS:
        return {
            ...state,
            posts: {
                ...state.posts
            }
        }
        case actionTypes.ADD_POST:
        return {

        }
        default:
        return state;
    }
}

export default reducer;