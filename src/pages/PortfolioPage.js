import React, { Component } from 'react';
import PortfolioCard from '../components/PortfolioCard'
import MiniLogo from '../components/MiniLogo'
import projects from '../../src/projects.json'

class PortfolioPage extends Component {

    render() {
        const myProjects = projects.map(element => {
            return (<PortfolioCard
                src={element.img}
                alt={element.title}
                projectName={element.title}
                projectDescription={element.description}
                link={element.link}
                repo={element.repo}
                technologies={element.technologies}
                key={element.title} >
                    {element.technologies.map(what => {
                        return(<MiniLogo miniName={what} key={what}/>)
                    })}
                    </PortfolioCard>
            )
        })
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1>Coding Projects</h1>
                        <p>Check out the projects I've made!</p>
                        {myProjects}
                    </div>
                </div>
            </>
        )
    }
}

export default PortfolioPage;
