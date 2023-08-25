import "./Projects.scss"
function ProjectItem({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) {

    return (
        <div
            className="project img d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="overlay"></div>
            <div className="text text-center p-4">
                <h3><a href="#">{title}</a></h3>
                <span>{description}</span>
            </div>
        </div>
    );
}


export default function Projects() {

    const projectData = [
        { colSize: "col-md-4", imageUrl: "images/project-4.jpg", title: "Branding & Illustration Design", description: "Web Design" },
        { colSize: "col-md-8", imageUrl: "images/project-5.jpg", title: "Branding & Illustration Design", description: "Web Design" },
        { colSize: "col-md-8", imageUrl: "images/project-1.jpg", title: "Branding & Illustration Design", description: "Web Design" },
        { colSize: "col-md-4", imageUrl: "images/project-2.jpg", title: "Branding & Illustration Design", description: "Web Design" },
        { colSize: "col-md-8", imageUrl: "images/project-6.jpg", title: "Branding & Illustration Design", description: "Web Design" },
        { colSize: "col-md-4", imageUrl: "images/project-3.jpg", title: "Branding & Illustration Design", description: "Web Design" }
    ];

    return (
        <section className="ftco-section ftco-project" id="projects">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center" data-aos="fade-up">
                        <h1 className="big big-2">Projects</h1>
                        <h2 className="mb-4">My Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
                <div className="row">
                    {projectData.map((project, index) => (
                        <div className={project.colSize} key={index} data-aos="fade-up">
                            <ProjectItem imageUrl={project.imageUrl} title={project.title} description={project.description} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
