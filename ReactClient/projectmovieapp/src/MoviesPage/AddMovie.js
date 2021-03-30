/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBarComp from "../Navbar";

function AddMovieComp(props) {
  const history = useHistory();
  const Save =async (e) => {
    e.preventDefault()
    let obj = {
      name: movieName,
      genres: movieGeneres,
      imageUrl: movieimageUrl,
      premieredYear: moviepremired,
    };
    let resp = await axios.post("http://localhost:5000/api/movies",obj);
    alert(resp.data)
    history.push("/Movies");
    
  };
  const Cancel = () => {
    history.push("/Movies");
  };

  const [movieid, setId] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [movieGeneres, setMovieGeneres] = useState([]);
  const [movieimageUrl, setMovieimageUrl] = useState("");
  const [moviepremired, setMoviepremired] = useState("");
 
  useEffect(()=>{
    let result = localStorage.getItem('LogIn');
    if(result.includes(false) )
    {
      history.push("/Movies")
    }
  },[])

  return (
    <div>
          <NavBarComp />
      <h1>Add Movie Page</h1>

      <form onSubmit={(e) => Save(e)}>
        Name :
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <br />
        Generes :
        <input
          type="text"
          value={movieGeneres}
          onChange={(e) => setMovieGeneres(e.target.value)}
        />  - <span>Must " , " Between Generes</span>
        <br />
        Image Url :
        <input
          type="text"
          value={movieimageUrl}
          onChange={(e) => setMovieimageUrl(e.target.value)}
        />
        <br />
        Premired Date :
        <input
          type="date"
          value={moviepremired}
          onChange={(e) => setMoviepremired(e.target.value)}
        />
        <br />
        <input type="submit" value="Save" /> &nbsp;&nbsp; <input type="button" value="Cancel" onClick={() => Cancel()} />
      </form>
    </div>
  );
}

export default AddMovieComp;
