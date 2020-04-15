import React from 'react'
import '.././CreateCourse.css';

class CreateCourse extends React.Component {

    state = {
        name: "",
        difficulty: "",
        img_url: "",
        description: "",
        id: "",
        instructor_email: "",
        message: "",
        textStyle: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async (e) => {
       e.preventDefault();
       const validateEmail = (instructor_email) => {
         let re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
         return re.test(instructor_email);
       }
       if (this.state.instructor_email === "" || !validateEmail(this.state.instructor_email)) {
         this.setState({message: "All fields are mandatory, and email must be valid", textStyle: "danger"});
       } else {
          if (validateEmail(this.state.instructor_email)) {
            this.setState({message:"Looks good!", textStyle: "success"})
          }
       }
       await fetch("http://localhost:4000/courses/", {
           method: 'post',
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify({
               name: this.state.name,
               difficulty: this.state.difficulty,
               img_url: this.state.img_url,
               description: this.state.description,
               instructor_email: this.state.instructor_email
           })
       }).then(rsp => rsp.json())
         .then(data => console.log(data))
         .catch(console.error()
         );
         this.setState({
           name: "",
           difficulty: "",
           img_url: "",
           description: "",
           id: "",
           instructor_email: "",
           message: "",
           textStyle: ""
         })
    }

    render() {
        return (
                <div>
                <form className="CreateCourse" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="name">course name</label>
                    <input placeholder="ie. React, Angular..." type="text" name="name"/>
                    <label htmlFor="difficulty">difficulty</label>
                    <input placeholder="ie. beginner intermediate, advanced..." type="text" name="dificulty"/>
                    <label htmlFor="img_url">image</label>
                    <input placeholder="www.image_src.com" type="text" name="img_url"/>
                    <label htmlFor="description">description</label>
                    <input placeholder="brief bio of the course you want to add" type="text" name="description"/>
                    <label htmlFor="instructor_email">instructor email</label>
                    <input placeholder="instructor email" type="text" name="instructor_email"/>
                    {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}
                    <button>Submit</button>
                </form>
                </div>
        )
    }
}

export default CreateCourse
