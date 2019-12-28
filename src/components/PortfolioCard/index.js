import React from 'react';
import './style.css';

function Card(props) {
        return (
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={props.src} alt={props.alt}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title blue-text text-darken-2">{props.projectName}</span>
                        <p>{props.projectDescription}</p>
                    </div>
                    <div className="card-action">
                        <a
                            href={props.link}>Click
            here to view the project</a>
                        <br />
                        <br />
                        <a href={props.repo}>Click here to view the Github
            repository</a>
                    </div>
                    <div className="card-content">
                        <span className="card-title blue-text text-darken-2">Technologies Used</span>
                        <img className="miniLogo tooltipped" data-position="bottom" data-tooltip="nodeJS"
                            src="/images/nodeJS.png" alt="nodeJS" />
                        <img className="miniLogo tooltipped" data-position="bottom" data-tooltip="MySQL"
                            src="/images/MySQL.png" alt="MySQL" />
                    </div>
                </div>
            </div>
        )
}

export default Card;
