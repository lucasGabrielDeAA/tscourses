import React from "react";
import { Route, Switch } from "react-router-dom";

import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" initial exact component={Courses} />
      <Route path="/courses/:id/detail" initial exact component={CoursesDetail} />
    </Switch>
  )
}