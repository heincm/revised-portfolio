import React, { Component } from 'react';
import projects from '../../src/projects.json'
import MiniLogo from '../components/MiniLogo'
import './LanguagesPage.css'

const technologyArray = projects.map(entry => entry.technologies)
const technologySet = new Set(technologyArray.flat())
const techArray = Array.from(technologySet)
const technologies = techArray.map(alright => {
    return (<MiniLogo miniName={alright} key={alright} myClass='big-logo' />)
})

class LanguagesPage extends React.Component {
    componentDidMount() {
        document.title = "Technology | Chris Hein"
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1>Technologies Used</h1>
                        <p>Below is a growing list of languages and frameworks I have used.</p>
                        {technologies}
                    </div>
                </div>
            </>
        )
    }
}

export default LanguagesPage;