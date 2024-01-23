import head from "./head.jpg"
import me from "./me.jpg"
import "./Content.css"


const Content=() => {
    return (
        <div id = "content">
        
            <div id = "header">
                <img src ={head} id = "head-img"/>
            </div>
            <div id = "about">
                <h1 id = "about-h1">
                    About Me 
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

            </div>
            <div id = "contact">

            </div>

            {/* resume */}



        </div>
    )
    
  };
  export default Content;