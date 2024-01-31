import Project from "../types/project";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Url } from "next/dist/shared/lib/router/router";
import { motion } from "framer-motion";

interface Props {
    project: Project;
    showGitHubLink?: boolean;
}

const ProjectCard: React.FC<Props> = ({ project }) => {

    // variants
    const cardVariants = {
        hovered: {
            boxShadow: "0px 0px 30px 10px hsla(264, 44%, 27%, 1)",
            transition: {
                duration: 0.1,
                type: "ease-out",
            }
        },
        unHovered: {
            boxShadow: "0px 0px 0px 0px hsla(264, 44%, 27%, 1)",
            transition: {
                duration: 0.1,
                type: "ease-out",
            }
        }
    }


    const purpleRadialGradient = "radial-gradient(circle, rgba(252, 3, 3, 0.5) 0%, rgba(252, 3, 3, 0.5) 100%)";
    return (
        <motion.div 
        variants={cardVariants}
        whileHover="hovered"
        whileTap="hovered"
        initial="unHovered"
        className="flex flex-col w-96 rounded-lg shadow-lg backdrop-blur bg-white p-5">
            <Link href={`/projects/${project.slug}`}>
                <Image
                    className="w-full cursor-pointer object-cover"
                    width={project.imageWidth}
                    height={project.imageHeight}
                    src={project.image || "/imgs/projects/placeholder.webp"}
                    alt={project.title}
                />
            </Link>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                <p className="mb-4 text-gray-500">{project.description}</p>
                <div className="mt-auto flex items-center">
                    {project.liveLink && (
                        < Link href={project.liveLink as Url} target="_blank">
                            <button
                                type="button"
                                className="mr-4 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                            >
                                Visit
                            </button>
                        </Link>
                    )}
                    {project.gitHubLink && (
                        <Link href={project.gitHubLink as Url} target="_blank">
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
        </motion.div >
    );
};

export default ProjectCard;