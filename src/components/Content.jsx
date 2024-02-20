
import rails from "./rails.png"
import mail from "./mail.png"
import linked from "./linked.png"
import git from "./git.png"
import type4 from "./type4.gif"
import wizard from "./wizard.gif"

import "./Content.css"


const Content=() => {



    return (
        <div id = "content" >
        
            <div id = "wrapper"> 
                <div id = "header">
                    <h1 id = "header-text"> Welcome, to Andrew.com </h1>
                </div>
                <img src ={wizard} id = "wiz-img"/>
            </div>

            <div id = "about-nav-tracker"></div>

            <div id = "about">
                <h1 id = "about-h1">
                    ABOUT ME
                </h1>
                
                    <p id = "about-text">

                        <p id = "about-name"> Andrew Anselmo</p>
                        <br></br>
                    
                        I'm a dedicated software engineer with
                        a passion for transforming ideas into reality through code. 
                        With a wealth of experience across various domains, I bring a versatile skill set to the table. 
                        
                        <br></br>
                        <br></br>
                        From developing efficient algorithms to designing user-friendly interfaces, 
                        I am driven to create impactful and innovative solutions. Fuelled by a love for creativity, 
                        I believe in the transformative power of technology and its ability to shape our world for the better. 

                        <br></br>
                        <br></br>
                        Explore my portfolio to get a glimpse of my work, and feel free to connect—
                        I'm always eager to dive into new and exciting ventures.
                    </p>
                    <img src ={type4} id = "me-img"/>

            </div>

            <div id = "projects-nav-tracker"></div>

            <div id = "projects">
                <h1 id = "projects-h1">
                    PROJECTS
                </h1>

                    <div id = "rails-project">
                        <p id = "rails-h2"> Ruby on rails blog</p>
                        <a href="https://github.com/andrewanselmo/Rails-Blog">
                            <img src ={rails} id = "rails-img"/>
                        </a>

                    </div>
                

                {/* <div id = "another-project">
                    <h2 id = "another-h2"> Another project</h2>
                    <img src ={rails} id = "another-img"/>
                </div> */}

            </div>

            <div id = "contact">

                <h2 id = "contact-h1">
                    CONTACT
                </h2>

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