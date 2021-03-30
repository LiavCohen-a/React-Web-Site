/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link,Route,Switch} from 'react-router-dom';

import {useEffect,useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavBarComp from '../Navbar';

function SubsMainPageComp(props) {
  const history = useHistory();
  const allMembers = () => {
    history.push('/Subs/Members')
  }
  const addMember = () => {
    history.push('/Add')
  }
  useEffect(()=>{
    let result = localStorage.getItem('LogIn');
   
    if(result.includes(true) )
    {
      history.push("/Movies")
    }
  })
  return (
    <div >
         <NavBarComp />
  <h3>Subs Main Page Info</h3>
    <input type="button" value="All Members" onClick={() => allMembers()}/> &nbsp;&nbsp; <input type="button" value="Add Member" onClick={() => addMember()}/>


    
</div>
  );
}

export default SubsMainPageComp;
