import styles from './Header.module.css';
import infoImg from '../../assets/info.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';

function Header() {


    const themeIcon = 'light' ? sun : moon;
    const githubIcon = 'light' ? githubLight : githubDark;
    const linkedinIcon = 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="info" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    src={infoImg}
                    className={styles.info}
                    alt="Profile picture of Harris Johnsen"
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Reham
                    <br />
                    Muhammed
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://github.com/RehamMuhammed" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/reham-muhammed-35679822a/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern React web apps.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Header;