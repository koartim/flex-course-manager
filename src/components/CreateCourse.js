import React from 'react'
import '.././CreateCourse.css';

class CreateCourse extends React.Component {

    state = {
        name: "",
        difficulty: "",
        img_url: "",
        description: ""
    }

    render() {
        return (
                <div>
                <form className="CreateCourse">
                    <label htmlFor="name">course name</label>
                    <input placeholder="ie. React, Angular..." type="text" name="name"/>
                    <label htmlFor="difficulty">difficulty</label>
                    <input placeholder="ie. beginner intermediate, advanced..." type="text" name="dificulty"/>
                    <label htmlFor="img_url">image</label>
                    <input placeholder="www.image_src.com" type="text" name="img_url"/>
                    <label htmlFor="description">description</label>
                    <input placeholder="brief bio of the course you want to add" type="text" name="description"/>
                </form>
                </div>
        )
    }
}

export default CreateCourse
