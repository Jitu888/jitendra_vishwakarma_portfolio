import React from 'react'
import './About.css'
const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I'm an Experienced Mern Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in building seamless user experiences and robust server-side solutions.
                        </p>
                        <p>My expertise lies in JavaScript, React, Node.js, and MongoDB, allowing me to tackle projects from conception to deployment. I thrive in collaborative environments and am always eager to learn new technologies and best practices.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p><hr style={{ width: "55%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p><hr style={{ width: "75%" }} />
                        </div>
                    </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>3+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>5+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About