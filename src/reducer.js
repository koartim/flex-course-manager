import {FETCH_COURSE} from './Actions';


const defaultState = {
    course: {}
}

const reducer = (prevState = defaultState , action) => {
    switch(action.type) {
        case FETCH_COURSE:
            return {...prevState, course: action.payload};
        default:
            return prevState;
    }
}


export default reducer;