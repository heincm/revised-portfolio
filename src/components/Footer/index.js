import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (

<footer className="page-footer footer">
<div className="container">
    <div className="row">
        <div className="col m6 s12">
            <p>Want to know more? Feel free to connect with me on LinkedIn.</p>
        </div>
        <div className="col m6 s12">
            <div className="right LI-profile-badge" data-version="v1" data-size="small" data-locale="en_US"
                data-type="horizontal" data-theme="dark" data-vanity="heincm"><a className="LI-simple-link"
                    href='https://www.linkedin.com/in/heincm?trk=profile-badge'>Chris
                    Hein</a>
            </div>
        </div>
    </div>
</div>
<div className="footer-copyright">
    <div className="container center">
        © 2019 Chris Hein
    </div>
</div>
</footer>
        )
    }
}

export default Footer