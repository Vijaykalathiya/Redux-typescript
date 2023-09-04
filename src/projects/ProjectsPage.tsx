import { Fragment, useEffect, useState } from "react";
import { Project } from "./Project";
import ProjectList from "./ProjectList";
import { projectAPI } from './projectAPI';
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../state";
import { loadProjects } from './state/projectActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';

function ProjectsPage() {
    // const [projects, setProjects] = useState<Array<Project>>([]);
    // const [loading, setLoading] = useState(false);
    // const [errors, setErrors] = useState<string | undefined>(undefined);

    const loading = useSelector((appState: AppState) => appState.projectState.loading);
    const projects = useSelector((appState: AppState) => appState.projectState.projects);
    const error = useSelector((appState: AppState) => appState.projectState.error);
    const currentPage = useSelector((appState: AppState) => appState.projectState.page);

    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

    // useEffect(() => {
    //     async function loadProjects() {
    //         setLoading(true);
    //         try {
    //             const data = await projectAPI.get();
    //             setErrors('');
    //             setProjects(data);
    //         } catch(e) {
    //             if (e instanceof Error) {
    //                 setErrors(e.message);
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //    }
    //    loadProjects();
    // }, []);

    useEffect(() => {
        dispatch(loadProjects(1));
    }, [dispatch]);

    const handleMoreClick = () => {
        dispatch(loadProjects(currentPage + 1));
    }

    // const saveProject = ((project: Project) => {
    //     projectAPI.put(project).then((updatedProject) => {
    //         let updatedProjects = projects.map((p: Project) => {
    //             return p.id === project.id ? new Project(updatedProject) : p;
    //         });
    //         setProjects(updatedProjects);
    //     }).catch((e) => {
    //         if(e instanceof Error) {
    //             setErrors(e.message)
    //         }
    //     })
    // });

    return(
        <Fragment>
            <h1>Projects</h1>
            {error && (<div className="row"><div className="card large error"><section><p><span className="icon-alert inverse "></span>{error}</p></section></div></div>)}
            
            {/* normal */}
            {/* <ProjectList projects={projects} onSave={saveProject}></ProjectList> */}

            {/* using state */}
            <ProjectList projects={projects}></ProjectList>
            {loading && (<div className="center-page"><span className="spinner primary"></span><p>Loading...</p></div>)}
        </Fragment>
    );
}

export default ProjectsPage;