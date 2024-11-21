import Skills from "./Skills"

export default function SkillsSection({ heading, skillsList }: { heading: string, skillsList: string[] }) {
    return (
        <div>
            <h2 className="SkillsHeading">{heading}</h2>
            <div className="skills">
                {skillsList.map((skill) => {
                    return (
                        <Skills skill={skill} />
                    )
                })}
            </div>
        </div>
    )
}