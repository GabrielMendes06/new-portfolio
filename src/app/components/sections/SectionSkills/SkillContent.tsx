import Title from "../../global/Title"

const SkillContent: React.FC<string> = (skillTitle: string) => {
    return(
        <div className="skill-container">
            <Title className="skill-title" text={skillTitle}/>
            
        </div>
    )
}

export default SkillContent