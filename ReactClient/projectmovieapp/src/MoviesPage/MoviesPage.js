/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Link,Route,Switch} from 'react-router-dom';
import MovieDataComp from './MovieData'
import {useEffect,useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NavbarComp from "../Navbar";



function MoviesPageComp(props) {
  const history = useHistory();
  const [txt,setTxt] = useState("")
  const [movies ,setMovies] = useState([])


  const allMovies =async () => {
    let resp = await axios.get("http://localhost:5000/api/movies")
    setMovies(resp.data)
    history.push('/Movies')
  }
  const addMovies = () => {
    history.push('/AddMovie')
  }
  const findMovies = () => {
    let arr = movies.filter(x => x.name.includes(txt))
    setMovies(arr)
  }

  useEffect(async() =>{
    let result = localStorage.getItem('LogIn');
    if(result.includes(true) )
    {
      let resp = await axios.get("http://localhost:5000/api/movies")
      setMovies(resp.data)

    }
    else
    {
      history.push('/')
    }
  
    

  },[movies == null])
 
  let [name, setName] = useState("");
  useEffect(async () => {
    let name = localStorage.getItem("name");
    if (name != null) {
 
      setName(name);
    } else {
      setName(name);
    }

  }, []);

  
 
  return (
    <div  className="FatherDiv">

      <NavbarComp />
      
    <h3>Movies Table - {name}</h3>

    <input type="button" value="All Movies" onClick={() => allMovies()}/> &nbsp; <input type="button" value="Add Movie" onClick={() => addMovies()}/>&nbsp;&nbsp;
    Find Movie : <input type="text" value={txt} placeholder="By Movie Name" onChange={e =>setTxt(e.target.value)} /> <input type="button" value="Find !" onClick={() => findMovies()}/> <br /> <br /> <br />
    
    {
      movies.map(x => {
        return <div key={x._id}> <MovieDataComp  movie={x} /></div>
      })
    }
   
  

    </div>
  );
}

export default MoviesPageComp;
