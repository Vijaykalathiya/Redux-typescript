import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
    // onSave: (project: Project) => void;
}

function ProjectList({projects} : ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }
    const handleCancel = () => {
        setProjectBeingEdited({});
    }
    const items = projects.map((project) => (
        <div className="cols-sm" key={project.id}> 
            {projectBeingEdited === project ? (
                // onSave={onSave}
                <ProjectForm project={project} onCancel={handleCancel} /> )
            : ( <ProjectCard project={project} onEdit={handleEdit}></ProjectCard> )}
        </div>
    ));
    return <div className="row">{items}</div>
}

export default ProjectList;