import { NavLink } from 'react-router-dom';
import './LandingPage.css'
import { FaConnectdevelop } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";












function LandingPage() {


    const Redirect = (e) => {
        e.preventDefault()
        if (e.target.innerText === 'Linkedin' || e.target.innerText === 'Lets Connect!') {
            window.open("https://linkedin.com/in/william-cathey-398455337", "_blank")
        }
        if (e.target.innerText === 'Github') {
            window.open("https://github.com/Wcathey", "_blank")
        }
        if (e.target.innerText === 'SuperProf') {
            window.open("https://www.superprof.com/ir/28085740-624a77", "_blank")
        }
        if (e.target.innerText === 'Upwork') {
            window.open("https://www.upwork.com/freelancers/~010cc996229dd64140?mp_source=share", "_blank")
        }
    }





    return (
        <div className="landing-page-container">
            <div className='main'>
                <h4>Hi, my name is <span>William</span>  👋</h4>
                <p className="title">Creative FullStack Developer</p>
                <p className='subtitle'>I Create And Design Responsive Web Applications</p>
                <div id="logo">
                    <FaConnectdevelop />
                </div>
            </div>


            <div className='guarantee'>
                <div className='item'>
                    <div className='icon'>
                        <IoShieldCheckmarkOutline />
                    </div>
                    <div className='info'>
                        <h3>Certified</h3>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.coursereport.com/schools/app-academy", "_blank")
                        }}>App Academy Graduate</p>
                    </div>
                    <div className='chevron'>
                        <FaChevronRight />
                    </div>

                </div>
                <div className='item' >
                    <div className='icon'>
                        <IoShieldCheckmarkOutline />
                    </div>
                    <div className='info'>
                        <h3>Multiple</h3>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/Wcathey", "_blank");

                        }}>Completed Projects</p>
                    </div>
                    <div className='chevron'>
                        <FaChevronRight />
                    </div>

                </div>
                <div className='item'>
                    <div className='icon'>
                        <IoShieldCheckmarkOutline />
                    </div>
                    <div className='info' id="gaur-right">
                        <h3>Guaranteed</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className='chevron'>
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            <h5 className='seperator'>Who I am</h5>

            <div className="about">
                <img src="/portfolio.jpg"></img>
                <div className="info">
                    <h3>About Me</h3>
                    <p>I began my journey into the world of coding
                        with no prior experience, feeling both excited
                        and overwhelmed by the challenge ahead. With
                        a strong desire to learn and grow, I enrolled in a
                        demanding coding bootcamp that pushed me
                        to my limits. The experience was
                        transformative, and after months of hard work
                        and dedication, I proudly graduated, equipped
                        with the skills to navigate the tech landscape.
                    </p>
                    <p>
                        Outside of my professional life, I am a proud
                        parent of three wonderful children who inspire me
                        daily. Balancing family life with my passion for
                        technology can be a challenge, but it is one I
                        embrace wholeheartedly.
                    </p>
                    <p>
                        In my spare time, I dive into the realms of video games,
                        which not only fuel my creativity but
                        also enchance my coding skills through game design and development.
                        Additionally, I enjoy dabbling as a music producer, where I channel
                        my artistic side, creating sounds and beats that resonate
                        with my experiences. My journey is just beginning, and I look forward to exploring
                        the endless possibilities in both technology and music!
                    </p>
                </div>
            </div>

            <h5 className='seperator'>My Skills</h5>
            <div className="skills">
                <div className="left">
                    <div className="info">
                        <h3>What My Programming Skills Include</h3>
                        <p> I build full stack applications using cloud based systems, local and remote servers
                            and present a responsive user interface that achieves goals and solutions.
                        </p>

                    </div>
                </div>

                <div className="right">
                    <div className="item">
                        <IoLogoNodejs />
                    </div>
                    <div className="item">
                        <FaPython />
                    </div>
                    <div className="item">
                        <FaReact />
                    </div>
                    <div className="item">
                        <FaHtml5 />
                    </div>
                    <div className="item">
                        <FaCss3Alt />
                    </div>
                </div>
            </div>


            <div className='projects-container'>

            <h5> Projects <span><FaDiagramProject /></span>
            </h5>
            <div className="projects">
                <div className="projects-left" id="mirror">
                    <div className="projects-info">
                        <h2 >Mirror</h2>
                        <p>  Personalized AI-driven facial scanning and beauty suggestions.
                            Augmented reality for real-time try-ons.
                            Customizable makeup filters for instant transformations.
                            Mirror uses advanced facial scanning, AI, and AR to provide tailored recommendations for accessories, colors, and makeup that complement your natural features. Were here to help you look and feel like your most authentic self.
                        </p>
                        <h3>Backend: <span>Flask</span></h3>
                        <h3>DataBase: <span>PostgreSQL, sqlAlchemy</span></h3>
                        <h3>Frontend: <span>React, Redux</span></h3>
                        <h3>Integrations: <span>DeepAR SDK</span></h3>
                        <h3>Languages: <span>Python, JSX, SQL, Javascript, html, css</span></h3>
                    </div>
                </div>

                <div className="projects-right">
                    <div className="project-image">
                        <img src="mirror-example-eyeshadow.png" alt="eyeshadow-camera-filter" />
                    </div>
                    <div className="project-image">
                        <img src="mirror-example-lipstick.jpeg" alt="lipstick-camera-filter" />
                    </div>
                </div>
            </div>

            <div className="projects">
                <div className="projects-left" id="scanner">
                    <div className="projects-info">
                        <h2 >Celeri-Scan</h2>
                        <p> Celeri-Scan is a mobile document scanner app that captures images via mobile camera or desktop webcams. Built with a mobile influenced Ui and features that gaurantee user authentication and cloud based data management. Capture images and find edges to straighten a photo with the built in scanner ran off jscanify; an open source package designed by coloonel parrot https://colonelparrot.github.io/jscanify/</p>
                        <h3>Backend: <span>Flask</span></h3>
                        <h3>DataBase: <span>PostgreSQL, sqlAlchemy</span></h3>
                        <h3>Frontend: <span>React, Redux</span></h3>
                        <h3>Integrations: <span>jscanify, Opencv, Cloudinary</span></h3>
                        <h3>Languages: <span>Python, JSX, SQL, Javascript, css</span></h3>
                    </div>
                </div>

                <div className="projects-right">
                    <div className="project-image">
                        <img src="celeri-scan-dashboard.png" alt="scanner-app-dashboard" />
                    </div>
                    <div className="project-image">
                        <img src="celeri-scan-example.png" alt="scanner-app-papers" />

                    </div>
                </div>
            </div>

            <div className="projects">
                <div className="projects-left" id="wpb">
                    <div className="projects-info">
                        <h2 >Will Pay Bookings</h2>
                        <p>Will-Pay Bookings is a mock-up of Airbnb, designed to let users easily book reservations for vacation rentals, hotels, and unique stays. The platform features a simple and intuitive interface where users can browse listings, check availability, and make secure bookings. Whether youre looking for a weekend getaway or a long-term stay, Will-Pay Bookings provides a seamless experience for finding and reserving accommodations.</p>
                        <h3>Backend: <span>Express</span></h3>
                        <h3>DataBase: <span>PostgreSQL, Sequelize</span></h3>
                        <h3>Frontend: <span>React, Redux</span></h3>
                        <h3>Languages: <span>Javascript, JSX, SQL, html, css</span></h3>
                    </div>
                </div>
                <div className="projects-right">
                    <div className="project-image">
                        <img src="wpb-dashboard.png" alt="booking-app-dashboard" />
                    </div>
                    <div className="project-image">
                        <img src="wpb-example.png" alt="booking-page-example" />

                    </div>
                </div>
                </div>
                </div>
            <footer>
                <div className="start">
                    <h3>Start a project</h3>
                    <p>Interested in working together?</p>
                    <button onClick={(Redirect)}>Lets Connect!</button>
                </div>

                <div className='cols'>
                    <div className="about-col">
                        <h3>William Cathey</h3>
                        <p>FullStack Developer</p>


                    </div>
                    <div className="links-col">
                        <h4>Useful Links</h4>
                        <NavLink to="/">Home</NavLink>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://developer.mozilla.org/en-US/", "_blank")
                        }}>MDN</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://leetcode.com/", "_blank")
                        }}>Leetcode</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://cssbattle.dev/", "_blank")
                        }}>CSS Battles</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.codewars.com/dashboard", "_blank")
                        }}>Code Wars</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open("https://react-icons.github.io/react-icons/", "_blank")
                        }}>React Icons</p>
                    </div>
                    <div className="links-col">
                        <h4>Social Media</h4>
                        <p onClick={(Redirect)}>Linkedin</p>
                        <p onClick={(Redirect)}>Github</p>
                        <p onClick={(Redirect)}>SuperProf</p>
                        <p onClick={(Redirect)}>Upwork</p>


                    </div>
                    <div className='business-col'>
                        <h3>W.B.C. Integrations</h3>
                        <p>San Antonio, TX 78240</p>
                        <p>210-557-0187</p>
                        <p>Freelance Project Development</p>
                    </div>
                </div>


            </footer>
        </div>


    )
}

export default LandingPage;
