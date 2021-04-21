import React from 'react';
import './portfolioCardStyle.css'

function PortfolioCard(props) {

    const { src, alt, projectName, projectDescription, link, repo } = props

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={src} alt={alt} />
                </div>
                <div className="card-content">
                    <span className="card-title blue-text text-darken-2">{projectName}</span>
                    <p>{projectDescription}</p>
                </div>
                <div className="card-action">
                    <a
                        href={link}>Click here to view the project</a>
                    <br />
                    <br />
                    <a href={repo}>Click here to view the Githubrepository</a>
                </div>
                <div className="card-content">
                    <span className="card-title blue-text text-darken-2">Technologies Used</span>
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default PortfolioCard;
