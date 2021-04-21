import React, { Children } from 'react';
import './pageLayoutStyle.css';

class PageLayout extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {Children}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageLayout;