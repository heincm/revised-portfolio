import React, { Component } from 'react';
import PortfolioCard from '../components/PortfolioCard'
import MiniLogo from '../components/MiniLogo'
import projects from '../../src/projects.json'
// TODO: Need to figure out how to change text for street ride
class PortfolioPage extends Component {
    componentDidMount() {
        document.title = "Portfolio | Chris Hein"
    }

    render() {
        const myProjects = projects.reverse().map(element => {
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
                        return(<MiniLogo miniName={what} key={what} myClass='miniLogo' />)
                    })}
                    </PortfolioCard>
            )
        })
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1 className="center-align">Coding Projects</h1>
                        {myProjects}
                    </div>
                </div>
            </>
        )
    }
}

export default PortfolioPage;
