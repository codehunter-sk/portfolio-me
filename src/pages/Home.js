import React from "react";
import './Home.css';
import Name from '../components/Name';
import Project from '../components/Project';

function Home() {
    return (
        <div class="home-body">
            <div class="home-part1">
                <h2>I am</h2>
                <Name/>
                <Project/>
                <h4>For more projects - <a href="https://www.linkedin.com/in/suriyasampathkumar">LinkedIn profile</a></h4>
            </div>
            <div>
                <p>*webpage under construction</p>
            </div>
        </div>
        
    )
}

export default Home