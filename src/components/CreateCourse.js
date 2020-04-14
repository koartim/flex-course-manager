import React from 'react'
import '.././CreateCourse.css';

class CreateCourse extends React.Component {

    state = {
        name: "",
        difficulty: "",
        img_url: "",
        description: "",
        id: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
       await fetch("http://localhost:4000/courses/", {
           method: 'post',
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify({
               name: this.state.name,
               difficulty: this.state.difficulty,
               img_url: this.state.img_url,
               description: this.state.img_url
           })
       }).then(rsp => rsp.json())
         .then(data => console.log(data))
         .catch(console.error()
         );
    }

    render() {
        return (
                <div>
                <form className="CreateCourse" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="id">id</label>
                    <input placeholder="ie. 1,2,3" type="text" name="id"/>
                    <label htmlFor="name">course name</label>
                    <input placeholder="ie. React, Angular..." type="text" name="name"/>
                    <label htmlFor="difficulty">difficulty</label>
                    <input placeholder="ie. beginner intermediate, advanced..." type="text" name="dificulty"/>
                    <label htmlFor="img_url">image</label>
                    <input placeholder="www.image_src.com" type="text" name="img_url"/>
                    <label htmlFor="description">description</label>
                    <input placeholder="brief bio of the course you want to add" type="text" name="description"/>
                    <button>Submit</button>
                </form>
                </div>
        )
    }
}

export default CreateCourse
