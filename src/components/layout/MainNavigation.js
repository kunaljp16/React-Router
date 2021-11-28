import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active} >
                All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quotes" activeClassName={classes.active}>
                Add a quotes  
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/:param" activeClassName={classes.active}>
                Quote Detail
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
