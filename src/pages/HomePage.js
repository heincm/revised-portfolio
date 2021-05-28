import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'
import { ParallaxBanner } from 'react-scroll-parallax';

class HomePage extends React.Component {

    componentDidMount() {
        document.title = "Home | Chris Hein"
    }    
    
    render() {
        return (
            <>
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: '/images/apple-code-codes-574069.png',
                            amount: 0.9,
                        },
                        {
                            children: <h1 className="header center white-text" style={{marginTop: "30px", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Hi, I'm <span id="mainHeader"
                                className="header center teal-text text-lighten-2">Chris
                            Hein</span>. I'm a software engineer.</h1>,
                            amount: 0.0,
                            slowerScrollRate: true,
                        }
                    ]}
                    style={{
                        height: '300px',
                    }}
                >
                </ParallaxBanner>

                <div className="container containerized">
                    <div className="row">
                        <div className="col s12">
                            <img className="responsive-img circle scale-transition" id="me" src={'/images/me.png'} alt="Me" />
                            <p> Hi! Welcome to my portfolio.</p>

                            <p>I'm originally from a small town of about 2,500 people in rural Nebraska. I went to school at
                            the University of Nebraska at Kearney (Go Lopes) where I graduated in 2009 with a double major
                            in psychology and sociology. In 2011 I completed my master’s degree and graduated with a M.S.Ed.
                            in Student Affairs.
                            </p>

                            <p>I moved to Platteville, Wisconsin for three years where I worked as a professional Residence
                            Hall Director. In this role I gained my first hands-on experience working with frontend web development when I helped
                            migrate our departmental website through changes to two different content management systems.
                            </p>

                            <p>In 2014 I moved to Atlanta and began working at Georgia State University as an Academic
                            Counselor. In the summer of 2018 I took a 6 week course at GSU to learn how to pull data
                            reports from Oracle PL/SQL.
                            </p>

                            <p>In the fall of 2018 I enrolled in the Georgia Tech Coding Bootcamp, a 24 week full-stack
                            development program. To see some of the technologies I've learned and become familiar with,
                            click <Link to="/languages">here</Link>.
                            </p>

                            <p>I am actively seeking employment as a web developer and am open to work in most any inudstry
                            in the Atlanta metro area. You can see some of my development projects 
                            <Link to="/portfolio"> here</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;