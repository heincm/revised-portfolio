import React from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css'

class NotFound extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="container-div">
                                <div className="top-center">
                                    <h1>Well...this is embarrassing!</h1>
                                    <h3>This page cannot be found.</h3>
                                </div>
                                <img src='https://i.pinimg.com/originals/2d/ba/30/2dba30f2821a1c643b131cfa5f6e59c9.gif' alt='404 pic' />
                                <h4 className="bottom-center"><Link to="/index">Click here</Link> to go back</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NotFound;