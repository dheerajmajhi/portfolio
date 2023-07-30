import "./about.css"
import badge from "../../img/badge.png"
import comp from "../../img/completed-task.png"
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkmode=theme.state.darkmode;
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
                    className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I am a Full-Stack Developer and passionate about coding.</p>
                <p className="a-desc">Proficient in MongoDB, Express.js, Node.js, React. Passionate coder with expertise in HTML, CSS, JavaScript, C and C++ ,crafting innovative solutions and pushing the boundaries of technology.</p>
                <div className="a-right-wrapper">
                    <div className="a-exp">
                        <img src={badge} alt="" className="a-exp-img"/>
                        <p style={{color:darkmode && "black"}} className="a-exp-title">Dsa solved</p>
                        <p style={{color:darkmode && "black"}} className="a-exp-sub">400+ </p>
                    </div>
                    <div className="a-comp">
                        <img src={comp} alt="" className="a-comp-img" />
                        <p style={{color:darkmode && "black"}} className="a-comp-title">Completed</p>
                        <p style={{color:darkmode && "black"}} className="a-comp-sub">5+ Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;