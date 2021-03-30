/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBarComp from "../Navbar";

function AddMemberComp(props) {
  const history = useHistory();
  
  const Save =async (e) => {
    e.preventDefault()
    let obj = {
      name: memberName,
      email: memberEmail,
      City: memberCity,
    };
    let resp = await axios.post("http://localhost:5000/api/members",obj);
    alert(resp.data)
    history.push("/Subs/members");
    
  };
  const Cancel = () => {
    history.push("/Subs/members");
  };

  const [memberid, setId] = useState(0);
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberCity, setMemberCity] = useState("");
  const allMembers = () => {
    history.push('/Subs/Members')
  }
  useEffect(()=>{
    let result = localStorage.getItem('LogIn');
   
    if(result.includes(false) )
    {
      history.push("/Movies")
    }
  })

  return (
    <div>
         <NavBarComp/>
      <h1>Add Member Page <input type="button" value="All Members" onClick={() => allMembers()}/></h1>

      <form onSubmit={(e) => Save(e)}>
        Name :
        <input
          type="text"
          onChange={(e) => setMemberName(e.target.value)}
        />
        <br />
        Email :
        <input
          type="text"
          onChange={(e) => setMemberEmail(e.target.value)}
        /> 
        <br />
        City :
        <input
          type="text"
          onChange={(e) => setMemberCity(e.target.value)}
        />
        <br />
       
        <input type="submit" value="Save" /> &nbsp;&nbsp; <input type="button" value="Cancel" onClick={() => Cancel()} />
      </form>
    </div>
  );
}

export default AddMemberComp;
