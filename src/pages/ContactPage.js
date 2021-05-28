import React from 'react';
// TODO: Fix the issue of the labels being over placeholder
// TODO: Get this thing to actually send out emails
class Contact extends React.Component {
    componentDidMount() {
        document.title = "Contact Me | Chris Hein"
    }
    render() {
        return (
            <main>
            <div className="container contact-container">
                <p>Use the form below to send me a message or email me at <a href="mailto:chris.m.hein@gmail.com?Subject=Website%20Email">chris.m.hein@gmail.com</a>.</p>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input placeholder="John" id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input placeholder="Smith" id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" className="validate" placeholder="you@youmail.com" />
                                <label htmlFor="email">Email Address</label>
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="text" className="materialize-textarea"
                                    placeholder="Write your message here..."></textarea>
                                <label htmlFor="text">Message</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <div className="modal-trigger" href="#successModal"></div>
                    </form>
                </div>
            </div>
    
            {/* Modal Structure */}
            <div id="successModal" className="modal">
                <div className="modal-content">
                    <h4 className="center-align">Message Sent!</h4>
                    <p className="center-align">Thanks for reaching out.</p>
                    <p className="center-align"> If you're not redirected to the home page in a few seconds, please <a href="/">click here</a>.</p>
                </div>
            </div>
    
            {/* End Modal Structure */}
        </main>
        )
    }
}

export default Contact;