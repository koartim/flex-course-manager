import React from 'react';
import { connect } from 'react-redux';

class CreateCourse extends React.Component{

  state = {
    name: "",
    difficulty: "",
    img_url: "",
    description: ""
  }

    handleSubmit = (e) => {
      let course = {
        name: this.state.name,
        difficulty: this.state.difficulty,
        img_url: this.state.img_url,
        description: this.state.description
      }
      e.preventDefault();
      fetch("http://localhost:3001/api/v1/courses", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(course)
      })
      .then(rsp => rsp.json())
      .then(data => console.log(data))
   }

   handleChange = (e) => {
     this.setState({
      [e.target.name]: e.target.value
     })
   }
 render() {
   console.log(this.props.currentUser);
   return (
     <div className="CreateCourse">
     <div className="box">
       <h1>Add Course</h1>&nbsp;
       <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
           <label htmlFor="name">course name</label>

           <input placeholder="ie. React, Angular..." type="text" name="name"/>
           <label htmlFor="difficulty">difficulty</label>

           <input placeholder="ie. beginner intermediate, advanced..." type="text" name="difficulty"/>
           <label htmlFor="img_url">image</label>

           <input placeholder="www.image_src.com" type="text" name="img_url"/>
           <label htmlFor="description">description</label>

           <input placeholder="brief bio of the course you want to add" type="text" name="description"/>

           <button>Submit</button>
       </form>
       </div>
       </div>
       )
     }
 }

 const msp = (state) => {
   return {
     currentUser: state.currentUser
   }
 }

export default connect(msp) (CreateCourse)





// const validateEmail = (instructor_email) => {
//   let re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
//   return re.test(instructor_email);
// }
// if (input.instructor_email === "" || !validateEmail(input.instructor_email)) {
//   this.setState({message: "All fields are mandatory, and email must be valid", textStyle: "danger"});
// } else {
//    if (validateEmail(this.state.instructor_email)) {
//      this.setState({message:"Looks good!", textStyle: "success"})
//    }
// }
