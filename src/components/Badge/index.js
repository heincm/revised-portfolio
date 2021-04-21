import React from 'react';
import './badgeStyle.css';

class Badge extends React.Component {
    render() {
        return (
                <div className="right LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US"
                    data-type="vertical" data-theme="dark" data-vanity="heincm"><a className="LI-simple-link"
                        href='https://www.linkedin.com/in/heincm?trk=profile-badge'>Chris Hein</a>
                </div>
        )
    }
}

export default Badge;
