"use client"
import Project from "../types/project"
import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"
import IconTitle from "../components/IconTitle"
import StarIcon from "../icons/star"

export default function Project() {
    return (
        <main id="projects" className="bg-[#212121] flex flex-col items-center min-h-96 text-black p-20">
            <div className="w-2/3 flex flex-col gap-4">
                <IconTitle animated icon={<StarIcon />} title="Projects" className="text-white" />
                <div className="flex flex-row justify-center flex-wrap gap-4">
                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}