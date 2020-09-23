import React from "react";
import { toAuthor, toTasks } from "../routes";
import { NavigationList, NavigationListItem, StyledNavLink } from "./styled";

const Navigation = () => (
  <NavigationList>
    <NavigationListItem>
      <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
    </NavigationListItem>
    <NavigationListItem>
      <StyledNavLink to={toAuthor()}>O autorce</StyledNavLink>
    </NavigationListItem>
  </NavigationList>
);

export default Navigation;
