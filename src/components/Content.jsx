
import me from "./me.jpg"
import rails from "./rails.png"
import mail from "./mail.png"
import linked from "./linked.png"
import git from "./git.png"
import "./Content.css"
import {useEffect, useRef} from "react";


const Content=() => {

    const appRef = useRef(null);

    useEffect( () => {
  
      const moveGradient = (event) => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
  
        const mouseX = Math.round((event.pageX / winWidth)*100)
        const mouseY = Math.round((event.pageY / winHeight)*100)
  
        if (appRef) {
          appRef.current.style.setProperty(
            '--mouse-x', mouseX.toString() + "%"
          )
        }
  
        if (appRef) {
          appRef.current.style.setProperty(
            '--mouse-y', mouseX.toString() + "%"
          )
        }
      }
  
      document.addEventListener("mousemove", moveGradient);
      return function cleanup() {
        document.removeEventListener("mousemove", moveGradient);
  
      };
  
  
    }, [appRef]); 

    return (
        <div id = "content" ref = {appRef} data-scroll-container>
        
            <div id = "wrapper"> 
                <div id = "header">
                    <h1 id = "header-text"> Welcome, to Andrew.com </h1>
                </div>
                {/* <img src ={head} id = "head-img"/> */}
            </div>

            <div id = "about">
                <h1 id = "about-h1">
                    ABOUT ME 
                </h1>
                
                    <p id = "about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    </p>
                    <img src ={me} id = "me-img"/>

            </div>

            

            <div id = "projects">
                <h1 id = "projects-h1">
                    PROJECTS
                </h1>

                    <div id = "rails-project">
                        <h2 id = "rails-h2"> Ruby on rails blog</h2>
                        <a href="https://github.com/andrewanselmo/Rails-Blog">
                            <img src ={rails} id = "rails-img"/>
                        </a>

                    </div>
                

                <div id = "another-project">
                    <h2 id = "another-h2"> Another project</h2>
                    <img src ={rails} id = "another-img"/>
                </div>

            </div>

            <div id = "contact">

                <h1 id = "contact-h1">
                    CONTACT
                </h1>

                <div id = "git-img">
                    <a href="https://github.com/andrewanselmo">
                        <img src ={git}/>
                    </a>
                </div>

                <div id = "linked-img">
                    <a href="https://www.linkedin.com/in/andrew-anselmo-a409b21a6/">
                        <img src ={linked}/>
                    </a>
                </div>

                <div id = "mail-img">
                    <a href="mailto: andrewanselmo@me.com">
                        <img src ={mail}/>
                    </a>
                </div>

            </div>

            {/* resume */}

        </div>
    )
    
  };
  export default Content;