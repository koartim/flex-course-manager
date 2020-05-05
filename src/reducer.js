import { FETCH_COURSES, FETCH_COURSE, FETCH_USER, SET_CURRENT_USER, LOG_OUT_USER, FETCH_SUBSCRIPTIONS, FETCH_SUBSCRIPTION } from './Actions'

const defaultState = {
    courses: [],
    course: {},
    currentUser: null,
    subscriptions: [],
    subscription: {}
}

const reducer = (prevState = defaultState, action) => {
    switch(action.type) {
        case FETCH_COURSES:
            return {...prevState, courses: action.payload};
        case FETCH_COURSE:
            return {...prevState, course: action.payload};
        case FETCH_USER:
            return {...prevState, user: action.payload};
        case SET_CURRENT_USER:
            return {...prevState, currentUser: action.payload};
        case LOG_OUT_USER:
            return {...prevState, currentUser: action.payload };
          case FETCH_SUBSCRIPTIONS:
            return {...prevState, subscriptions: action.payload };
          case FETCH_SUBSCRIPTION:
            return {...prevState, subscription: action.payload };
        default:
            return prevState;
    }
}

export default reducer;
