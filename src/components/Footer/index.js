import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (

<footer class="page-footer footer">
<div class="container">
    <div class="row">
        <div class="col m6 s12">
            <p>Want to know more? Feel free to connect with me on LinkedIn.</p>
        </div>
        <div class="col m6 s12">
            <div class="right LI-profile-badge" data-version="v1" data-size="small" data-locale="en_US"
                data-type="horizontal" data-theme="dark" data-vanity="heincm"><a class="LI-simple-link"
                    href='https://www.linkedin.com/in/heincm?trk=profile-badge'>Chris
                    Hein</a>
            </div>
        </div>
    </div>
</div>
<div class="footer-copyright">
    <div class="container center">
        © 2019 Chris Hein
    </div>
</div>
</footer>
        )
    }
}

export default Footer