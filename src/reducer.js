import { FETCH_COURSES, FETCH_COURSE, FETCH_USER } from './Actions'

const defaultState = {
    courses: [],
    course: {},
    user: {}
}

const reducer = (prevState = defaultState, action) => {
    switch(action.type) {
        case FETCH_COURSES:          
            return {...prevState, courses: action.payload};
        case FETCH_COURSE:
            return {...prevState, course: action.payload};
        case FETCH_USER:
            return {...prevState, user: action.payload};
        default:
            return prevState;
    }
}

export default reducer;