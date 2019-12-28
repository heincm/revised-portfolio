import React from 'react';
import './style.css';

class HireMe extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <h1 className="center-align">Hire Me</h1>
                        <div className="col s12 m6">

                            <p>Entry Level Web Developer with a strong professional background an excellent work ethic who is a
                                highly motivated learner. Experienced in creating and displaying database information such as
                                SQL to others in a way that is visually appealing and easy to understand for the past year.
                                Highly skilled in managing multiple projects simultaneously, collaborating with key
                stakeholders, and providing innovative solutions to complex problems.</p>
                            <p>To learn more about me, check out my <a href="Resume - Hein.pdf" target="_blank">resume</a>.</p>

                            <p>You can also connect with me on LinkedIn.</p>
                        </div>
                        <div className="col s12 m6">
                            <div className="right LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US"
                                data-type="vertical" data-theme="dark" data-vanity="heincm"><a className="LI-simple-link"
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
