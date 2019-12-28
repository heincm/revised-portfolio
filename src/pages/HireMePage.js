import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class HireMe extends React.Component {
    render() {
        return (
            <main>
                <div class="container">
                    <div class="row">
                        <h1 class="center-align">Hire Me</h1>
                        <div class="col s12 m6">

                            <p>Entry Level Web Developer with a strong professional background an excellent work ethic who is a
                                highly motivated learner. Experienced in creating and displaying database information such as
                                SQL to others in a way that is visually appealing and easy to understand for the past year.
                                Highly skilled in managing multiple projects simultaneously, collaborating with key
                stakeholders, and providing innovative solutions to complex problems.</p>
                            <p>To learn more about me, check out my <a href="Resume - Hein.pdf" target="_blank">resume</a>.</p>

                            <p>You can also connect with me on LinkedIn.</p>
                        </div>
                        <div class="col s12 m6">
                            <div class="right LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US"
                                data-type="vertical" data-theme="dark" data-vanity="heincm"><a class="LI-simple-link"
                                    href='https://www.linkedin.com/in/heincm?trk=profile-badge'>Chris Hein</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default HireMe;
