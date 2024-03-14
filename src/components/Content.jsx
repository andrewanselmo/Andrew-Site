
import rails from "./rails.png"
import mail from "./mail.png"
import linked from "./linked.png"
import git from "./git.png"
import typing5 from "./typing5.gif"
import wizard from "./wizard.gif"
import retail from "./retail.png"
import bsf from "./bsf.png"
import pirate from "./pirate.png"
import compiler from "./Compiler.png"
import career from "./career.jpg"
import escape1 from "./escape.png"
import biw from "./biw.png"
import db from "./db.png"

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
                        I am driven to create impactful and innovative solutions. Fueled by a love for creativity, 
                        I believe in the transformative power of technology and its ability to shape our world for the better. 

                        <br></br>
                        <br></br>
                        Explore my portfolio to get a glimpse of my work, and feel free to connect—
                        I'm always eager to dive into new and exciting ventures.
                    </p>
                    <img src ={typing5} id = "me-img"/>

            </div>

            <div id = "projects-nav-tracker"></div>


            <div id = "proj">

                <h2 id = "proj-h">PROJECTS</h2>

                    <div id = "proj-compiler">
                    
                        <img src ={compiler} id = "proj-compiler-img"/>
                        
                        <h2 id = "proj-compiler-h"> CatScript compiler</h2>
                        <p id = "proj-compiler-p"> 
                            Senior capstone project at MSU. Developed a compiler for the custom programming language CatScript. 
                            For each of the rules found in the CatScript grammar we implemented methods to tokenize, parse, evaluate, and then generate code. 
                            We were provided with a web interface to interact directly with the CatScript compiler so you can see each of the processes in real time.
                        </p>

                        <p id = "comp-tech1">Java </p>

                        <p id = "comp-tech2">Compiler</p> 

                        <p id = "comp-tech3">JUnit</p>
                            

                        <a id = "button1" href="https://youtu.be/MdFMTVmyl3E">Demo</a>

                        <a id = "button2" href="https://github.com/andrewanselmo/Catscript-Compiler/tree/main">
                                GitHub
                        </a>    

                    
                    </div>

                    <div id = "proj-bsf">
                    
                        <img src ={bsf} id = "proj-bsf-img"/>
                        
                        <h2 id = "proj-bsf-h"> BSF volunteer app</h2>
                        <p id = "proj-bsf-p"> 
                          Web application built for&nbsp; <a href = "https://www.bridgerskifoundation.org/">
                        Bridger Ski Foundation</a>, a local non-profit. Created to streamline the registration, sign in,
                        and reward processes for volunteers at BSF events 

                         
                        </p>

                        <p id = "bsf-tech1">ReactJS </p>

                        <p id = "bsf-tech2">Firebase</p> 

                        <p id = "bsf-tech3">Jest</p>
                            

                        {/* <a id = "button1" href="https://youtu.be/MdFMTVmyl3E">Demo</a> */}

                        <a id = "bsf-button" href="https://github.com/423s23/G3-BSF">
                                GitHub
                        </a>    

                
                </div>

                <div id = "proj-rails">
                    
                    <img src ={rails} id = "proj-rails-img"/>
                    
                    <h2 id = "proj-rails-h"> Blog</h2>
                    <p id = "proj-rails-p"> 
                    This app allows users to create, read, update, edit, and delete text posts in a blog format. 
                    Users will find they can read posts on the home page and they can access post creating, 
                    editing, and deleteing functionality through the 'Create New Post' tab in the top right corner.
                    </p>

                    <p id = "rails-tech1">Ruby on Rails</p>

                    <p id = "rails-tech2">CVM</p> 

                    <p id = "rails-tech3">Gems</p>
                        

                    <a id = "button1" href="https://youtu.be/vXIruLILAc0">Demo</a>

                    <a id = "button2" href="https://github.com/andrewanselmo/Rails-Blog">
                            GitHub
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