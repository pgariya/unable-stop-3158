import { useContext, useEffect, useState } from "react";
import  { Navigate} from "react-router-dom"
import axios from "axios"
import { AuthContext } from "./AuthContext";

let initialdata={email:"" ,password:""}


function Login() {

  let [data,setdata] = useState(initialdata)
  
  
  let value = useContext(AuthContext)
  let {settoken ,status,setstatus} = value;
console.log(value)

  
  let handleChange=(e) =>{

  let {name, value} = e.target

  setdata({...data,[name] : value})


}


let handleSubmit =(e) =>{

  e.preventDefault()

  axios.post( `https://reqres.in/api/login`,data) 
  .then( (res) => {   settoken(res.data.token)
     setstatus(!status)  }  ) 

}

console.log(status)



if(status===true){
  return  <Navigate to="/" /> 
  

}


  return (
    <div style={{ margin:"auto",marginTop:"50px" , width:"30%" , boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
      <form onSubmit={handleSubmit}  >

        <h1 style={{paddingTop:"30px"}}>Login Page </h1>
        <div style={{margin:"40px"}}>
          <label style={{fontSize:"20px"}}>
            Email :-
            <input  type="email" placeholder=" User Email" onChange={handleChange} name="email" style={{padding:"10px" ,borderRadius:"10px" ,width:"80%"}} />
          </label>
        </div>
        <div style={{margin:"40px"}}>
          <label style={{fontSize:"20px"}}>
            Password :-
            <input
           
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              style={{padding:"10px",borderRadius:"10px",borderRadius:"10px" , width:"80%" }}
            />
          </label>
        </div>
        <div>
          <input style={{margin:"20px",background:"blue",borderRadius:"10px",padding:"15px",color:"white",border:"none"}} type="submit" value="SUBMIT" />
        </div>
      </form>
      



    </div>
  );
}
export default Login;
