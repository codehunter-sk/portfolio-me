import React from "react";
import './Home.css';
import Name from '../components/Name'

function Home() {
    return (
        <div class="home-body">
            <h2>I am</h2>
            <Name/>
            <h4><a href="https://www.linkedin.com/in/suriyasampathkumar">LinkedIn profile</a></h4>
            <p>*webpage under construction</p>
        </div>
    )
}

export default Home