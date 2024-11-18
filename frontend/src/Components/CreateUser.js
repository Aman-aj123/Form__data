import React, { useState } from 'react'

const CreateUser = () => {

  const [creditionals, setCreditionals] = useState({ name: "", email: "", password: "" , number: ""});
  const {name, email, password, number} = creditionals


  const handleChange = (e) => {
    setCreditionals({ ...creditionals, [e.target.name]: e.target.value });
};



const handleSubmit = async (e) => {
e.preventDefault();
const URL = process.env.REACT_APP_API_URL
console.log("URL is ", URL)


const options = {
  "method": "POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body: JSON.stringify({ name, email, password, number }) 

}

try{
  const response = await fetch(URL, options)
  const data = await response.json()
  console.log(data)
} catch(err){
  console.log(`Some error occurs with: ${err}`)
}

}





  return (
    <form  onSubmit={handleSubmit} method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label for="name"><b>Username</b></label>
    <input onChange={handleChange} value={name} type="text" placeholder="Enter Username" name="name" required/>

    <label for="number"><b>Number</b></label>
    <input onChange={handleChange} value={number} type="number" placeholder="Enter Number" name="number" required/>
        
    <label for="gmail"><b>email</b></label>
    <input onChange={handleChange} value={email} type="email" placeholder="Enter gmail" name="email" required/>

	<label for="password"><b>Password</b></label>
    <input onChange={handleChange} value={password} type="password" placeholder="Enter Password" name="password" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember  me
    </label>
  </div>

  <div class="container" style={{backgroundColor: '#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
  )
}

export default CreateUser