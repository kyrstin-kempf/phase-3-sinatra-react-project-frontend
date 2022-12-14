import ProjectTile from "./ProjectTile";

function AllProjects({ projects, deleteProject }) {
  
    const projectList = projects.map((project) => <ProjectTile key={ project.id } project={ project } deleteProject={deleteProject} />)

    return (
        <div className="body"> 
        <h1>Home Improvement Projects</h1>
        <p className="center-text">Select a project to view tasks</p>
        <div className="tiles-container">
        {projectList}
        </div>
        </div>
    );
}
export default AllProjects;