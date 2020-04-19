import { FETCH_COURSES } from './Actions'

const defaultState = {
    courses: []
}

const reducer = (prevState = defaultState, action) => {
    switch(action.type) {
        case FETCH_COURSES:          
            return {...prevState, courses: action.payload};
        default:
            return prevState;
    }
}

export default reducer;