
import rails from "./rails.png"
import mail from "./mail.png"
import linked from "./linked.png"
import git from "./git.png"
import typing5 from "./typing5.gif"
import wizard from "./wizard.gif"
import retail from "./retail.png"
import bsf from "./bsf.png"
// import wizard2 from "./wiz-color.gif"


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
                    <img src ={typing5} id = "me-img"/>

            </div>

            <div id = "projects-nav-tracker"></div>

            <div id = "projects">
                <h1 id = "projects-h1">
                    PROJECTS
                </h1>

                    <p id = "project-intro">
                        These are some of my favorite projects. Explore each of their use cases, repositories, and demos.
                    </p>

                    <div id = "rails-project">
                        <p id = "rails-h2"> Ruby on rails blog</p>
                        <a href="https://github.com/andrewanselmo/Rails-Blog">
                            <img src ={rails} id = "rails-img"/>
                        </a>

                    </div>

                    <div id = "rails2-project">
                        <p id = "rails2-h2"> Ecommerce website</p>
                        <a href="https://github.com/andrewanselmo/Rails-Blog">
                            <img src ={retail} id = "rails2-img"/>
                        </a>

                    </div>

                    <div id = "rails3-project">
                        <p id = "rails3-h2"> BSF volunteer app</p>
                        <a href="https://github.com/andrewanselmo/Rails-Blog">
                            <img src ={bsf} id = "rails3-img"/>
                        </a>

                    </div>
                


            </div>

            

            <div id = "contact">

                <h2 id = "contact-h1">
                    Let's Connect
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

            <div id = "contact-nav-tracker"></div>

            {/* resume */}

        </div>
    )
    
  };
  export default Content;