export const FETCH_COURSE = "FETCH_COURSE"

export const fetchCourse = (text) => {
    return {type: FETCH_COURSE, text}
}