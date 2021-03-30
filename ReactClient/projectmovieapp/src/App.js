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

function App() {

  return (
    <div>
      <br />
      <Switch>
        <Route exact path="/" component={LoginPageComp} />
        <Route path="/Movies" component={MoviesTableComp} />
        <Route path="/EditPage/:id" component={EditMovieComp} />
        <Route path="/AddMovie" component={AddMovieComp} />
        <Route path="/Member/:id" component={MemberPageComp} />
        <Route path="/EditMember/:id" component={EditMemberComp} />
        <Route exact path="/Subs" component={SubsMainPageComp} />
        <Route path="/Subs/Members" component={MembersPageComp} />
        <Route path="/Add" component={AddMemberComp} />
        <Route exact path="/:id" component={MoviesTableComp} />
      </Switch>
    </div>
  );
}

export default App;
