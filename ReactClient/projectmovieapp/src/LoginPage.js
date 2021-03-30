/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

function LoginPageComp() {
  const history = useHistory();

  const Login = async () => {
    let resp = await axios.get("http://localhost:5000/api/users");
    let index = resp.data.findIndex(
      (x) => x.userName === userName && x.password === password
    );
  
    if (index >= 0) {
      localStorage.setItem("LogIn" , true);
      localStorage.setItem("name", resp.data[index].fullName);
      history.push("/Movies");
    } else {
      localStorage.setItem("LogIn", false);
      setAlert("One Or More Filds Are Wrong");
    }
  };
  useEffect(()=>{
    localStorage.setItem("LogIn" , false);
    localStorage.setItem("name", "");
  },[])

  const [userName, setName] = useState("");
  const [password, setPass] = useState("");
  const [alertFor, setAlert] = useState("");
  return (
    <div>
   
      <h3>Log in Page</h3>
      User Name :{" "}
      <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      Password :{" "}
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <br />
      <input type="button" value="Login" onClick={() => Login()} /> <br />
      {alertFor}
    </div>
  );
}

export default LoginPageComp;
