import Project from "../types/project";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
    project: Project;
    showGitHubLink?: boolean;
}

const ProjectCard: React.FC<Props> = ({ project, showGitHubLink = true }) => {
    return (
        <div className="flex flex-col w-72 rounded-lg shadow-lg mesh-bg">
            <Link href={`/projects/${project.slug}`}>
                <Image
                    className="w-full cursor-pointer object-cover"
                    width={project.imageWidth}
                    height={project.imageHeight}
                    src={"/imgs/3d/binary-coding.png"}
                    alt={project.title}
                />
            </Link>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                <p className="mb-4 text-gray-500">{project.description}</p>
                <div className="mt-auto flex items-center">
                    <Link href={project.liveLink}>
                        <button
                            type="button"
                            className="mr-4 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                        >
                            Visit
                        </button>
                    </Link>
                    {showGitHubLink && (
                        <Link href={project.gitHubLink as Url}>
                            <button
                                type="button"
                                className="rounded-md bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600"
                            >
                                GitHub
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;