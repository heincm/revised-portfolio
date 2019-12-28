import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class PortfolioPage extends React.Component {
    render() {
        return (
            <>
                <div class="container">
                    <div class="row">
                        <h1>Coding Projects</h1>
                        <p>Check out the projects I've made!</p>
                        <div class="col s12 m4">
                            <div class="card">
                                <div class="card-image">
                                    <img src='../assets/images/hangman.png' alt="hangman" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title blue-text text-darken-2">Word Guess Game</span>
                                    <p>This is my first project using vanilla Javascript.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://heincm.github.io/Word-Guess-Game/">Click here to view the project</a>
                                    <br />
                                    <br />
                                    <a href="https://github.com/heincm/Word-Guess-Game">Click here to view the Github
                                repository</a>
                                </div>
                                <div class="card-content">
                                    <span class="card-title blue-text text-darken-2">Technologies Used</span>
                                    <img class="miniLogo tooltipped" data-position="bottom" data-tooltip="HTML5"
                                        src="/images/HTML5_Logo_512.png" alt="HTML5" />
                                    <img class="miniLogo tooltipped" data-position="bottom" data-tooltip="CSS3"
                                        src="/images/css3logo.png" alt="CSS3" />
                                    <img class="miniLogo tooltipped" data-position="bottom" data-tooltip="JavaScript"
                                        src="/images/JavaScript-logo.png" alt="JavaScript" />
                                    <img class="miniLogo tooltipped" data-position="bottom" data-tooltip="Bootstrap"
                                        src="/images/bootstrap-solid.svg" alt="BootStrap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PortfolioPage;
