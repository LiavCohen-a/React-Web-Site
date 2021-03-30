/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link, Route, Switch } from "react-router-dom";
import MoviesTableComp from "./MoviesPage/MoviesPage";
import EditMovieComp from "./MoviesPage/EditMovie";
import AddMovieComp from "./MoviesPage/AddMovie";
import MemberPageComp from "./Members/MemberPage";
import EditMemberComp from "./Members/EditMember";
import SubsMainPageComp from "./Members/SubsMainPage";
import { useHistory } from "react-router-dom";
import MembersPageComp from "./Members/MembersPage";
import AddMemberComp from "./Members/AddMember";
import LoginPageComp from "./LoginPage";
import { useEffect, useState } from "react";

function NavBarComp() {
  const history = useHistory();
  const movies = () => {
    history.push("/Movies");
  };
  const Subscriptions = () => {
    history.push("/Subs/Members");
  };

 


  return (
    <div>
      <h1>Wellcome To My Movies Web Site </h1>
      <input
        type="button"
        value="Movies"
        onClick={() => movies()}
      /> &nbsp;
      <input
        type="button"
        value="Subscriptions"
        onClick={() => Subscriptions()}
      />
      <br />
    </div>
  );
}

export default NavBarComp;
