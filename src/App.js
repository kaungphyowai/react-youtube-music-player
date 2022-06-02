
import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    
  })

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name] : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    //get data(name) from 
    console.log(formData);
    
    //This is testing for loginInWithGoogle branch
    //get data(name) from
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="firstName">First Name</label><br />
      <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      onchange={handleChange}
      
      />
      <br />

      <label for="lastName">Last Name</label><br />
      <input
      type="text"
      id="lastName" 
      name="lastName"
      value={formData.lastName}
      onchange={handleChange}
      />
      <br />
      <br />
      {/*Google Buttton*/}
      <button>Login with Google</button>
      {/*Google Buttton*/}
    </form>
  )
}

export default App;
