import React, { useEffect, useState } from 'react';
function HireMe() {

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        document.title = "Hire Me | Chris Hein"
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);

    return (
        <>
            <title>Hire Me</title>
            <main>
   
                {isMobile && (
                    <div className="container">
                        <h1 className="center-align">Hire Me</h1>
                        <p>I am Self-motivated Software Engineer with an excellent professional background, strong work ethic,
                        and a desire for continuous learning and development. Experienced in creating responsive front web and mobile
                        applications as well as optimizing and automating development processes. Highly skilled in managing multiple
                        projects simultaneously, collaborating with key stakeholders, and providing innovative solutions to complex problems.</p>
                        <p>To learn more about me, check out my <a href="/images/Website_Resume.pdf" >resume</a>.</p>
                        <p>You can also connect with me on <a href="http://www.linkedin.com/in/heincm">LinkedIn</a>.</p>
                    </div>)}
                {!isMobile && (<div>
                    <object data="/images/Website_Resume.pdf" type="application/pdf" width="100%" height="700px" aria-label="Chris Hein Resume" />
                </div>)}


            </main>
        </>
    )
}

export default HireMe;
