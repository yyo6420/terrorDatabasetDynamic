import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="NavBarTitle">חידון ידע על טרור בעולם</h1>
      <div className="linkDiv">
        <NavLink to="/quiz" className="link NavBarLink">מעבר לחידון</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
