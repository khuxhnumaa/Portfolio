import React from 'react';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <ul>
                <li>
                    <a href="https://github.com/khuxhnumaa/Students-Engagement-Monitoring-" target="_blank" rel="noopener noreferrer">
                        <img src="https://yuanzitech.com/ai-smart-classroom-monitoring-system/" alt="Project Icon" className="project-icon" />
                        <span>Student's Engagement Monitoring System</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/khuxhnumaa/RAG-Document-Q-A" target="_blank" rel="noopener noreferrer">
                        <img src="https://stock.adobe.com/search?k=qs" alt="Project Icon" className="project-icon" />
                        <span>RAG Document Q&A</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/khuxhnumaa/Virtual-Paint" target="_blank" rel="noopener noreferrer">
                        <img src="https://paint-ai-color-visualizer.en.softonic.com/android" alt="Project Icon" className="project-icon" />
                        <span>Virtual Paint</span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Projects;