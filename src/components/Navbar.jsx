import "./Navbar.css";
import { Link } from "react-scroll";


const Navbar=() => {
  return (
    
      <nav className = "nav__container__actions">
        <ul>
          <li>
            HOME 
          </li>
          <Link activeClass="active" smooth spy to="projects">
            <li>
              ABOUT ME
            </li>
          </Link>
          
        </ul>
      </nav>
    
        
  )
};
export default Navbar;