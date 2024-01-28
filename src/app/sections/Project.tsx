"use client"

import IconTitle from "../components/IconTitle"
import Paragraph from "../components/Paragraph"
import ProjectCard from "../components/ProjectCard"
import SkillDisplay from "../components/SkillDisplay"
import HatIcon from "../icons/hat"
import UserIcon from "../icons/user"

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'This is project 1 description.',
        image: 'https://picsum.photos/800/600',
        imageWidth: 400,
        imageHeight: 200,
        slug: 'project-1',
        liveLink: 'https://project1.com',
        gitHubLink: 'https://github.com/username/project1',
    },
    {
        title: 'Project 2',
        description: 'This is project 2 description.',
        image: 'https://picsum.photos/800/600',
        imageWidth: 400,
        imageHeight: 200,
        slug: 'project-2',
        liveLink: 'https://project2.com',
        gitHubLink: 'https://github.com/'
    },
    {
        title: 'Project 3',
        description: 'This is project 3 description.',
        image: 'https://picsum.photos/800/600',
        imageWidth: 400,
        imageHeight: 200,
        slug: 'project-3',
        liveLink: 'https://project3.com',
        gitHubLink: 'https://github.com/'
    }

];

export default function Project() {
    return (
        <main id="projects" className="bg-white flex flex-row flex-wrap justify-evenly min-h-96 text-black p-20">
            <div className="flex flex-row flex-wrap gap-4">
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))
                }
            </div>
        </main>
    )
}