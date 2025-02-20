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











function LandingPage() {


    const Redirect = (e) => {
        e.preventDefault()
        if (e.target.innerText === 'Linkedin' || e.target.innerText === 'Lets Connect!') {
            window.location.replace("https://linkedin.com/in/william-cathey-398455337")
        }
        if (e.target.innerText === 'Github') {
            window.location.replace("https://github.com/Wcathey")
        }
        if (e.target.innerText === 'SuperProf') {
            window.location.replace("https://www.superprof.com/ir/28085740-624a77")
        }
        if (e.target.innerText === 'Upwork') {
            window.location.replace("https://www.upwork.com/freelancers/~010cc996229dd64140?mp_source=share")
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
                            window.location.replace("https://www.coursereport.com/schools/app-academy")
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
                            window.location.replace("https://github.com/Wcathey");

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
                            window.location.replace("https://developer.mozilla.org/en-US/")
                        }}>MDN</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.location.replace("https://leetcode.com/")
                        }}>Leetcode</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.location.replace("https://cssbattle.dev/")
                        }}>CSS Battles</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.location.replace("https://www.codewars.com/dashboard")
                        }}>Code Wars</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.location.replace("https://react-icons.github.io/react-icons/")
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
