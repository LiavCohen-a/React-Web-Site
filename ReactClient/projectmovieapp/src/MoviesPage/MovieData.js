/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";
import NavBarComp from "../Navbar";
function MovieDataComp(props) {
  const history = useHistory();

  const EditMovie = () => {
     history.push("/EditPage/" + props.movie._id);
  };

  const Delete =async () => {
    
    let resp = await axios.delete("http://localhost:5000/api/movies/" + props.movie._id);
    let resp2 = await axios.get("http://localhost:5000/api/Subs");
    resp2.data.forEach(async(x) => {
      if(props.movie._id === x.movieID)
      {
        let resp3 = await axios.delete("http://localhost:5000/api/Subs/"+x._id);
      }
    });
    alert(resp.data + "Subs As Well")
    window.location.reload()
  };

  const [members,setMembers] = useState([])
  const [subs,setSubs] = useState([])
  const [arr,setarr] = useState([])
  useEffect(async() =>{
    let result = localStorage.getItem('LogIn');   
    if(result.includes(true) )
    {
      let resp = await axios.get("http://localhost:5000/api/Subs");
      let result =await resp.data.filter(x => x.movieID === props.movie._id)
       await result.forEach(async x => {
        let resp2 = await axios.get("http://localhost:5000/api/members/" + x.memberID)
        x.name = resp2.data.name;
        setarr(x.memberID)
      })
      setMembers(result)
    }
    else
    {

      history.push('/')
    }
 
  },[])
  useEffect(async() =>{
    
  },[members])
 

 
  return (
    <div className="Card">
      <b>
        {props.movie.name} , {props.movie.premieredYear}
      </b>
      <br />
      <div>
        Generes :&nbsp;&nbsp;
        {props.movie.genres.map((x, index) => {
          return <span key={index}> ,"{x}" </span>;
        })}
      </div>
      <div className="Div">
      <span className="img">
        <img src={props.movie.imageUrl}  alt="img" />
      </span>
      <span className="Sub">
      &nbsp;&nbsp; Subscriptions Watched !

        <ul>
          {
            members.map(x => {
              return <li key={x._id}><Link to={"/Member/" + x.memberID}>{x.name}</Link> ,&nbsp;&nbsp;{x.date} </li>
            })
          }
        </ul>
        
      </span>
      </div>
      <br />
      <input
        type="button"
        value="Edit Movie"
        onClick={() => EditMovie()}
      />
      &nbsp; <input type="button" value="Delete" onClick={() => Delete()} /><br/>
      &nbsp;&nbsp;
    </div>
    
  );
}

export default MovieDataComp;
