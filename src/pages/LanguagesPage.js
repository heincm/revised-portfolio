import React from 'react';
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
                    <div className="row center-align" id="heading">
                        <h1>Technologies Used</h1>
                    </div>
                    <div className="row">
                        {technologies}
                    </div>
                </div>
            </>
        )
    }
}

export default LanguagesPage;