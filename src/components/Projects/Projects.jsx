import styles from './Projects.module.css';
import ecoeats from '../../assets/ecoeats.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={ecoeats}
                    link="https://github.com/RehamMuhammed/EcoEats"
                    h3="EcoEats"
                    p="Donation App"
                />
            </div>
            <hr />
        </section>
    );
}

export default Projects;