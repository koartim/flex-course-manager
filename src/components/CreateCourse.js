import React, { useReducer } from 'react';
import "../CreateCourse.css";

const CreateCourse = () => {

    const [input, setInput] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        name: "",
        difficulty: "",
        img_url: "",
        description: "",
        instructor_email: ""
      }
    );

    const handleChange = e => {
      const name = e.target.name;
      const newValue = e.target.value;
      
      setInput({[name]: newValue})
    }

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      await fetch("http://localhost:4000/courses/", {
          method: 'post',
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              name: input.name,
              difficulty: input.difficulty,
              img_url: input.img_url,
              description: input.description,
              instructor_email: input.instructor_email
          })
      }).then(rsp => rsp.json())
        .then(data => console.log(data))
        .catch(console.error())   
   }

  return (
    <div className="CreateCourse">
    <div className="box">
      <h1>Add Course</h1>&nbsp;
      <form onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="name">course name</label>
          
          <input placeholder="ie. React, Angular..." type="text" value={input.name} name="name"/>
          <label htmlFor="difficulty">difficulty</label>
  
          <input placeholder="ie. beginner intermediate, advanced..." type="text" value={input.difficulty} name="difficulty"/>
          <label htmlFor="img_url">image</label>

          <input placeholder="www.image_src.com" type="text" value={input.img_url} name="img_url"/>
          <label htmlFor="description">description</label>
   
          <input placeholder="brief bio of the course you want to add" type="text" value={input.description} name="description"/>
          <label htmlFor="instructor_email">instructor email</label>
        
          <input placeholder="instructor email" type="text" value={input.instructor_email} name="instructor_email"/>

          <button>Submit</button>
      </form>
      </div>
      </div>
      )
    }

export default CreateCourse





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















