import React from 'react'
import CourseItem from './CourseItem';

class Users extends React.Component {

    state = {
        courses: []
    }

    async componentDidMount() {
        await fetch("courses.json")
            .then(rsp => rsp.json())
            .then(data => {
                this.setState({
                    courses: data
                })
            })
    }

    render() {
        console.log(this.state.courses)
        return (
            <div>
                {this.state.courses.map(course => (
                    <CourseItem course={course}/>
                ))}
            </div>
        )
    }
}

export default Users
