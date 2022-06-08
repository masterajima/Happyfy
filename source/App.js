/*import react and videochat module*/
import React from "react";
import "bootstrap/dist/bootstrap.min.css"
import "./App.css"
import {Container,Row,Col} from "reactstrap"
import VideoChat from "/VideoChat"

const App=()=>{
    return(
<div className="app">
    <header>
        <Navigate/>
        <Container>
            <div class="vidchat">
                <VideoChat/>
            </div>
        </Container>
        <footer>
            <p>
                Made with{""}
                <span img=""></span>
                <a href=""></a>
            </p>
        </footer>
    </header>
</div>
);
};