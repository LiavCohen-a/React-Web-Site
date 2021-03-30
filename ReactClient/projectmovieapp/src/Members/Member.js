/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBarComp from "../Navbar";

function MemberPageComp(props) {
  const history = useHistory();

  const EditMember = () => {
    history.push("/EditMember/" + props.member._id);
  };
  const DeleteMember = async () => {
    let id = props.member._id;
    let resp = await axios.delete("http://localhost:5000/api/members/" + id);
    let resp2 = await axios.get("http://localhost:5000/api/subs");
    let result = resp2.data.filter((x) => x.memberID === id);
    result.forEach(async (x) => {
      let resp3 = await axios.delete("http://localhost:5000/api/subs/" + x._id);
    });
    alert(resp.data + " " + "Subs Delete As Well");
    history.push("/");
  };

  const [movies, setMovies2] = useState([]);
  const [movieWatched, setMovies] = useState([]);
  const [subMovieID, setMovieName] = useState("");
  const [subMovieDate, setMovieDate] = useState();
  useEffect(async () => {
    let result = localStorage.getItem('LogIn');
    setStyle('SubA') 
    if(result.includes(true) )
    {
    
    let resp = await axios.get("http://localhost:5000/api/Subs");
    let arr = resp.data.filter((x) => x.memberID === props.member._id);
    let resp2 = await axios.get("http://localhost:5000/api/movies");
    
    setMovies2(resp2.data);
    let movies = [];
    let movies2 = [];
    let finalArr = arr.forEach((x) => {
     
      let res = resp2.data.filter((y) => {
        if (y._id === x.movieID ) {
          y.date = x.date
          movies.push(y);
        }
        else{
          movies2.push(y)
        }
      });
    });

    setMovies(movies);
    

  }
  else{
    history.push('/Movies')
  }
  }, []);
  const SaveSub = async () => {
    let obj = {
      movieID: subMovieID,
      memberID: props.member._id,
      date: subMovieDate,
    };

    let resp = await axios.post("http://localhost:5000/api/Subs", obj);
    alert(resp.data);
    window.location.reload();
  };
  const [section, setSection] = useState(true);
  const [styleVisibility, setStyle] = useState("");
  const SubToNewMovie = () => {
    setSection(!section);
    if(section)
    {
      setStyle('SubB') 
    }
    else{
      setStyle('SubA')
      
    }
  };
  return (
    <div className="Card1">
         <NavBarComp />
      <h3>Member Info</h3>
      Name : {props.member.name} <br />
      Email : {props.member.email} <br />
      City : {props.member.City} <br />
      <input type="button" value="Edit" onClick={() => EditMember()} />{" "}
      &nbsp;&nbsp;{" "}
      <input type="button" value="Delete" onClick={() => DeleteMember()} />{" "}
      <br />
      <br />
      <div className="MovieWatched">
        <b>Movies Watched : </b>
        <br />
        <input
          type="button"
          onClick={() => SubToNewMovie()}
          value="Subscribe to new movie"
        />
        {
          <div className={styleVisibility}>
            <b>Add New Movie : </b>
            <br />
            <select onChange={(e) => setMovieName(e.target.value)}>
              <option value="">Select Movie</option>
              {movies.map((x,index) => {
                return (
                  <option key={index} value={x._id}>

                    {x.name}{" "}
                  </option>
                );
              })}
            </select>
            &nbsp;&nbsp;{" "}
            <input type="date" onChange={(e) => setMovieDate(e.target.value)} />{" "}
            &nbsp;&nbsp;
            <input type="button" value="Save" onClick={() => SaveSub()} />
          </div>
        }
        <br />
        <ul>
          {movieWatched.map((x,index) => {
            return (
              <li key={index}>
                
                <Link to={"/Movies"} >{x.name}</Link> , &nbsp;&nbsp;
                {x.date}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MemberPageComp;
