import React from 'react';
import projects from '../../src/projects.json'
import MiniLogo from '../components/MiniLogo'
import './LanguagesPage.css'

const something = projects.map(entry => entry.technologies)
const technologies = new Set(something.flat())
const tech = Array.from(technologies)

const fuckingWork = tech.map(alright => {
    return (<MiniLogo miniName={alright} key={alright} myClass='big-logo' />)
})
class LanguagesPage extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1>Technologies Used</h1>
                        <p>Below is a growing list of technologies I have used.</p>
                        {fuckingWork}
                    </div>
                </div>
            </>
        )
    }
}

export default LanguagesPage;