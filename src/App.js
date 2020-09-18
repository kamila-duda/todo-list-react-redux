import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  StyledNavLink,
} from "./styled";

export default () => (
  <HashRouter>
    <Navigation>
      <NavigationList>
        <NavigationListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink to="/autorka">O autorce</StyledNavLink>
        </NavigationListItem>
      </NavigationList>
    </Navigation>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route exact path="/autorka">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
