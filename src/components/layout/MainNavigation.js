import { Link } from "react-router-dom";

import companyLogo from "../../resources/hot-chocolate.jpg";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <Link to="/kelly-criterion/" className={classes.logo}>
          <div>Trader's Tavern</div>
          <img src={companyLogo} />
        </Link>
      </nav>
    </header>
  );
}

export default MainNavigation;
