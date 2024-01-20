"use client"

import IconTitle from "../components/IconTitle"
import Paragraph from "../components/Paragraph"
import SkillDisplay from "../components/SkillDisplay"
import HatIcon from "../icons/hat"
import { CIcon, CPPIcon, JSIcon, JavaIcon, PHPIcon, PythonIcon, ReactIcon, SQLIcon, TSIcon } from "../icons/skills"
import UserIcon from "../icons/user"

export default function About() {
    return (
        <main id="about" className="bg-white flex flex-row justify-evenly min-h-96 text-black p-20">
            <div className="w-1/3">
                <IconTitle icon={<UserIcon />} title="About me" />
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium soluta. Nihil, est quasi. Laudantium at sit deleniti inventore. Quo dolor placeat earum corrupti modi, sunt consequatur odio dolores adipisci!
                </Paragraph>
            </div>
            <div className="w-1/3">
                <IconTitle icon={<HatIcon />} title="Skills" />
                <div className="flex flex-wrap gap-2 py-4">
                    <SkillDisplay icon={<JSIcon />} title="Javascript" />
                    <SkillDisplay icon={<TSIcon />} title="Typescript" />
                    <SkillDisplay icon={<JavaIcon />} title="Java" />
                    <SkillDisplay icon={<CPPIcon />} title="C++" />
                    <SkillDisplay icon={<CIcon />} title="C" />
                    <SkillDisplay icon={<ReactIcon />} title="React" />
                    <SkillDisplay icon={<PythonIcon />} title="Python" />
                    <SkillDisplay icon={<PHPIcon />} title="PHP" />
                    <SkillDisplay icon={<SQLIcon />} title="SQL" />
                </div>
            </div>
        </main>
    )
}