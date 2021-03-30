/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link,Route,Switch} from 'react-router-dom';
import NavBarComp from '../Navbar';

import {useEffect,useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MemberComp from "./Member"

function MembersPageComp(props) {
  const history = useHistory();

  const [members , setMembers] = useState([])
  useEffect(async() =>{
    let result = localStorage.getItem('LogIn');
   
    if(result.includes(true) )
    {
    let resp = await axios.get("http://localhost:5000/api/members")
    setMembers(resp.data)
    }
    else{
      history.push("/Movies")
    }
  },[])
  const allMembers = () => {
    history.push('/Subs/Members')
  }
  const addMember = () => {
    history.push('/Add')
  }

  return (
    <div >
         <NavBarComp />
        <h3>Subs Main Page Info</h3>
      
     <input type="button" value="All Members" onClick={() => allMembers()}/> &nbsp;&nbsp; <input type="button" value="Add Member" onClick={() => addMember()}/>
    {
      members.map(x =>{ 
        return <div key={x._id}> <MemberComp member={x} /></div>
       })
    }
    </div>
  );
}

export default MembersPageComp;
