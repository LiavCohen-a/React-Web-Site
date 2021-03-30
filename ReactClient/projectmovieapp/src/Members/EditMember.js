/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link,Route,Switch} from 'react-router-dom';

import {useEffect,useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBarComp from '../Navbar';



function EditMemberComp(props) {
  const history = useHistory();

  const [memberName , setMemberName] = useState("")
  const [memberEmail , setMemberEmail] = useState("")
  const [memberCity , setMemberCity] = useState("")
  useEffect(async() =>{
    let result = localStorage.getItem('LogIn');
   
    if(result.includes(true) )
    {
    let resp = await axios.get("http://localhost:5000/api/members")
    let data = resp.data.filter(x => x._id === props.match.params.id || x.name === props.match.params.id )
    let member = data[0]

    setMemberName(member.name)
    setMemberEmail(member.email)
    setMemberCity(member.City)
    }
    else{
      history.push("/Movies")
    }
  },[])
 
  const Save =async () => {
    let obj = {name : memberName , email : memberEmail , City : memberCity}
    let resp = await axios.put("http://localhost:5000/api/members/" + props.match.params.id,obj)
    alert(resp.data)
    history.push("/Member/" + props.match.params.id)
  }
  const Cancel = () => {
    history.push("/Subs/Members")
}
  return (
    <div >
         <NavBarComp />
    <h3>Member Info</h3>
    
    Name : <input type="text" value={memberName} onChange={e => setMemberName(e.target.value)} />  <br/>
    Email : <input type="text" value={memberEmail} onChange={e => setMemberEmail(e.target.value)} />  <br/>
    City : <input type="text" value={memberCity} onChange={e => setMemberCity(e.target.value)} />  <br/>

    <input type="button" value="Save" onClick={() => Save()} /> &nbsp;&nbsp; <input type="button" value="Cancel" onClick={() => Cancel()} />
    </div>
  );
}

export default EditMemberComp;
