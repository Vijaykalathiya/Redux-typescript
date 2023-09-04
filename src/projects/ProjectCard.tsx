import { Link } from "react-router-dom";
import { Project } from "./Project";

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}

function formatDescription(description: String) {
    return description.substring(0,60) + '...';
}

function ProjectCard(props: ProjectCardProps) {
    const {project, onEdit} = props;
    const handleEditClick = (projectBeingEdit: Project) => {
        onEdit(projectBeingEdit);
    }
    return (
        <div className="card">
            <img src={project.imageUrl} alt="project name" />
            <section className="section dark">
                <Link to={'/projects/' + project.id}>
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                </Link>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>

                <button className="bordered" onClick={() => handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    );
}

export default ProjectCard;