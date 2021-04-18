import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class NotFound extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1>The page you are looking for can't be found</h1>
                            <p><Link to="/index">Click here</Link> to go back</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NotFound;