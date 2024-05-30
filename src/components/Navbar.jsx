import "./Navbar.css";
import { Link } from "react-scroll";


const Navbar=() => {
  return (
    
      <nav className = "nav__container__actions">
        <ul>
        <Link activeClass="active" smooth spy to="wrapper">
          <li>
            HOME 
          </li>
          </Link>
          <Link activeClass="active" smooth spy to="about-nav-tracker">
            <li>
              ABOUT ME
            </li>
          </Link>
          <Link activeClass="active" smooth spy to="projects-nav-tracker">
            <li>
              PROJECTS
            </li>
          </Link>
          <Link activeClass="active" smooth spy to="contact-nav-tracker">
            <li>
              CONTACT
            </li>
          </Link>

              <a href ="https://drive.google.com/file/d/1T2wlmnli0Enh-wyvrC6Wjdk5vKB9sQWU/view">
                <li>
                  RESUME
                </li>
              </a>
    
          
          
        </ul>
      </nav>
    
        
  )
};
export default Navbar;