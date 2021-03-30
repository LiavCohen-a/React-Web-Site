/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link,Route,Switch} from 'react-router-dom';

import {useEffect,useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBarComp from '../Navbar';


function MemberPageComp(props) {
  const history = useHistory();

  const [member , setMember] = useState({})
  useEffect(async() =>{
    let result = localStorage.getItem('LogIn');
   
    if(result.includes(true) )
    {
    
    let id = props.match.params.id
    let resp = await axios.get("http://localhost:5000/api/members/" + id)
    setMember(resp.data)

    }
    else{
      history.push("/Movies")
    }
  },[])
 
  const EditMember = () => {
    history.push("/EditMember/" + props.match.params.id )
  }
  const DeleteMember =async () => {
    let id = props.match.params.id
    let resp = await axios.delete("http://localhost:5000/api/members/" + id)
    let resp2 = await axios.get("http://localhost:5000/api/subs")
    let result = resp2.fiter(x => x.memberID === id);
    result.forEach(async (x) => {
      let resp3 = await axios.delete("http://localhost:5000/api/subs/"+x._id)
    });
  
    history.push("/")
}
  return (
    <div >
         <NavBarComp />
    <h3>Member Info</h3>

    Name : {member.name} <br/>
    Email : {member.email} <br/>
    City : {member.City} <br/>

    <input type="button" value="Edit" onClick={() => EditMember()} /> &nbsp;&nbsp; <input type="button" value="Delete" onClick={() => DeleteMember()} />
    </div>
  );
}

export default MemberPageComp;
